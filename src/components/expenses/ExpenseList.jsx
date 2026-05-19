import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../../features/expenses/expensesSlice';

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Expenses</h2>

      {expenses.length === 0 && <p>No expenses yet</p>}

      {expenses.map((exp) => (
        <div key={exp.id}>
          <span>
            {exp.title} - {exp.amount} RON ({exp.category})
          </span>

          <button onClick={() => dispatch(deleteExpense(exp.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;