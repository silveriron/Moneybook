import { Container, Row } from "react-bootstrap";
import ChartBar from "./ChartBar";

const Chart = ({expenseLists}) => {
    let totalPrice = 0; 
    expenseLists.map(expenseList => {
        return totalPrice += expenseList.price
        })

    const MonthPriceData = [
        {month: 0, price: 0},
        {month: 1, price: 0},
        {month: 2, price: 0},
        {month: 3, price: 0},
        {month: 4, price: 0},
        {month: 5, price: 0},
        {month: 6, price: 0},
        {month: 7, price: 0},
        {month: 8, price: 0},
        {month: 9, price: 0},
        {month: 10, price: 0},
        {month: 11, price: 0}
    ]

    for (const expenseList of expenseLists) {
        const month = expenseList.date.getMonth()
        MonthPriceData[month].price += expenseList.price
    }


    return(
        <Container>
            <Row>
                {MonthPriceData.map(data => {
                    return <ChartBar key={data.month} month={data.month} price={data.price} totalPrice={totalPrice}/>
                })}
            </Row>
        </Container>
    )
}

export default Chart;