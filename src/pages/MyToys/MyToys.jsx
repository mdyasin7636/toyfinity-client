import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToys = () => {

  const {user} = useContext(AuthContext);
  const [toys, setToys] = useState([])


  useEffect( () => {
    fetch(`https://toyfinity-server.vercel.app/mytoys/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setToys(data);
    })
  }, [user])

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toyfinity-server.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = toys.filter(toy => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };



  return (
    <div>
      <div className="overflow-x-auto w-full px-2 py-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">Toy Name</th>
              <th className="text-lg">Picture</th>
              <th className="text-lg">Sub-Category</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Available Quantity</th>
              <th className="text-lg">Rating</th>
              <th className="text-center text-lg">Description</th>
              <th className="text-center text-lg">Update</th>
              <th className="text-center text-lg">Delete</th>
            </tr>
          </thead>
          <tbody>
          
           {
            toys.map(toy =>  <tr
            key={toy._id}
            >

              <td className="font-semibold">{toy.toy}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="rounded w-20 h-20">
                      <img src={toy.picture} />
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">{toy.category}</td>
              <td className="font-semibold">${toy.price}</td>
              <td className="font-semibold">{toy.quantity}</td>
              <td className="font-semibold">{toy.rating}</td>
              <td className="font-semibold">{toy.description.slice(0, 30)}...</td>
              <td>
              <Link to={`/updateToy/${toy._id}`}>
              <button className="btn">Update</button>
              </Link>
              </td>
              <td>
              <button onClick={() => handleDelete(toy._id)}  className="btn">Delete</button>
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
