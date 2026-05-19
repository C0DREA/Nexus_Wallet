import { useDispatch } from 'react-redux';
import { fetchRate } from '../../features/currency/currencySlice';

function CurrencySelector() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log('Selected:', e.target.value); /* Quick test to confirm Redux + API works */
    dispatch(fetchRate(e.target.value));
  };

  return (
    <select onChange={handleChange}>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
      <option value="RUB">RUB</option>
    </select>
  );
}

export default CurrencySelector;