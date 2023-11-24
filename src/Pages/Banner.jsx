import React from 'react';
import banner from '../Images/banner.png';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mt-6">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner} className="w-full" />
  </div> 
</div>
        </div>
    );
};

export default Banner;