import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

const Doctors = () => {

const [doc,setDoc] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res =>res.json())
        .then(data => setDoc(data))
    },[])

    return (
        <div>
             <div>
    <h1 className='text-5xl font-bold mt-10'>Our Doctors</h1>
    <p className='text-xl'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.</p>
 <div className='grid grid-cols-3 gap-4'>
{
  doc.map(doctor=><DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
}

 </div>
  </div>
        </div>
    );
};

export default Doctors;