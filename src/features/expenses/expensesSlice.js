import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: [],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (exp) => exp.id !== action.payload
      );
    },
  },
});

export const { addExpense ,deleteExpense } = expensesSlice.actions;

export default expensesSlice.reducer;