import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AlertContext } from '../context/NoteContext';

const Login = () => {
    const context = useContext(AlertContext);
    const { showAlert } = context;
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();

        if (json.login) {
            localStorage.setItem('token', json.token);
            navigate("/", { replace: true });
            showAlert("Signed up Successfully", "success")

        } else {
            showAlert(json.error, "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="container" >
            <h1 className="my-4" >Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" disabled={credentials.email.length < 1 || credentials.password.length < 1} >Login</button>

            </form>
        </div>
    )
}

export default Login
