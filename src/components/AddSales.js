//import use state from react and css file
import {useState} from "react";
import "../styles/AddSales.css";

function AddSales(props) {
    //product name, value, date and number of products
    const [prName, setPrName] = useState("");
    const [prPrice, setPrValue] = useState("");
    const [prDate, setPrDate] = useState("");
    const [prNumber, setPrNumber] = useState(1);

    return (
        //send all states and allValue to the main component when user submit the form
        <form className="add_sales_container" onSubmit= {(e) => {e.preventDefault(); props.addSale({name: prName, value: prPrice, AllValue: prPrice * prNumber, number: Math.round(prNumber), date: prDate})}}>
            <label htmlFor="product_name">your product name:</label>
            <input id="product_name" placeholder="enter your product name" required type="text" onChange={(e) => setPrName(e.target.value)} />
            <label htmlFor="product_price">your product price:</label>
            <input id="product_price" placeholder="enter your product value" required type="number" min={0.01} step={0.01} onChange={(e) => setPrValue(Number(e.target.value))} />
            <label htmlFor="product_number">your number of product:</label>
            <input id="product_number" placeholder="enter your number of product" type="number" onChange={(e) => setPrNumber(Number(e.target.value))} />
            <label htmlFor="soled_date">sold date:</label>
            <input type="date" id="soled_date" min='2019-01-01' max='2021-12-31' required onChange={(e) => setPrDate(e.target.value)} />
            <button className="submit" type="submit">Submit</button>
        </form>
    )
}

export default AddSales;