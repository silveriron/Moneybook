import { Container, Row, Col } from "react-bootstrap";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenseList }) => {
  console.log(expenseList);

  return (
    <Container className="expenseItem">
      <Row>
        <Col>
          <div className="dateBox">
            <p>{expenseList.date}</p>
          </div>
        </Col>
        <Col xs={8}>{expenseList.title}</Col>
        <Col>
          <div className="moneyBox">{expenseList.price}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseItem;
