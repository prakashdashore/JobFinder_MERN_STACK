import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: null,
  internships: null,
  student: null,
  errors: [],
  isAuthencated: false,
};

export const studentReducer = createSlice({
  name: "student",
  initialState,
  reducers: {
    addAllJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addAllInternships: (state, action) => {
      state.internships = action.payload;
    },
    addStudent: (state, action) => {
      state.student = action.payload;
      state.isAuthencated = true;
    },
    removeStudent: (state) => {
      state.student = null;
      state.isAuthencated = false;
    },
    addError: (state, action) => {
      state.errors.push(action.payload);
    },
    removeError: (state) => {
      state.errors = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, removeStudent, addError, removeError , addAllJobs , addAllInternships } =
  studentReducer.actions;

export default studentReducer.reducer;
