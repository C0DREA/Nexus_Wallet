import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../features/expenses/expensesSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import currencyReducer from '../features/currency/currencySlice';

export const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        categories: categoriesReducer,
        currency: currencyReducer,
    }, 
});