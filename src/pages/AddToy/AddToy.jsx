import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {

  const {user} = useContext(AuthContext)
  
    const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const toy = form.toy.value;
    const picture = form.picture.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToy = { toy, picture, name, email, price, rating, category, quantity, description};
    console.log(newToy);

    // send data to server
    fetch('http://localhost:5000/addToy', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Toy Added Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          }
    })

  };

  return (
    <div className="p-20">
      {/* <h2 className="text-5xl text-center font-extrabold mb-6">Add Toy</h2> */}
      <form onSubmit={handleAddToy}>
        {/* toy name and picture row */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="toy"
                placeholder="toy name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/4 md:ml-4">
            <label className="label">
              <span className="label-text">Toy Picture URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="picture"
                placeholder="toy picture url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* seller name and email row */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="seller name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/4 md:ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* price and rating row */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/4">
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
          <div className="form-control md:w-1/4 md:ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* sub-Category and quantity row */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text">Sub-Category</span>
            </label>
            <div className="input-group">
              <select name="category" className="select select-bordered w-full">
                <option disabled selected>
                  Select One
                </option>
                <option value="DC">DC</option>
                <option value="Marvel">Marvel</option>
                <option value="Transformers">Transformers</option>
              </select>
            </div>
          </div>
          <div className="form-control md:w-1/4 md:ml-4">
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
          <input type="submit" value="Add Toy" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
