import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ yearChangeHandler, selected }) => {
  const changeYearHandler = (e) => {
    yearChangeHandler(e.target.value);
  };
  return (
    <Container className="ExpenseFilter">
      <Row>
        <Col>지출연도</Col>
        <Col className="yearSelecter">
          <select value={selected} name="yeaers" onChange={changeYearHandler}>
            <option value="2019">2019년</option>
            <option value="2020">2020년</option>
            <option value="2021">2021년</option>
            <option value="2022">2022년</option>
          </select>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseFilter;
