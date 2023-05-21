import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toyfinity-server.vercel.app/alltoys")
    .then(res => res.json())
    .then(data => {
      setToys(data);
    })
  }, [])

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
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
                <td>{toy.name}</td>
                <td>{toy.toy}</td>
                <td>{toy.category}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/toy/${toy._id}`}>
                  <button className="btn btn-primary">View Details</button>
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
