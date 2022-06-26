import ExpenseItem from "./ExpenseItem";
import { Container } from "react-bootstrap";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expense = ({ expenseLists }) => {
  const [year, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  return (
    <Container className="expenseList">
      <ExpenseFilter selected={year} yearChangeHandler={yearChangeHandler} />
      {expenseLists.map((expenseList) => {
        return (
          <ExpenseItem
            year={year}
            expenseList={expenseList}
            key={expenseList.id}
          />
        );
      })}
    </Container>
  );
};

export default Expense;
