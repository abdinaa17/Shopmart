import { BrowserRouter as Router, Routes, Route } from "react-router"
import { About, Cart, ErrorPage, Home, OrderHistory, Products, SingleProduct } from "./pages"
import Navabar from "./components/Navabar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
        <Navabar />
        <Routes>

            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/products" element={<Products />}>
            </Route>
            <Route path="/products/:id" element={<SingleProduct />} ></Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/cart" element={<Cart />}>
            </Route>
            <Route path="/orders" element={<OrderHistory />}>
            </Route>
            <Route path="*" element={<ErrorPage />}>

            </Route>

        </Routes>
        <Footer />
    </Router>
  )
}

export default App