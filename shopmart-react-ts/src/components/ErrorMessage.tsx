
const ErrorMessage: React.FC<{err: string | null}> = ({err}) => {

    
  return (
    <div className="container">
        <h1>{err}</h1>
    </div>
  )
}

export default ErrorMessage
