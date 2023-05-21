import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {

const [toys, setToys] = useState([]);
useTitle('All Toys')

  useEffect(() => {
    fetch("https://toyfinity-server.vercel.app/alltoys")
    .then(res => res.json())
    .then(data => {
      setToys(data);
    })
  }, [])


  return (
    <div>
      <div className="overflow-x-auto px-10 py-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {/* <th></th> */}
              <th className="text-lg">Seller Name</th>
              <th className="text-lg">Toy Name</th>
              <th className="text-lg">Sub-Category</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Available Quantity</th>
              <th className="text-lg">Details</th>
            </tr>
          </thead>
          {
            toys?.map(toy => 
              
              <tbody
              key={toy._id}
              >
              {/* row */}
              <tr>
                {/* table head */}
                <td className="font-semibold">{toy.name}</td>
                <td className="font-semibold">{toy.toy}</td>
                <td className="font-semibold">{toy.category}</td>
                <td className="font-semibold">${toy.price}</td>
                <td className="font-semibold">{toy.quantity}</td>
                <td className="font-semibold">
               <Link to={`/toy/${toy._id}`}>
                  <button className="btn">View Details</button>
                  </Link>
                </td>
              </tr>
            </tbody>
              
              )
          }
        </table>
      </div>
    </div>
  );
};

export default AllToys;



