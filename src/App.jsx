import ExpenseForm from './components/expenses/ExpenseForm';
import ExpenseList from './components/expenses/ExpenseList';
import CurrencySelector from './components/ui/CurrencySelector';
import AnalyzeButton from './components/analysis/AnalyzeButton';
import AnalysisPanel from './components/analysis/AnalysisPanel';
import InsightsPanel from './components/analysis/InsightsPanel';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>

      {/* Left Side */}
      <div style={{ flex: 1 }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src="/Nexus Wallet/resources/images/letter n logo png_8229645.png" alt="Nexus Wallet Logo" 
            alt="Nexus Wallet Logo"
            style={{ width: '50px', height: '50px' }} 
          />
          <h1>Nexus Wallet</h1>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <CurrencySelector />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <ExpenseForm />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <ExpenseList />
        </div>
        
      </div>

      {/* Right Side */}
      <div style={{ flex: 1 }}>

        <div style={{ marginBottom: '20px' }}>
          <AnalyzeButton />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <AnalysisPanel />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <InsightsPanel />
        </div>

      </div>

    </div>
  );
}

export default App;