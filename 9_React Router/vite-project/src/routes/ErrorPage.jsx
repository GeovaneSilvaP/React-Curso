import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    console.log(error);
    
  return (
    <div>
        <h1>Opps!</h1>
        <p>Temos um poblema...</p>
        <p>{error.status}</p>
        <p>{error.statusText}</p>
    </div>
  )
}

export default ErrorPage