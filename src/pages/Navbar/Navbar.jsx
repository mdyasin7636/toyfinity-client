import { Link } from 'react-router-dom';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
  }

    return (
        <div>
           <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className='ml-4'>
      <Link>
      <img src="https://i.ibb.co/7j4RsKk/infinity-symbol.png" className='w-24' />
      <p className='font-bold text-2xl'>Toyfinity</p>
      </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className="menu menu-horizontal px-1">
      {/* <div>
        <button className='btn btn-primary'>Home</button>
      </div>
      <div>
        <button className='btn btn-primary'>All Toys</button>
      </div>
      <div>
        <button className='btn btn-primary'>My Toys</button>
      </div>
      <div>
        <button className='btn btn-primary'>Add A Toy</button>
      </div>
      <div>
        <button className='btn btn-primary'>Blogs</button>
      </div> */}
      <Link to="/">
      <li><p className='font-semibold'>Home</p></li>
      </Link>
      <Link to="/allToys">
      <li><p className='font-semibold'>All Toys</p></li>
      </Link>
      {
        user ? <Link to="/myToys">
        <li><p className='font-semibold'>My Toys</p></li>
        </Link> : ''
      }
      {
        user ? <Link to="/addToy">
        <li><p className='font-semibold'>Add A Toy</p></li>
        </Link> : ''
      }
      <Link to="/blog">
      <li><p className='font-semibold'>Blogs</p></li>
      </Link>
    </div>
  </div>
  <div className="navbar-end">
    {
      user ? 
            <div>
                <img className="w-12 rounded-full" src={user?.photoURL} title={user?.displayName} />
                    <Tooltip/>
              </div> 
              :
              <Link to="/login">
              <button className='btn'>Login</button>
              </Link>
    }
  </div>
  <div>
    <button onClick={handleLogOut} className='btn btn-info'>Logout</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;