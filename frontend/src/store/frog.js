// frontend/src/store/frog.js
import csrfFetch from './csrf';
import { useDispatch, useSelector } from 'react-redux';

// Action Types
const API_URL = 'http://localhost:3000/api/frogs';
const SET_FROGS = 'frog/SET_FROGS';
const REMOVE_FROG = 'frog/REMOVE_FROG';
const SET_SINGLE_FROG = 'frog/SET_SINGLE_FROG';
const UPDATE_FROG_FIELD = 'frog/UPDATE_FROG_FIELD';



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

export const updateFrogField = (field, value) => ({
  type: UPDATE_FROG_FIELD,
  payload: { field, value }
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







const SET_FROG_DATA = 'frog/SET_FROG_DATA';

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
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value
        }
      };
    // Add other cases for different actions if necessary
    default:
      return state;
  }
};

export default frogReducer;
