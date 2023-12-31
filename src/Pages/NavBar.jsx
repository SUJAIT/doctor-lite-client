import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthContext';
import logo from '../Images/logo.png';
const NavBar = () => {

  const {user,logOut} = useContext(AuthContext)
  const handlLogOut = () =>{
    logOut()
    .then(()=>{

    })
    .catch(console.error(error))
  }

    return (
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="text-xl">
      <img src={logo} alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>

      <li><Link to="appoinment">All Appoinment</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
   
   {user?.email?<Link onClick={handlLogOut} className="btn" to='signin'>Logout</Link>:
  <Link className="btn" to='signin'>Login</Link> }
  </div>
</div>
    );
};

export default NavBar;