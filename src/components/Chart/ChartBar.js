import { Col } from "react-bootstrap";
import "./ChartBar.css"

const ChartBar = ({month, price, totalPrice}) => {
    let chartBarHeight
    if (price === 0) {
        chartBarHeight = "0%"
    } else {
        chartBarHeight = Math.round((price / totalPrice) * 100) + "%"
    }


    return(
        <Col>
            <div className="chartBar">
                <div className="chartBar__fill" style={{height: chartBarHeight}}></div>
            </div>
            <div className="chartLabel">{month + 1}월</div>
        </Col>
    )
}

export default ChartBar;