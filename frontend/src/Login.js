import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import validation from './LoginValidation';

const Login = () => {
    const [values,setValues] =useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const [errors,setErrors] = useState({});

    const handleInput = (e) =>{
        setValues(prev => ({...prev,[e.target.name]:[e.target.value]}))
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(validation(values));
        if (errors.email === "" && errors.password === "") {
          axios.post('http://localhost:5000/login', values)
          .then(res => {
            if(res.data === "Success"){
              navigate('/home');
            }
            else{
              alert("NO record existed");
            }
        })
        .catch(err => console.log(err));
      }
    }

  return (
    <div className="d-flex justify-content-center aligh-items-center bg-primary vh-100">
      <div className="bg-white p-5 mb-5 mt-5 rounded w-25">
        <h2>SignIn</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong> </label>
            <input type="email" placeholder="Enter email" name= "email"
            onChange={handleInput} className='form-control rounded-0'/>
            {errors.email && <span className="text-danger">{errors.email}</span>} 
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name= "password"
            onChange={handleInput} className='form-control rounded-0' />
            {errors.password && <span className="text-danger">{errors.password}</span>} 
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Log in</strong> </button>
          <p>You are agree to our terms and policies</p>
          <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account </Link>
        </form>
      </div>
    </div>
  );
};


export default Login;
