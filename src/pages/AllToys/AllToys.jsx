import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {

const [toys, setToys] = useState([]);
useTitle('All Toys')
// const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://toyfinity-server.vercel.app/alltoys")
    .then(res => res.json())
    .then(data => {
      setToys(data);
    })
  }, [])


  // useEffect(() => {
  //   const fetchToys = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://toyfinity-server.vercel.app/allToys${searchQuery ? `?search=${searchQuery}` : ""}`
  //       );
  //       const data = await response.json();
  //       setToys(data);
  //     } catch (error) {
  //       console.log("Error fetching toys:", error);
  //     }
  //   };

  //   fetchToys();
  // }, [searchQuery]);

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  return (
    <div>
      <div className="flex justify-center mt-5">
        <input
          type="text"
          placeholder="Search By Toy Name"
          className="input input-bordered w-full max-w-xs"
          // value={searchQuery}
          // onChange={handleSearchChange}
        />
      </div>
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



