import ExpenseForm from './components/expenses/ExpenseForm';
import ExpenseList from './components/expenses/ExpenseList';
import CurrencySelector from './components/ui/CurrencySelector';

function App() {
  return (
    <div>
      <img src="/Nexus Wallet/resources/images/letter n logo png_8229645.png" alt="Nexus Wallet Logo" style={{ width: '50px', height: '50px' }} />
      <h1>Nexus Wallet</h1>
      <CurrencySelector />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;