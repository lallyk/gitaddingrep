const Expenses = () => {
  return (
    <div>
      <form>
        <label htmlFor="amount">Amount: </label>
        <input type="number" required />

        <label htmlFor="description">Description:</label>
        <input type="text" required />

        <label htmlFor="category">Category:</label>
        <select>
          <option value="Fuel">Fuel</option>
          <option value="Food">Food</option>
          <option value="shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
};
export default Expenses;
