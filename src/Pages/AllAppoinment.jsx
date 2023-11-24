import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import NavBar from './NavBar';

const AllAppoinment = () => {

    const {user} = useContext(AuthContext);
    const [appoinment,setAppoinment] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/appointment?email=${user?.email}`)
        .then(res =>res.json())
        .then(data =>setAppoinment(data))
    },[])

    //delete

    const handleDelete = data =>{
      fetch(`http://localhost:5000/appointment/${data._id}`,{
        method:'DELETE'
      })
      .then(res =>res.json())
      .then(data =>{
        console.log(data)
           if(data.deletedCount>0){
            alert('deleted Successful');
            //Data Delete Hola sata Sata Data remove Hoba Ai function tr working ar jonno
            // function ta ja kora hoisa : fist Booking ar bitor ar sokol data filter kora nia sai sob ar _id !== id ar soman na tarpor data ta ka pass kora diba..
            const remaining = appoinment.filter(appoin => appoin.id !== data._id);
            setAppoinment(remaining);
        }
    
      })
    }


    return (
        <div>
            <NavBar></NavBar>
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Dr.Name</th>
        <th>Appoinment date</th>
      </tr>
    </thead>
       {
               appoinment.map(data=>  <tbody key={data._id} data={data}>
      <tr>
    
        <td>{data.name}</td>
        <td>{data.date}</td>
           <th>
          <label>
            <button onClick={() => handleDelete(data)} className="btn btn-sm btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
      </tr>
    </tbody>) 
            }
  </table>
</div>
           
        </div>
    );
};

export default AllAppoinment;