import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({doctor}) => {
    const {img,name,say,category,_id} = doctor;
    return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className='text-xl'>{category}</h2>
    <h2 className="card-title font-bold">{name}</h2>
   <p className='text-4xl'></p>
    <p>{say}</p>
    <div className="card-actions">
      <Link to={`/checkout/${_id}`}>
       <button className="btn btn-primary">Appointment</button>
      </Link>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default DoctorCard;