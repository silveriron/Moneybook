import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const dateHandler = (e) => {
    const date = new Date(e.target.value).toDateString()
    setDate(date);
  };

  const expenseHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      price,
      date,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData);
  };

  return (
    <Container className="newExpense">
      <form onSubmit={expenseHandler}>
        <Row>
          <Col>
            <label>품목</label>
            <input name="title" type="text" onInput={titleHandler} />
          </Col>
          <Col>
            <label>가격</label>
            <input name="price" type="number" onInput={priceHandler} />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>날짜</label>
            <input
              name="date"
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onInput={dateHandler}
            />
          </Col>
          <Col>
            <button type="submit">저장</button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default NewExpense;
