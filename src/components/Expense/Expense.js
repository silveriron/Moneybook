import ExpenseItem from "./ExpenseItem";
import { Container } from "react-bootstrap";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import Chart from "../Chart/Chart";

const Expense = ({ expenseLists, year, yearChangeHandler }) => {

  return (
    <Container className="expenseList">
      <ExpenseFilter selected={year} yearChangeHandler={yearChangeHandler} />
      <Chart expenseLists={expenseLists}/>
      {expenseLists.length === 0 && <div className="expenseItemDiv">
        <h2>지출 목록이 없습니다.</h2>
        </div>}
      {expenseLists.map((expenseList) => {
        return (
          <ExpenseItem
            expenseList={expenseList}
            key={expenseList.id}
          />
        );
      })}

    </Container>
  );
};

export default Expense;
