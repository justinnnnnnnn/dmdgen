// frontend/src/store/frog.js
import csrfFetch from './csrf';
import { useDispatch, useSelector } from 'react-redux';

// Action Types
const API_URL = 'http://localhost:3000/api/frogs';
const SET_FROGS = 'frog/SET_FROGS';
const REMOVE_FROG = 'frog/REMOVE_FROG';
const SET_SINGLE_FROG = 'frog/SET_SINGLE_FROG';
const UPDATE_FROG_FIELD = 'frog/UPDATE_FROG_FIELD';
const SET_FROG_DATA = 'frog/SET_FROG_DATA';
const SAVE_FROG = 'frog/SAVE_FROG';


// Action Creators
export const setFrogs = (frogs) => ({
  type: SET_FROGS,
  payload: frogs
});

export const removeFrog = (id) => ({
  type: REMOVE_FROG,
  payload: id
});

export const setSingleFrog = (frog) => ({
  type: SET_SINGLE_FROG,
  payload: frog
});

export const updateFrogField = (fieldname, value) => ({
  type: UPDATE_FROG_FIELD,
  payload: { fieldname, value }
});


// Thunk Action Creators
export const fetchFrogs = () => async (dispatch) => {
  const response = await csrfFetch(API_URL);
  const data = await response.json();
  dispatch(setFrogs(data));
};

export const destroyFrog = (id) => async (dispatch) => {
  await csrfFetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  dispatch(removeFrog(id));
};

export const fetchSingleFrog = (id) => async (dispatch) => {
  const response = await csrfFetch(`${API_URL}/${id}`);
  const data = await response.json();
  dispatch(setSingleFrog(data));
};


export const createFrog = (frogData) => async (dispatch, getState) => {
  try {
    const response = await csrfFetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ frog: frogData }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setFrogData(data)); // Dispatch an action to set frog data in your state
      return data;
    }

    throw new Error('Network response was not ok.');
  } catch (error) {
    console.error('There was an error creating the frog!', error);
  }
};

export const saveFrog = (frogId, formData) => async (dispatch) => {
  console.log("Saving frog data:", formData);
  const response = await csrfFetch(`${API_URL}/${frogId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ data: formData }),
    body: JSON.stringify({ frog: { data: formData } }),
  });
  const data = await response.json();
  dispatch({
    type: SAVE_FROG,
    payload: data
  });
};









// Action Creators
export const setFrogData = (data) => ({
  type: SET_FROG_DATA,
  payload: data
});

// Initial State
const initialState = {
  data: [],
  currentFrog: null,
  formData: {}
};

// Reducer
const frogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FROGS:
      return {
        ...state,
        data: action.payload
      };
    case REMOVE_FROG:
      return {
        ...state,
        data: state.data.filter(frog => frog.id !== action.payload)
      };
    case SET_SINGLE_FROG:
      return {
        ...state,
        currentFrog: action.payload
      };
    case UPDATE_FROG_FIELD:
      return {
        ...state,
        currentFrog: {
          ...state.currentFrog,
          data: {
            ...state.currentFrog.data,
            [action.payload.fieldname]: action.payload.value
          }
        }
      };
    case SAVE_FROG:
      const updatedFrogIndex = state.data.findIndex(frog => frog.id === action.payload.id);
      const updatedFrogs = [...state.data];
      if(updatedFrogIndex !== -1) {
        updatedFrogs[updatedFrogIndex] = action.payload;
      }
      return {
        ...state,
        data: updatedFrogs,
        currentFrog: action.payload
      };
    default:
      return state;
  }
};

export default frogReducer;
