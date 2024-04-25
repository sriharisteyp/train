"use client";

import { useEffect, useState } from 'react';

const MovieBooking = () => {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const seats = document.querySelectorAll('.all-seats input');

        const handleChange = (event) => {
            let newAmount = amount;
            let newCount = Number(document.querySelector('.count').innerHTML);

            if (event.target.checked) {
                newCount += 1;
                newAmount += 200;
            } else {
                newCount -= 1;
                newAmount -= 200;
            }

            setAmount(newAmount);
            document.querySelector('.count').innerHTML = newCount;
            document.querySelector('.amount').innerHTML = newAmount;
        };

        seats.forEach((seat) => {
            seat.addEventListener('change', handleChange);
        });

        // Cleanup function to remove event listeners
        return () => {
            seats.forEach((seat) => {
                seat.removeEventListener('change', handleChange);
            });
        };
    }, [amount]); // Include 'amount' as a dependency to ensure the effect runs when 'amount' changes

    return (
        <div class="center">
            <div class="tickets">
                <div class="ticket-selector">
                    <div class="head">
                        <div class="title">Movie Name</div>
                    </div>
                    <div class="seats">
                        <div class="status">
                            <div class="item">Available</div>
                            <div class="item">Booked</div>
                            <div class="item">Selected</div>
                        </div>
                        <div class="all-seats">
                            <input type="checkbox" name="tickets" id="s1" />
                            <label for="s1" class="seat booked"></label>
                        </div>
                    </div>
                    <div class="timings">
                        <div class="dates">
                            <input type="radio" name="date" id="d1" checked />
                            <label for="d1" class="dates-item">
                                <div class="day">Sun</div>
                                <div class="date">11</div>
                            </label>
                            <input type="radio" id="d2" name="date" />
                            <label class="dates-item" for="d2">
                                <div class="day">Mon</div>
                                <div class="date">12</div>
                            </label>
                            <input type="radio" id="d3" name="date" />
                            <label class="dates-item" for="d3">
                                <div class="day">Tue</div>
                                <div class="date">13</div>
                            </label>
                            <input type="radio" id="d4" name="date" />
                            <label class="dates-item" for="d4">
                                <div class="day">Wed</div>
                                <div class="date">14</div>
                            </label>
                            <input type="radio" id="d5" name="date" />
                            <label class="dates-item" for="d5">
                                <div class="day">Thu</div>
                                <div class="date">15</div>
                            </label>
                            <input type="radio" id="d6" name="date" />
                            <label class="dates-item" for="d6">
                                <div class="day">Fri</div>
                                <div class="date">16</div>
                            </label>
                            <input type="radio" id="d7" name="date" />
                            <label class="dates-item" for="d7">
                                <div class="day">Sat</div>
                                <div class="date">17</div>
                            </label>
                        </div>
                        <div class="times">
                            <input type="radio" name="time" id="t1" checked />
                            <label for="t1" class="time">11:00</label>
                            <input type="radio" id="t2" name="time" />
                            <label for="t2" class="time"> 14:30 </label>
                            <input type="radio" id="t3" name="time" />
                            <label for="t3" class="time"> 18:00 </label>
                            <input type="radio" id="t4" name="time" />
                            <label for="t4" class="time"> 21:30 </label>
                        </div>
                    </div>
                </div>
                <div class="price">
                    <div class="total">
                        <span> <span class="count">0</span> Tickets </span>
                        <div class="amount">0</div>
                    </div>
                    <button type="button">Book</button>
                </div>
            </div>
        </div>
    );
};

export default MovieBooking;
