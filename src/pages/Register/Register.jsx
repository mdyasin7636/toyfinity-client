/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

  const {createUser, updateUserProfile} = useContext(AuthContext);
  const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      updateUserProfile(name, photo)
        .then(() => {
          console.log('User profile updated successfully');
          form.reset();
        })
        .catch(error => {
          console.log('Error updating user profile:', error);
        });
      form.reset();
      console.log(createdUser);
    })
    .catch(error => {
      console.log(error);
      setError(error.message)
    })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
               <label className="label">
              Already Have an Account? <Link className='link' to="/login">Login</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">Register</button>
            </div>
          </form>
          <p>{error}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;