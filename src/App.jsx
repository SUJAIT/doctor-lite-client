// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner from '../src/Images/banner.png';
function App() {


  return (
  <div>
    {/* Navbar start */}
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
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>

      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
{/* navar End */}
{/* banner start */}
<div className="carousel w-full mt-6">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner} className="w-full" />
  </div> 
</div>
{/* banner end */}
{/* Doctor identity start */}
<div>
  <div>
    <h1 className='text-5xl font-bold mt-10'>Our Doctors</h1>
    <p className='text-xl'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.</p>
  </div>
  {/* doctor card */}
  <div>
    {
      
    }
  </div>
</div>
{/* Doctor identity End */}
  </div>
  )
}

export default App
