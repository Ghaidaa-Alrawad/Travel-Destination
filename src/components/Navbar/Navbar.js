import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <h1>NavBar</h1>
            <Link to='/'>Home</Link>
            <Link to='/TourDetails'>TourDetails</Link>

        </nav>
    )
}
export default NavBar;