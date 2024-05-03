import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignUpValidation";
import axios from 'axios';

const SignUp = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:5000/signup', values)
            .then(res => {
              navigate('/');
          })
          .catch(err => console.log(err));
        }
    }

    return (
        <div className="d-flex justify-content-center aligh-items-center bg-primary vh-100">
            <div className="bg-white p-5 mb-5 mt-5 rounded w-25">
                <h2>SignUp</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>{" "}
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name" name="name"
                            onChange={handleInput} className="form-control rounded-0"
                        />
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>{" "}
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email" name="email"
                            onChange={handleInput} className="form-control rounded-0"
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password" name="password"
                            onChange={handleInput} className="form-control rounded-0"
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-success w-100 rounded-0">
                        <strong>Sign Up</strong>{" "}
                    </button>
                    <p>You are agree to our terms and policies</p>
                    <Link
                        to="/"
                        className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >
                        Login{" "}
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
