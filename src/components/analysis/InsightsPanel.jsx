import { useSelector } from 'react-redux';

function InsightsPanel() {
  const expenses = useSelector((state) => state.expenses.expenses);

  if (expenses.length === 0) {
    return (
      <div>
        <h2 style={{ marginBottom: '15px' }}>Nexus Insights</h2>
        <p>No data available</p>
      </div>
    );
  }

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const categoryTotals = {};

  expenses.forEach((exp) => {
    if (!categoryTotals[exp.category]) {
      categoryTotals[exp.category] = 0;
    }
    categoryTotals[exp.category] += exp.amount;
  });

  return (
    <div>
      <h2 style={{ marginBottom: '15px' }}>Nexus Insights</h2>

      <p>Total spending: {total} RON</p>

      <h3>By Category:</h3>

      {Object.entries(categoryTotals).map(([category, amount]) => {
        const percent = ((amount / total) * 100).toFixed(0);

        return (
          <p key={category}>
            {category}: {amount} RON ({percent}%)
          </p>
        );
      })}
    </div>
  );
}

export default InsightsPanel;