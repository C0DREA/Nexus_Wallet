import { useDispatch, useSelector } from 'react-redux';
import { setSuggestions } from '../../features/analysis/analysisSlice';

function AnalyzeButton() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);

  const handleAnalyze = () => {
    const suggestions = [];

    const categoryTotals = {};

    expenses.forEach((exp) => {
      if (!categoryTotals[exp.category]) {
        categoryTotals[exp.category] = 0;
      }
      categoryTotals[exp.category] += exp.amount;
    });

    for (const category in categoryTotals) {
      if (categoryTotals[category] > 100) {
        suggestions.push({
            id: category,
            text: `High spending in ${category}: ${categoryTotals[category]} RON`,
            status: 'pending',
            comment: '',
      });
      }
    }

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

  return <button onClick={handleAnalyze}>Analyze</button>;
}

export default AnalyzeButton;