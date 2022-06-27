import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenseLists, setExpenseLists] = useState([
    {
      id: 1,
      title: "볼펜",
      price: 5000,
      date: new Date("2020-12-01"),
    },
    {
      id: 2,
      title: "티셔츠",
      price: 10000,
      date: new Date("2019-07-03"),
    },
    {
      id: 3,
      title: "강아지 사료",
      price: 23000,
      date: new Date("2019-08-11"),
    },
    {
      id: 4,
      title: "우드스틱",
      price: 9000,
      date: new Date("2022-02-14"),
    },
    {
      id: 5,
      title: "강아지 사료",
      price: 23000,
      date: new Date("2020-11-18"),
    },
    {
      id: 6,
      title: "음료수",
      price: 1900,
      date: new Date("2020-04-04"),
    },
  ]);

  const expenseListHandler = (expenseData) => {
    console.log("App.js")
    const nextExpenseLists = [expenseData, ...expenseLists];
    setExpenseLists(nextExpenseLists);
  };

  const [year, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  const filteredExpenseLists = expenseLists.filter((expenseList) => {
    return expenseList.date.getFullYear() === +year
  })

  return (
    <div>
      <NewExpense onSaveExpense={expenseListHandler} />
      <Expense expenseLists={filteredExpenseLists} year={year} yearChangeHandler={yearChangeHandler} />
    </div>
  );
}

export default App;
