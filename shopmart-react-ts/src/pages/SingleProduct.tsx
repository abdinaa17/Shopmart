import { useEffect, useState } from "react";
import { useParams } from "react-router"
interface Product {
    id:number,
    name:string,
    description: string,
    category: string,
    price: number
}
const SingleProduct = () => {

    const [product, setProduct] = useState<Product>()

    const {id} = useParams<{id:string}>();

    

    const fetchProducts = async () => {

        const res = await fetch("http://localhost:8080/api/v1/products");

        const data: Product[] = await res.json();

        const singeleProduct = data.find((prod) => prod.id == Number(id));

        setProduct(singeleProduct);
    }

    useEffect(()=> {
        fetchProducts()
    }, [])


    console.log(id);



    
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
                <div className="my-2">
                <label htmlFor="qty">Qty</label>
                <input type="number" name="qty" id="" size={2}/>
                <button className="btn btn-primary my-2 db">Add to cart</button>
            </div>
            </div>
        </div>

    </main>

  )
}

export default SingleProduct