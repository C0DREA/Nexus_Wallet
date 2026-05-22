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
      <h2 style={{ marginBottom: '15px' }}>Expenses</h2>

      <div style={{ borderTop: '1px solid #eee', marginTop: '10px' }}>
        {expenses.length === 0 && <p>No expenses yet</p>}

        {expenses.map((exp) => {
          const converted = rate ? (exp.amount * rate).toFixed(2) : '...';

          return (
            <div
              key={exp.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                borderBottom: '1px solid #eee'
              }}
            >
            {/* LEFT */}
            <div>
              <strong>{exp.title}</strong>
              <div style={{ fontSize: '12px', color: 'gray' }}>
                {exp.category}
              </div>
            </div>

            {/* RIGHT */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>
                {exp.amount} RON
                <span style={{ fontSize: '12px', color: 'gray', marginLeft: '5px' }}>
                  (~{converted} {selectedCurrency})
                </span>
              </span>

              <button 
                style={{
                  backgroundColor: '#e74c3c',
                  padding: '5px 8px',
                  fontSize: '12px' 
                }}
                onClick={() => dispatch(deleteExpense(exp.id))}
              >
                Delete
              </button>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseList;