import ExpenseItem from "./ExpenseItem";
import { Container } from "react-bootstrap";
import "./Expense.css";

const Expense = () => {
  return (
    <Container className="expenseList">
      <ExpenseItem />
    </Container>
  );
};

export default Expense;
