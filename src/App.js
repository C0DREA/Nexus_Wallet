import ExpenseForm from './components/expenses/ExpenseForm';
import ExpenseList from './components/expenses/ExpenseList';
import CurrencySelector from './components/ui/CurrencySelector';

function App() {
  return (
    <div>
      <h1>Nexus Wallet</h1>

      <CurrencySelector />

      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;