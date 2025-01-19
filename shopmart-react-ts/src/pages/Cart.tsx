import { useEffect, useState } from "react"
import { MdAdd } from "react-icons/md";
import ErrorMessage from "../components/ErrorMessage";
import { LuMinus } from "react-icons/lu";
import { Link } from "react-router";

import emptyCartSvg from "../assets/empty-cart.svg"
import Loading from "../components/Loading";

interface Product {
    id: number,
    name: string,
    description: string,
    category: string,
    price: number
}

interface Cart {
    product: Product,
    qty: number
}

const Cart = () => {

    const [cart, setCart] = useState<Cart[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);



    const fetchCart = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch("http://localhost:8080/api/v1/cart");

            if (!res.ok) {
                throw new Error("Someting went wrong");
            }

            const data: Cart[] = await res.json();

            setCart(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCart()
    }, [])


    // updte cart
    const handleUpdateCart = (productId: number, newQty: number) => {
        if(newQty <= 0) {
            setCart((prev) => {
                return prev.filter((item) => item.product.id !== productId);
            })
        }else {
            setCart((prev) => {
            return prev.map((item) => item.product.id === productId ? {...item, qty:newQty} : item)})
        }
    }

    // clear cart
    const handleClearCart = async () => {
        setCart([])
    }

    // Subtotal
    const subtotal = cart
        .map((cartItem) => cartItem.product.price * cartItem.qty)
        .reduce((prod, acc) => acc + prod, 0);

   
    // Loading state
    if (isLoading) {
        return <Loading />
    }
    // Error 
    if (error) {
        return <ErrorMessage err={error} />
    }

    return (
        <main className="container min-vh-75 py-3">
            {
                cart && cart.length > 0 ?
                    <div className="flex">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Qty</th>
                                    <th></th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((cartItem) => {

                                    const {product, qty} = cartItem;
                                    

                                    return (

                                        
                                        <tr key={cartItem.product.id}>
                                            <td><Link to={`/products/${cartItem.product.id}`}>{product.name}</Link></td>
                                            <td colSpan={2}>
                                                <button className="cart-btn" onClick={() => handleUpdateCart(product.id, qty -1)}>
                                                    <LuMinus />
                                                </button>
                                                <span className="px-1">
                                                    {qty}
                                                </span>
                                                <button className="cart-btn" onClick={() => handleUpdateCart(product.id, qty + 1)}>
                                                    <MdAdd />
                                                </button>
                                            </td>
                                            <td>{product.price}</td>
                                            <td> {(qty * product.price).toFixed(2)}</td>
                                        </tr>
                                    )
                                })
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="cart-clear"><button className="btn btn-danger" onClick={handleClearCart}>Clear cart</button></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="cart-subtotal">
                            <h2 className="mt-3">Subtotal: {subtotal.toFixed(2)}
                            </h2>
                            <button className="btn btn-secondary my-2 ">
                                <Link to="/checkout">Proceed to checkout </Link>
                            </button>
                        </div>
                    </div>

                    :
                    <div className="text-center">
                        <h1>Your cart is empty</h1>
                        <img src={emptyCartSvg} alt="Empty cart" className="cart-img"/>
                        <button className="btn btn-secondary">
                            <Link className="my-3" to="/products">Go shopping</Link>
                        </button>
                     </div>
            }

        </main>
    )
}

export default Cart