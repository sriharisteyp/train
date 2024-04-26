"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from 'react';

const TrainBookingPage = () => {
    const [formData, setFormData] = useState({
        departureStation: '',
        destinationStation: '',
        date: '',
        passengers: 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <Header />
            <div className="m">
                <div className="train-booking">
                    <h1 className="title">Show Train</h1>
                    <form onSubmit={handleSubmit} className="booking-form">
                        <label className="form-label">
                            Departure Station:
                            <input
                                type="text"
                                name="departureStation"
                                value={formData.departureStation}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </label>
                        <label className="form-label">
                            Destination Station:
                            <input
                                type="text"
                                name="destinationStation"
                                value={formData.destinationStation}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </label>
                        <label className="form-label">
                            Date:
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </label>
                        <label className="form-label">
                            Passengers:
                            <input
                                type="number"
                                name="passengers"
                                value={formData.passengers}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </label>
                        <button type="submit" className="submit-button">Show Train</button>
                    </form>
            </div>

                <style jsx>{`
body{
    linear-gradient(to bottom right, #4e54c8, #8f94fb);
}
.m{
    background: linear-gradient(to right, #ff8a00, #da1b60);
  padding: 20px
}
.train-booking {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(to bottom right, #007bff, #5bc0de, #28a745);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color:white;
}

.booking-form {
  display: flex;
  flex-direction: column;
}

.form-label {
  margin-bottom: 10px;
}

.form-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: linear-gradient(to bottom right, #007bff, #5bc0de, #28a745);
  outline:none;
  border-bottom:1px solid black;
}

.submit-button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

            `}</style>
        </div>
            <Footer />
        </>
    );
};

export default TrainBookingPage;
