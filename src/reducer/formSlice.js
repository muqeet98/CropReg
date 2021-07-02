import {createSlice} from "@reduxjs/toolkit";// basic example slice copied from the docs
const formSlice = createSlice({
  name: 'counter',
  initialState: {
    formSubmit: false,
  },
  reducers: {    setFormSubmit: (state, action) => {
      state.formSubmit = action.payload;
    },
  },
});// destructure actions and reducer from the slice (or you can access as counterSlice.actions)
const { actions, reducer } = formSlice;// export individual action creator functions
export const { setFormSubmit } = actions;// often the reducer is a default export, but that doesn't matter
export default reducer;