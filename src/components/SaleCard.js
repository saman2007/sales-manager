//import styles
import "../styles/SaleCard.css"

function SaleCard(props) {
    //sale card component that contain name, value, number, allValue and date
    return(
        <div className="sale_card">
            <p><span style={{color: "black"}}>name:</span> {props.name}</p>
            <p><span style={{color: "black"}}>value:</span> {props.value.toFixed(2)}</p>
            <p><span style={{color: "black"}}>number:</span> {Math.round(props.number)}</p>
            <p><span style={{color: "black"}}>All Value:</span> {props.AllValue.toFixed(2)}</p>
            <p><span style={{color: "black"}}>date:</span> {props.date}</p>
        </div>
    )
}

export default SaleCard;