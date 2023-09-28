import {createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import {DemoApiServices} from '../actions/DemoApiServices';

export const stopLoaderAndError = createAsyncThunk(
  'DemoReducer/stopLoaderAndError',
  async () => {
    return true;
  },
);

export const clearStore = createAsyncThunk(
  'DemoReducer/clearStore',
  async () => {
    return true;
  },
);

export const demoRequest = createAsyncThunk(
  'DemoReducer/demoRequest',
  async payload => {
    const response = await DemoApiServices.apiDemoRequest(payload);
    return response.data;
  },
);

const initialState = {
  loading: false,
  error: null,
  demoObject: null,
};

export const DemoReducer = createReducer(initialState, {
  [demoRequest.pending]: (state, action) => {
    return {...state, loading: true, error: null};
  },
  [demoRequest.fulfilled]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: null,
      demoObject: action.payload,
    };
  },
  [demoRequest.rejected]: (state, action) => {
    return {...state, loading: false, error: action.payload};
  },

  [stopLoaderAndError.fulfilled]: (state, action) => {
    return {...state, loading: false, error: null};
  },

  [clearStore.fulfilled]: (state, action) => {
    return initialState;
  },
});
