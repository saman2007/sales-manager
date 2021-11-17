//import the style file
import "../styles/Filter.css"

function Filter(props) {
    return(
        //filter
        <select className="filter" onChange={e => {props.onFilterChange(e.target.value)}}>
            <option>All</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
        </select>
    )
}

export default Filter;