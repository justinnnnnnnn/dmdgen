// frontend/src/store/frog.js
import csrfFetch from './csrf';
import { useDispatch, useSelector } from 'react-redux';

// Action Types

const API_URL = 'http://localhost:3000/api/frogs';

export const getFrogs = async () => {
  try {
    const response = await csrfFetch(API_URL);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Network response was not ok.');
  } catch (error) {
    console.error('There was an error fetching the frogs!', error);
  }
};

export const getFrog = async (id) => {
  try {
    const response = await csrfFetch(`${API_URL}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Network response was not ok.');
  } catch (error) {
    console.error(`There was an error fetching the frog with id ${id}!`, error);
  }
};

// export const createFrog = async (frogData) => {
//   try {
//     const response = await csrfFetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ frog: frogData }),
//     });
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     }
//     throw new Error('Network response was not ok.');
//   } catch (error) {
//     console.error('There was an error creating the frog!', error);
//   }
// };

// Thunk action creator
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

export const updateFrog = async (id, frogData) => {
  try {
    const response = await csrfFetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ frog: frogData }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Network response was not ok.');
  } catch (error) {
    console.error(`There was an error updating the frog with id ${id}!`, error);
  }
};

export const deleteFrog = async (id) => {
  try {
    const response = await csrfFetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error(`There was an error deleting the frog with id ${id}!`, error);
  }
};













// src/api/frogs.js

const API_ENDPOINT = 'http://localhost:3000/api/frogs';



























const SET_FROG_DATA = 'frog/SET_FROG_DATA';

// Action Creators
export const setFrogData = (data) => ({
  type: SET_FROG_DATA,
  payload: data
});

// Initial State
const initialState = {
  data: {} // Replace this with the actual initial state structure of your frog component
};

// Reducer
const frogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FROG_DATA:
      return {
        ...state,
        data: action.payload
      };
    // Add other cases for different actions if necessary
    default:
      return state;
  }
};

export default frogReducer;
