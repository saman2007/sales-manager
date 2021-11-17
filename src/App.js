// import components and styles
import AddSales from "./components/AddSales";
import "./App.css";
import Chart from "./components/Chart";
import Sales from "./components/Sales";
import Filter from "./components/Filter";
import SaleCard from "./components/SaleCard";
import { useState } from "react";


function App() {
  //states
  const [sales, setSales]= useState([]);
  const [filter, setFilter] = useState("All");
  //an array to store monthly sales
  let monthlySales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //to store sales card or "no sales found"
  let salesCard = <p>no sales found!</p>;
  //to store sum of sales prices
  let allMoney = 0;
  //filter condition
  if (sales.length > 0) {
    //show all the sales if the filter is on All
    if (filter === "All") {
      sales.map(sale => (allMoney += sale.AllValue))
      salesCard = sales.map((element, index) => (
        <SaleCard name={element.name} value={element.value} AllValue={element.AllValue} date={element.date} number={element.number} key={index}/>
      ))
      sales.forEach(sale => {
        let splitedDate = sale.date.split("-");
        monthlySales[Number(splitedDate[1]) - 1] += sale.number;
      });
      //show sales with specific date if the filter is on 2019, 2020 or 2021
    } else if(filter === "2021" || filter === "2020" || filter === "2019") {
      //store filtered objects
      let filteredSales = sales.filter(sale => sale.date.includes(filter));
      //store sum of stored prices
      filteredSales.forEach(sale => {
        allMoney += sale.AllValue;
      });
      //map filtered sales objects
      salesCard = filteredSales.map((element, index) => (
        <SaleCard name={element.name} value={element.value} AllValue={element.AllValue} date={element.date} number={element.number} key={index}/>
      ))
      /* split objects dates and get the month number and add the number
       of soled products to the month index in monthlySales */ 
      filteredSales.forEach(sale => {
        let splitedDate = sale.date.split("-");
        monthlySales[Number(splitedDate[1]) - 1] += sale.number;
      });
    }
    if (salesCard.length === 0) {
      salesCard = <p>no sales found!</p>;
    }
  }
  return (
    <div className="container">
      <AddSales addSale={(newSale) => {setSales([newSale, ...sales])}}></AddSales>     
      <Chart monthlySales={monthlySales}></Chart>
      <Sales>
        <Filter onFilterChange={setFilter}></Filter>
        {salesCard}
        <p>all money: {allMoney.toFixed(2)}</p>
      </Sales>
    </div>
  );
}

export default App;
