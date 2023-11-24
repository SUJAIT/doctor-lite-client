import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthContext';
import NavBar from './NavBar';

const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    const doctors = useLoaderData();
    const {_id,category,name,price} = doctors;

    const formHandler = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
       
        const appointment = {
appoinment_id:_id,category,name,price,date,email
    }
//
//DB Data Insert (Booking)
fetch('http://localhost:5000/appoinment',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(appointment)
})
.then(res => res.json())
.then(data=>{
    console.log(data)
  if(data){
navigate('/')
}
})
}


    return (
        <div>
          <NavBar></NavBar>
               <form onSubmit={formHandler}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className="form-control">
          <label className="label">
            <span className="label-text">Dr.Name</span>
          </label>
          <input type="text" name='name'placeholder='Type your Name' defaultValue={name} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Appoinment Price</span>
          </label>
          <input type="text" defaultValue={price} readOnly className="input input-bordered" />
      
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" defaultValue={user?.email}  placeholder='Email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Date</span>
          </label>
          <input type="date" name='date' placeholder="Service Type" className="input input-bordered" />
      
        </div>
     
        </div>
        {/* <div className='my-5'>
            <textarea placeholder="Product Description" className="textarea textarea-bordered textarea-lg w-full max-w-x" ></textarea>
        </div> */}
        <div>
               <div className="form-control mt-6">
         
          <input className="btn btn-error btn-block my-5" type='submit' value="Appoinment Confirm"></input>
        </div> 
        </div>
      
       </form>
        </div>
    );
};

export default CheckOut;