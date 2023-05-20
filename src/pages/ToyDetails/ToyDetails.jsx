import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const toyDetail = useLoaderData();
    const {picture, toy, name, email, price, rating, quantity, description} = toyDetail;

    return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={picture}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">Toy Name: {toy}</h1>
            <p className="">Seller Name: {name}</p>
            <p className="">Seller Email: {email} </p>
            <p className="">Price: {price} </p>
            <p className="">Rating: {rating} </p>
            <p className="">Quantity: {quantity}</p>
            <p className="">Description: {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
