import '@testing-library/jest-dom';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExpenseForm from './ExpenseForm';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../../features/expenses/expensesSlice';
import categoriesReducer from '../../features/categories/categoriesSlice';
import userEvent from '@testing-library/user-event';

test('user can type in inputs', async () => {
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

  const titleInput = screen.getByPlaceholderText('Expense title');
  const amountInput = screen.getByPlaceholderText('Amount (RON)');

  await userEvent.type(titleInput, 'Pizza');
  await userEvent.type(amountInput, '50');

  expect(titleInput.value).toBe('Pizza');
  expect(amountInput.value).toBe('50');
});

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