import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenseLists, setExpenseLists] = useState([
    {
      id: 1,
      title: "dummy",
      price: 5000,
      date: "2022-06-02",
    },
    {
      id: 2,
      title: "dummy",
      price: 5000,
      date: "2022-06-02",
    },
    {
      id: 3,
      title: "dummy",
      price: 5000,
      date: "2022-06-02",
    },
  ]);

  const expenseListHandler = (expenseData) => {
    const nextExpenseLists = [...expenseLists, expenseData];
    setExpenseLists(nextExpenseLists);
  };

  return (
    <div>
      <NewExpense onSaveExpense={expenseListHandler} />
      <Expense expenseLists={expenseLists} />
    </div>
  );
}

export default App;
