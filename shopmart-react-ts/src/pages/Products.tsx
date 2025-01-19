import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";



interface Product {
    id:number,
    name:string,
    description: string,
    category: string,
    price: number
}
const Products = () => {

    const [products, setProducts] = useState<Product[]> ([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)

    const fetchProducts = async () => {
        setIsLoading(true)
        setError(null);
        try {

            const res = await fetch("http://localhost:8080/api/v1/products");

            const data: Product[] = await res.json();

            if(!res.ok) {                
                throw new Error("Failed to fetch products")  
            }
            setProducts(data);

            console.log(products);
            

        } catch (error: any) {

            setError(error.message || "Someting went wrong");
            
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        fetchProducts();
    }, [])

    if(isLoading) {
        return <Loading />
    }
    if(error) {
        return <p>{error}</p>
    }
  return (
    <main className="container">
        <section className="my-3">

        <h1 className="my-2">Our products</h1>
        <div className="grid featured-content my-3">
            {products?.map((product) => {
                return (
                    <div key={product.id}>
                        <ProductCard prodId={product.id} prodName={product.name} prodDescription={product.description} prodPrice={product.price} />
                    </div>
                )

            })}
        </div>
        </section>
    </main>

  )
}

export default Products