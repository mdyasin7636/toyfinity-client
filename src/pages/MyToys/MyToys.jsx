import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


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

  const handleDelete = id => {
    const proceed = confirm('Are you sure');
    if(proceed) {
      fetch(`http://localhost:5000/myToys/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0) {
          alert('delete done');
          const remaining = toys.filter(toy => toy._id !== id);
          setToys(remaining);
        }
      })
    }
  }

  // const handleUpdate = id => {
  //   fetch(`http://localhost:5000/myToys/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     if(data.modifiedCount > 0) {

  //     }
  //   })
  // }

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
                    <div className="rounded w-20 h-20">
                      <img src={toy.picture} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{toy.category}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
              <Link to={`/updateToy/${toy._id}`}>
              <button className="btn btn-primary">Update</button>
              </Link>
              </td>
              <td>
              <button onClick={() => handleDelete(toy._id)}  className="btn btn-primary">Delete</button>
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
