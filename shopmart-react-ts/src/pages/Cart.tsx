import { useEffect, useState } from "react"
import ErrorMessage from "../components/ErrorMessage";

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

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <ErrorMessage err={error} />
    }

    return (
        <main className="container">
            {
                cart && cart.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((cartItem) => {

                                return (

                                    <tr key={cartItem.product.id}>
                                        <td className="px-2 py-2">{cartItem.product.name}</td>
                                        <td className="px-2 py-2">{cartItem.qty}</td>
                                        <td className="px-2 py-2">{cartItem.product.price}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                    :
                    <h1>Your cart is empty</h1>
            }

        </main>
    )
}

export default Cart