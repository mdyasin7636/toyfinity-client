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
        <div className="text-center lg:text-left w-1/2">
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  Don't have an account?{" "}
                  <Link className="link" to="/register">
                    Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline text-center">
              Login With Google
            </button>
          </div>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
