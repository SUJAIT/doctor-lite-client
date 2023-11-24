import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthContext';

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()

const formhandler = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const user = {email,password,name}
  //firbase working start
  createUser(email,password)
  .then((userCredential)=>{
    //sign in
    const user = userCredential.user;
    console.log(user)
    form.reset()
    navigate('/')
  })
  .catch((error) =>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  })
}


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={formhandler} className="card-body">
        <h1 className='text-center text-2xl'>Signup</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">You have account?please <Link to="/signin">Login</Link></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;