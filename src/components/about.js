import React from 'react'
import "../about.css"
import { Link } from 'react-router-dom'
const About = () => {

    return (
        <>
            <section id="hero" className="hero-section">
                <div className="container text-center">
                    <div className='heading'>
                    <h1 className="display-4">Welcome to iNotebook</h1>
                    <p className="lead">Organize your notes, anytime, anywhere.</p>
                    <Link to="/" className="btn btn-primary btn-lg">Get Started</Link>
                    </div>
                </div>
            </section>
            <section id="features" className="features-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="feature">
                                <h3>Login</h3>
                                <p>Securely login to your account to access your notes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature">
                                <h3>Create Notes</h3>
                                <p>Create new notes with titles, content, and tags to categorize them.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature">
                                <h3>Edit & Delete</h3>
                                <p>Easily edit or delete your existing notes as needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section bg-dark text-white">
                <div className="container text-center">
                    <p>&copy; 2024 iNotebook. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default About