/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {

  const {createUser, updateUserProfile} = useContext(AuthContext);
  const [error, setError] = useState('');
  useTitle('Register')

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
        <div className="text-center lg:text-left w-1/2 mr-20">
        <img src="https://i.ibb.co/vdMtLMR/sign.jpg" className='rounded-lg'/>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
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
                <span className="label-text font-semibold">Email</span>
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
                <span className="label-text font-semibold">Password</span>
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
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
               <label className="label font-semibold">
              Already Have an Account? <Link className='link' to="/login">Login</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn">Register</button>
            </div>
          </form>
          <p className='text-center font-semibold mb-5'>{error}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;