import { BrowserRouter as Router, Routes, Route } from "react-router"
import { About, Cart, Home, OrderHistory, Products } from "./pages"
import Navabar from "./components/Navabar"

const App = () => {
  return (
    <Router>
        <Navabar />
        <Routes>

            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/products" element={<Products />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/cart" element={<Cart />}>
            </Route>
            <Route path="/orders" element={<OrderHistory />}>
            </Route>

        </Routes>
    </Router>
  )
}

export default App