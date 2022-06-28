import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./NewExpense.css";

const NewExpense = (props) => {
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const dateInputRef = useRef();

  const [isButtonStatus, setIsButtonStatus] = useState("추가하기");

  const [buttonView, setButtonView] = useState("none");

  const formChangeHandler = () => {
    if (isButtonStatus === "추가하기") {
      setButtonView("block");
      setIsButtonStatus("숨기기");
    } else {
      setButtonView("none");

      setIsButtonStatus("추가하기");
    }
  };

  const expenseHandler = (e) => {
    e.preventDefault();
    const title = titleInputRef.current.value;
    const price = +priceInputRef.current.value;
    const date = new Date(dateInputRef.current.value);
    const expenseData = {
      title,
      price,
      date,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData);
    titleInputRef.current.value = "";
    priceInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  return (
    <Container className="newExpense">
      <form style={{ display: buttonView }} onSubmit={expenseHandler}>
        <Row>
          <Col>
            <label>품목</label>
            <input name="title" type="text" ref={titleInputRef} />
          </Col>
          <Col>
            <label>가격</label>
            <input name="price" type="number" ref={priceInputRef} />
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
              ref={dateInputRef}
            />
          </Col>
          <Col>
            <button type="submit">저장</button>
          </Col>
        </Row>
      </form>
      <Row>
        <Col className="addButton">
          <button onClick={formChangeHandler}>{isButtonStatus}</button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewExpense;
