import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import ErrorMessage from "../components/ErrorMessage";
interface Product {
    id:number,
    name:string,
    description: string,
    category: string,
    price: number
}

interface Cart {
    product: Product,
    qty : number
}
const SingleProduct = () => {

    const [product, setProduct] = useState<Product>()
    const [cart, setCart] = useState<Cart[]>([]);
    const [isLoding, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null | any> (null);

    const {id} = useParams<{id:string}>();
    const prodIdNum:number = Number(id);

    const navigate = useNavigate();
     
    const fetchProducts = async () => {

        setIsLoading(true);
        setError(null);


        try {

            const res = await fetch(`http://localhost:8080/api/v1/products/${prodIdNum}`);



            if(!res.ok) {
                throw new Error("No product with id " + prodIdNum + " exists");
                
            }

            const data:Product = await res.json();

            setProduct(data);        
            
        } catch (error: any) {
            setError(error.message || "Someting went wrong");
            console.log(error.message);
            
        }finally {
            setIsLoading(false);
        }

    }

    useEffect(()=> {
        fetchProducts()
    }, [])

    // Add to cart
    const handleAddToCart = (product: Product | void) => {

        if(!product) {
            return;
        }
        const cartItem: Cart = {product: product, qty: 1};
        const tempCart: Cart[] = [cartItem];
        // console.log(tempCart);
        
        // setCart((prev) => ({
        //     ...prev,
        //     tempCart
        //   }));
        // console.log(cart);

        // setCart((prev) => ({
        //     ...prev,
        //     cartItem
        // }))

        // console.log(cart);
        console.log(tempCart);
        
        
        localStorage.setItem("cart", JSON.stringify(tempCart));
        navigate("/cart");

    }

    if(isLoding) {
        return <p>Loading...</p>
    }

    if(error) {
        return (
            <ErrorMessage err={error}/>
        )
    }
 
  return (
    <main className="container">
        <div className="flex my-3">
            <div>
                <img src="https://images.pexels.com/photos/4465147/pexels-photo-4465147.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="product-img"/>
            </div>
            <div className="px-3">
                <h3 className="my-2">{product?.name}</h3>
                <h5 className="my-2">Price: ${product?.price}</h5>
                <p className="my-2">{product?.description}</p>
                <span>Category: <small className="tag">{product?.category}</small></span>
                <button
                    className="btn btn-secondary my-2 db"
                    onClick={() => handleAddToCart(product)}
                    >
                    Add to cart
                </button>
            </div>
        </div>

    </main>

  )
}

export default SingleProduct