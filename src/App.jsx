import ExpenseForm from './components/expenses/ExpenseForm';
import ExpenseList from './components/expenses/ExpenseList';
import CurrencySelector from './components/ui/CurrencySelector';
import AnalyzeButton from './components/analysis/AnalyzeButton';
import AnalysisPanel from './components/analysis/AnalysisPanel';
import InsightsPanel from './components/analysis/InsightsPanel';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>

      {/* Left Side */}
      <div style={{ flex: 1 }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left : Logo & title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src="/Nexus Wallet/resources/images/letter n logo png_8229645.png" alt="Nexus Wallet Logo" 
              alt="Nexus Wallet Logo"
              style={{ width: '50px', height: '50px' }} 
            />
            <h1>Nexus Wallet</h1>
          </div>
          
          {/* Right: currency selector */}
          <CurrencySelector />

        </div>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '15px',
          borderRadius: '8px' 
        }}>
          <ExpenseForm />
        </div>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '15px',
          borderRadius: '8px' 
        }}>
          <ExpenseList />
        </div>
        
      </div>

      {/* Right Side */}
      <div style={{ flex: 1 }}>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '15px',
          borderRadius: '8px' 
        }}>
          <AnalyzeButton />
        </div>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '15px',
          borderRadius: '8px' 
        }}>
          <AnalysisPanel />
        </div>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '15px',
          borderRadius: '8px' 
        }}>
          <InsightsPanel />
        </div>

      </div>

    </div>
  );
}

export default App;