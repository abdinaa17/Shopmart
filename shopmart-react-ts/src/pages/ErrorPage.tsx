import { Link } from "react-router"

const ErrorPage = () => {
  return (
    <div className="errorpage container text-center">
        <h1 className="my-3 ">404 page not found</h1>
        <button className="btn btn-secondary">
            <Link to="/">go home</Link>
        </button>
    </div>
  )
}

export default ErrorPage