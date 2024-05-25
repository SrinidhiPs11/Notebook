import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AlertContext } from '../context/CreateContext';
const Signup = () => {
  
  const context = useContext(AlertContext);
  const { showAlert } = context;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password === credentials.cpassword) { 
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
      });
      const json = await response.json();

      if (json.signedup) {
        localStorage.setItem('token',json.token);
        navigate("/", { replace: true });
        showAlert("Signed up Successfully", "success")

      } else {
        showAlert(json.error[0].msg, "danger")
      }

    } else {
        showAlert("Passwords don't match.", "danger")
      
    }
  }
  const onClickLogin = () => {
    navigate("/login", { replace: true });

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'>
      <h1 className="my-4" >Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" onChange={onChange} name="name" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={onChange} name="email" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={onChange} name="password" id="password" minLength={5} required />
          <label htmlFor="password" className="form-label fw-light fs-6">Must be atleast 5 characters long</label>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" onChange={onChange} name="cpassword" id="cpassword" />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <p className="my-3">Already have an account?<button type='button' className="btn btn-outline-primary mx-1" onClick={onClickLogin}>Login</button></p>
    </div>
  )
}

export default Signup
