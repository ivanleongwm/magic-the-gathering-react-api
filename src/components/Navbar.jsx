import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/card">Random</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;