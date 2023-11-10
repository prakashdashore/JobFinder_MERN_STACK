import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employe : null,
  errors : [],
  isAuthencated : false,
}

export const employeReducer = createSlice({
  name: 'employe',
  initialState,
  reducers: {
    addEmploye: (state, action) => {
        state.employe = action.payload
        state.isAuthencated = true
    },
    removeEmploye: (state) => {
        state.employe = null
        state.isAuthencated = false
    },
    addError: (state, action) => {
        state.errors.push(action.payload)
    },
    removeError: (state) => {
        state.errors = []
    },

   
  },
})

// Action creators are generated for each case reducer function
export const {addEmploye, removeEmploye , addError , removeError} = employeReducer.actions

export default employeReducer.reducer