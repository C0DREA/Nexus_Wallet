import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../../features/expenses/expensesSlice';

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();
  const { rate, selectedCurrency } = useSelector(
    (state) => state.currency
  );

  return (
    <div>
      <h2>Expenses</h2>

      {expenses.length === 0 && <p>No expenses yet</p>}

      {expenses.map((exp) =>  {
        const converted = rate ? (exp.amount * rate).toFixed(2) : '...';

        return (
          <div key={exp.id}>
            <span>
              {exp.title} ({exp.category}) - {exp.amount} RON ( ~{converted} {selectedCurrency} );
            </span>

            <button onClick={() => dispatch(deleteExpense(exp.id))}>
              Delete
            </button>
          </div>
      );
    })}
    </div>
  );
}

export default ExpenseList;