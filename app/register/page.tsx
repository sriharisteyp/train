// Register.js
import React from 'react';
import styles from './Register.module.css'; // Import CSS module

const Register = () => {
    return (
        <>
            <section className="darkSection">
                <section className="darkCard">
                    <h2>Register</h2>
                    <p>Welcome to use Fata Places</p>
                    <form className="darkForm">
                        <label htmlFor="username">Username :</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="darkInput"
                            placeholder="Enter Username"
                        />
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="darkInput"
                            placeholder="Enter Email"
                        />
                        <label htmlFor="phone">Phone :</label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            className="darkInput"
                            placeholder="Enter Phone"
                        />
                        <label htmlFor="password">Password :</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="darkInput"
                            placeholder="Enter Password"
                        />
                        <input type="submit" value="Submit" className="darkSubmit" />
                    </form>
                    <p>
                        Already have an account? <a href="/login" className="darkLink">Login</a>.
                    </p>
                </section>
            </section>
        </>
    );
};

export default Register;
