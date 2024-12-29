import { NavLink } from "react-router"

const Navabar = () => {
  return (
    <header>
    <nav className="nav container">
        <h1>
            <NavLink to="/" className="nav-logo">Shopmart</NavLink>
        </h1>
        <ul className="nav-links">
            <li>
                <NavLink to="/products">Products</NavLink> 
            </li>
            <li>
                <NavLink to="/about">About</NavLink> 
            </li>
            <li>
                <NavLink to="/cart">Cart</NavLink> 
            </li>
            <li>
                <NavLink to="/orders">order history</NavLink>
            </li>
        </ul>
        <div className="nav-more">

        </div>
    </nav>
    </header>
  )
}

export default Navabar