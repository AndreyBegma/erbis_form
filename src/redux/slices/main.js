import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {
    status: "no created",
    name: "",
    email: "",
    message: ""
  },
  form: {
    name: "",
    email: "",
    message: ""
  }
}

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeForm: (state, { payload }) => {
      const { type, newValue } = payload
      state.form[type] = newValue
    },
    createUser: (state) => {
      state.user = {
        ...state.user,
        status:"created",
        ...state.form
      }
    }
  }
})


export const { changeForm, createUser } = mainSlice.actions

export default mainSlice.reducer