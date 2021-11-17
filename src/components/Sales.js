//import styles
import "../styles/Sales.css"

function Sales(props) {
    //sale cards container
    return(
    <div className="sales_container">
        {props.children}
    </div>
    )
}

export default Sales;