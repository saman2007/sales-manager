//import styles and chart bars
import "../styles/Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    let chartBars = [];
    //to create 12 chart bars with 12 months in a year
    for (let counter = 0; counter < 12; counter++) {
        //create a date obj and set the counter as a month
        let date = new Date(2020, counter, 1);
        //set the short name of a month in JSx and some other things and then push the JSX in the chartBars variable
        chartBars.push(<ChartBar month={date.toLocaleString('en-us', { month: 'short' })} value={props.monthlySales[counter] + "%"} sale_number={props.monthlySales[counter]} key={counter}></ChartBar>)
    }
    return(
        <div className="chart">
            {chartBars}
        </div>
    )
}

export default Chart;