import { Container, Row, Col } from "react-bootstrap";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <Container className="expenseItem">
      <Row>
        <Col>
          <div className="dateBox">
            <p>2022년</p>
            <p>6월 22일</p>
          </div>
        </Col>
        <Col xs={8}>물티슈</Col>
        <Col>
          <div className="moneyBox">5,000원</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseItem;
