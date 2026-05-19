import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addExpense } from '../../features/expenses/expensesSlice';
import { addCategory } from '../../features/categories/categoriesSlice';

function ExpenseForm() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (!newCategory) return;

    dispatch(addCategory(newCategory));
    setNewCategory('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
    };

    dispatch(addExpense(newExpense));

    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div>
        <input
          type="text"
          placeholder="New category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        <button type="button" onClick={handleAddCategory}>
          Add Category
        </button>
      </div>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (RON)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;