import { Link } from "react-router"

const ProductCard : React.FC<{
    prodId: number, prodName: string, prodDescription: string, prodPrice: number 
}> = ({prodId, prodName, prodDescription, prodPrice }) => {
  return (
    <Link to={`/products/${prodId}`}>
        <article className="card flex flex-column">
            <img className="card-img" src="https://images.pexels.com/photos/4465147/pexels-photo-4465147.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h2>{prodName}</h2>
            <p>{prodDescription}</p>
            <h5>{prodPrice}</h5>
    </article>      
    </Link>
  )
}

export default ProductCard