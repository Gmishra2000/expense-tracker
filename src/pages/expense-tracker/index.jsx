import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import "./index.scss";
export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description: "HairCut",
      transactionAmount: 70,
      transactionType: "expense",
    });
  };

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1>Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            <h2> $0.00</h2>
          </div>
          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>$0.00</p>
            </div>
            <div className="expenses">
              <h4>Expensed</h4>
              <p>$0.00</p>
            </div>
          </div>
          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Amount"
              onChange={(e) => setTransactionAmount(e.target.value)}
              required
            />
            <div class="radio-container">
              <input
                type="radio"
                id="expense"
                value="expense"
                onChange={(e) => setTransactionType(e.target.value)}
              />
              <label for="expense">Expense</label>
            </div>
            <div class="radio-container">
              <input
                type="radio"
                id="income"
                value="income"
                onChange={(e) => setTransactionType(e.target.value)}
              />
              <label for="income">Income</label>
            </div>
            <button type="submit">Add Transaction</button>
          </form>
        </div>
      </div>
      <div className="transactions">
        <h3>Transactions</h3>
      </div>
    </>
  );
};
