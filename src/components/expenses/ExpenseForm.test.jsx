import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExpenseForm from './ExpenseForm';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../../features/expenses/expensesSlice';
import categoriesReducer from '../../features/categories/categoriesSlice';

test('renders expense form inputs', () => {
  const store = configureStore({
    reducer: {
      expenses: expensesReducer,
      categories: categoriesReducer,
    },
  });

  render(
    <Provider store={store}>
      <ExpenseForm />
    </Provider>
  );

  expect(screen.getByPlaceholderText('Expense title')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Amount (RON)')).toBeInTheDocument();
});