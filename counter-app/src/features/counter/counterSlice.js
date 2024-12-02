import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log(state.count)
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
    // reset: (state) => (state.count = 0), this causes errors, because this returns. either return a new value, or mutate the old one, but not both.
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions

export default counterSlice.reducer
