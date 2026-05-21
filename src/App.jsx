import ExpenseForm from './components/expenses/ExpenseForm';
import ExpenseList from './components/expenses/ExpenseList';
import CurrencySelector from './components/ui/CurrencySelector';
import AnalyzeButton from './components/analysis/AnalyzeButton';
import AnalysisPanel from './components/analysis/AnalysisPanel';
import InsightsPanel from './components/analysis/InsightsPanel';

function App() {
  return (
    <div>
      <img src="/Nexus Wallet/resources/images/letter n logo png_8229645.png" alt="Nexus Wallet Logo" style={{ width: '50px', height: '50px' }} />
      <h1>Nexus Wallet</h1>
      <CurrencySelector />
      <ExpenseForm />
      <ExpenseList />
      <AnalyzeButton />
      <AnalysisPanel />
      <InsightsPanel />
    </div>
  );
}

export default App;