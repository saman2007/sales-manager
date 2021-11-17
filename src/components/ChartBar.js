//import the style file
import "../styles/ChartBar.css";

function ChartBar(props) {
    return(
        /*
        chart container contain a chart bar, number of sales and month name
        chart bar contain a chart fill that shows the percent of sales in a month
        */
        <div className="chart_bar">
            <div className="chart_inner">
                <div className="chart_fill" style={{height: props.value}}></div>
            </div>
            <div className="hide_info">{props.sale_number}</div>
            <p>{props.month}</p>
        </div>
    )
}

export default ChartBar;