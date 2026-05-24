import ExpenseForm from './components/expenses/ExpenseForm';
import ExpenseList from './components/expenses/ExpenseList';
import CurrencySelector from './components/ui/CurrencySelector';
import AnalyzeButton from './components/analysis/AnalyzeButton';
import AnalysisPanel from './components/analysis/AnalysisPanel';
import InsightsPanel from './components/analysis/InsightsPanel';
import './App.css';
import Logo from '../resources/images/Logo2.png';

function App() {
  return (
    <div className='app-container'>

      {/* Left Side */}
      <div style={{ flex: 1, minWidth: '300px' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left : Logo & title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
            <img 
              src={Logo}
              alt="Nexus Wallet Logo"
              style={{ width: '100px', height: '70px' }} 
            />
            <h1>Nexus Wallet</h1>
          </div>
          
          {/* Right: currency selector */}
          <CurrencySelector />

        </div>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'  
        }}>
          <ExpenseForm />
        </div>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'  
        }}>
          <ExpenseList />
        </div>
        
      </div>

      {/* Right Side */}
      <div style={{ flex: 1, minWidth: '300px' }}>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'  
        }}>
          <AnalyzeButton />
        </div>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'  
        }}>
          <AnalysisPanel />
        </div>

        <div style={{ 
          marginBottom: '20px',
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'  
        }}>
          <InsightsPanel />
        </div>

      </div>

    </div>
  );
}

export default App;