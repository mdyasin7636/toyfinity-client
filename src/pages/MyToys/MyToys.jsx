import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyToys = () => {

  const {user} = useContext(AuthContext);
  const [toys, setToys] = useState([])


  useEffect( () => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setToys(data);
    })
  }, [user])

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Picture</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            toys.map(toy =>  <tr
            key={toy._id}
            >
              <th>{toy.toy}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={toy.picture} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{toy.category}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
              <button className="btn btn-primary">Update</button>
              </td>
              <td>
              <button className="btn btn-primary">Delete</button>
              </td>
            </tr>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
