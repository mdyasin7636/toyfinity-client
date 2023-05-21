import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {

  const toy = useLoaderData()

  const {_id} = toy;


  const updateToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateToy = {price, quantity, description};
    console.log(updateToy);

    // send data to server
    fetch(`https://toyfinity-server.vercel.app/myToys/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateToy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success!',
              text: 'Toy Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          }
    })

  };

    return (
        <div className="p-20">
        {/* <h2 className="text-5xl text-center font-extrabold mb-6">Add Toy</h2> */}
        <form onSubmit={updateToy}>
          {/* price and rating row */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-2/4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* sub-Category and quantity row */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-2/4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="available quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* detail description */}
          <div className="md:w-2/4">
          <label className="label">
                <span className="label-text">Description</span>
              </label>
          <textarea name="description" placeholder="description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
          </div>
          <div>
            <input type="submit" value="Update Toy" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
};

export default UpdateToy;