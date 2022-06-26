import ExpenseItem from "./ExpenseItem";
import { Container } from "react-bootstrap";
import "./Expense.css";

const Expense = ({ expenseLists }) => {
  return (
    <Container className="expenseList">
      {expenseLists.map((expenseList) => {
        return <ExpenseItem expenseList={expenseList} key={expenseList.id} />;
      })}
    </Container>
  );
};

export default Expense;
