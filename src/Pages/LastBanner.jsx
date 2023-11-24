import React from 'react';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
const LastBanner = () => {
    return (
        <div className='mt-20 bg-teal-500 text-white'>
            <div>
                <div className='mt-8'> <h1 className='text-2xl font-bold'>Working Process</h1></div>
               
                <h1 className='text-5xl font-bold'>How We Work?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            </div>
<div className='grid grid-cols-4 gap-4 mt-11'>
   

   <div className="w-50 ">
<div className="avatar">
  <div className="w-38 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 ">
    <img src={img1} />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Appointment</h2>
    <p>Sample text. Click to select the Text Element.</p>
  </div>
</div>

   <div className="w-50">
<div className="avatar">
  <div className="w-38 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
    <img src={img2} />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Expert Doctor</h2>
    <p>Sample text. Click to select the Text Element.</p>
  </div>
</div>

   <div className="w-50">
<div className="avatar">
  <div className="w-38 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
    <img src={img3} />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Consultation</h2>
    <p>Sample text. Click to select the Text Element.</p>
  </div>
</div>

   <div className="w-50">
<div className="avatar">
  <div className="w-38 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
    <img src={img4} />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Enjoy Life</h2>
    <p>Sample text. Click to select the Text Element.</p>
  </div>
</div>
   
   
  
</div>

        </div>
    );
};

export default LastBanner;