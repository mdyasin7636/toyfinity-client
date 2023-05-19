import { Link } from 'react-router-dom';
// import logo1 from '../../assets/logo-1.svg'
import logo2 from '../../assets/logo-2.svg'
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
    <div>
      <Link>
      <img src={logo2}/>
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
      <li><a>Home</a></li>
      </Link>
      <Link to="/allToys">
      <li><a>All Toys</a></li>
      </Link>
      <Link to="/myToys">
      <li><a>My Toys</a></li>
      </Link>
      <Link to="/addToy">
      <li><a>Add A Toy</a></li>
      </Link>
      <Link to="/blog">
      <li><a>Blogs</a></li>
      </Link>
    </div>
  </div>
  <div className="navbar-end">
    {
      user ? 
            <div>
                <img className="h-10 rounded-full" src={user?.photoURL} title={user?.displayName} />
                    <Tooltip/>
              </div> 
              :
              <Link to="/login">
              <button className='btn btn-primary'>Login</button>
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