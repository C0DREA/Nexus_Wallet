import { test, expect } from 'vitest';
import expensesReducer, { addExpense } from './expensesSlice';

test('should add an expense', () => {
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
});