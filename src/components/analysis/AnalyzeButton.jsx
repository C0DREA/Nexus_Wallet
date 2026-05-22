import { useDispatch, useSelector } from 'react-redux';
import { setSuggestions } from '../../features/analysis/analysisSlice';

function AnalyzeButton() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);

  const handleAnalyze = () => {
    const suggestions = [];

    if (expenses.length === 0) {
      suggestions.push({
        id: 'empty',
        text: 'No expenses to analyze',
        status: 'info',
        comment: '',
      });

      dispatch(setSuggestions(suggestions));
      return;
    }

    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    const categoryTotals = {};

    expenses.forEach((exp) => {
      if (!categoryTotals[exp.category]) {
        categoryTotals[exp.category] = 0;
      }
      categoryTotals[exp.category] += exp.amount;
    });

    // Rule 1 — High total spending
    if (total > 100) {
      suggestions.push({
        id: 'total',
        text: `Total spending is high: ${total} RON`,
        status: 'pending',
        comment: '',
      });
    }

    // Rule 2 — Category percentage
    for (const category in categoryTotals) {
      const percent = ((categoryTotals[category] / total) * 100).toFixed(0);

      if (percent > 20) {
        suggestions.push({
          id: `category-${category}`,
          text: `${category} represents ${percent}% of your spending`,
          status: 'pending',
          comment: '',
        });
      }
    }

    // Rule 3 — Small repeated expenses (basic “leak” idea)
    const smallExpenses = expenses.filter((exp) => exp.amount < 20);

    if (smallExpenses.length >= 2) {
      suggestions.push({
        id: 'leaks',
        text: 'Many small expenses detected — possible money leaks',
        status: 'pending',
        comment: '',
      });
    }

    // Fallback
    if (suggestions.length === 0) {
      suggestions.push({
        id: 'balanced',
        text: 'Spending looks balanced',
        status: 'info',
        comment: '',
      });
    }

    dispatch(setSuggestions(suggestions));
  };

  return (
    <button style={{ width: '100%', padding: '10px' }} onClick={handleAnalyze}>
      Run Nexus AI Analysis
    </button>   
  );
}

export default AnalyzeButton;