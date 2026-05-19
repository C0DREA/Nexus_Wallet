import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Food', 'Transport', 'Bills', 'Entertainment', 'Other'],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const newCategory = action.payload.trim();

      if (
        newCategory &&
        !state.categories.includes(newCategory)
      ) {
        state.categories.push(newCategory);
      }
    },
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;