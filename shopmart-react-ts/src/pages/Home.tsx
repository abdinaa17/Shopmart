import { useEffect, useState } from "react"

import HeroBg from "../assets/shopmart-hero.svg"
import ProductCard from "../components/ProductCard";
import { Link } from "react-router";

interface Product {
    id:number,
    name:string,
    description: string,
    category: string,
    price: number
}

const Home = () => {


    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {

        const res = await fetch("http://localhost:8080/api/v1/products");

        const data: Product[] = await res.json();

        setProducts(data.slice(0, 3));
    }

    useEffect(()=> {
        fetchProducts()
    }, [])
  return (
    <main className="container">
        <section className="hero-content flex flex-center align-center">
            <div className="">
            <h1 className="hero-heading">
                Shop Online
            </h1>
            <p className="hero-description my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic rem placeat tenetur excepturi asperiores!</p>
            <button className="btn btn-primary my-1">
                <Link to={"/products"}>Shop now</Link>
            </button>
            </div>
            <div>
                <img src={HeroBg} alt="" className="hero-img"/>
            </div>
        </section>
        <h2 className="my-2 ">Latest Products</h2>
        <section className="grid featured-content my-3">
            {products?.map((product) => {
                return (
                    <div key={product.id}>
                        <ProductCard prodId={product.id} prodName={product.name} prodDescription={product.description} prodPrice={product.price} />
                    </div>
                )

            })}
        </section>
    </main>
  )
}

export default Home