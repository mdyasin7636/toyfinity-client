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
            className="h-96 rounded-lg shadow-2xl"
          />
          <div className="ml-10">
            <h1 className="text-2xl font-bold">Toy Name: <span className="font-semibold text-xl">{toy}</span></h1>
            <p className="text-2xl font-bold mt-2">Seller Name:  <span className="font-semibold text-xl">{name}</span></p>
            <p className="text-2xl font-bold mt-2">Seller Email:  <span className="font-semibold text-xl">{email} </span></p>
            <p className="text-2xl font-bold mt-2">Price: <span className="font-semibold text-xl">${price}</span> </p>
            <p className="text-2xl font-bold mt-2">Rating: <span className="font-semibold text-xl">{rating} </span> </p>
            <p className="text-2xl font-bold mt-2">Available Quantity: <span className="font-semibold text-xl">{quantity}</span></p>
            <p className="text-2xl font-bold mt-2">Description: <span className="font-semibold text-xl">{description}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
