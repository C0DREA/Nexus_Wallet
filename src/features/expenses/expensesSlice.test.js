import { test, expect } from 'vitest';
import expensesReducer, { addExpense, deleteExpense } from './expensesSlice';

test('should add an expense with correct data', () => {
  const initialState = { expenses: [] };

  const newExpense = {
    id: 1,
    title: 'Coffee',
    amount: 10,
    category: 'Food',
  };

  const newState = expensesReducer(
    initialState,
    addExpense(newExpense)
  );

  expect(newState.expenses.length).toBe(1);
  expect(newState.expenses[0].title).toBe('Coffee');
  expect(newState.expenses[0].amount).toBe(10);
  expect(newState.expenses[0].category).toBe('Food');
});

test('should delete an expense by id', () => {
  const initialState = {
    expenses: [
      { id: 1, title: 'Coffee', amount: 10, category: 'Food' },
    ],
  };

  const newState = expensesReducer(
    initialState,
    deleteExpense(1)
  );

  expect(newState.expenses.length).toBe(0);
});