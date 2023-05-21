/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

  const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/'
    console.log(from);



  const handleLogin = (event) => {
    event.preventDefault();
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            form.reset();
            console.log(loggedUser);
            navigate(from);
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from);
    })
    .catch(error => {
        console.log(error)
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
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label font-semibold">
                  Don't have an account?{" "}
                  <Link className="link" to="/register">
                    Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn">Login</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn text-center">
              Login With Google
            </button>
          </div>
          <p className='text-center font-semibold mb-5'>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
