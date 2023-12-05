import './Booking.css';
import Navbar from "./../../components/Navbar/Navbar";
import { useState } from 'react';
import axios from 'axios';
//user, movie,ticketno,type,theatrename,seatno,date,time
function Booking() {
    const [user, setUser] = useState('');
    const [movie, setMovie] = useState('');
    const [ticketno, setTicketno] = useState('');
    const [type, setType] = useState('');
    const [theatrename, setTheatrename] = useState('');
    const [seatno, setSeatno] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const loadMovie = async ()=>{
        const response = await axios.get(``)
    }
   
    return (
        <>
            <Navbar />
            <div className='booking-container'>
                <h3 className='text-center pt-3'>Easy Booking</h3>
                <div className='main-booking-container'>

                    <div className='left-hand-container'>

                        <div>
                            <input
                                type='text'
                                className='form-handle'
                                placeholder='enter your Name'
                                value={user}
                                onChange={(e) => {
                                    setUser(e.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <input
                                type='text'
                                placeholder='enter Movie Name'
                                className='form-handle'
                                value={movie}
                                onChange={(e) => {
                                    setMovie(e.target.value)
                                }}
                            />
                        </div>

                        <div>
                            <input
                                type='Number'
                                placeholder='enter Ticket No'
                                className='form-handle'
                                value={ticketno}
                                onChange={(e) => {
                                    setTicketno(e.target.value)
                                }}
                            />
                        </div>

                <div className='d-flex'>
                   <div className=''>
                   <label className='d-flex fs-5 ms-2'>
                            Type: </label>
                   </div>
                        <div className='ms-5 mt-1'>
                            <input
                                type='radio'
                                name='gender'
                                value={type}
                                onClick={(e) => {
                                    setType(e.target.value)
                                }}
                            /> <span className='type-text'>VIP : 500 Rs</span>

                        </div>
                        </div>       
                        <div className='d-flex mt-4'>
                            <input
                                type='radio'
                                name='gender'
                                value={type}
                                onClick={(e) => {
                                    setType(e.target.value)
                                }}
                            /> &nbsp; <span className='type-text'>Golden: 300 Rs</span> 
                            <input
                                className='ms-4'
                                type='radio'
                                name='gender'
                                value={type}
                                onClick={(e) => {
                                    setType(e.target.value)
                                }}
                            /> &nbsp; <span className='type-text'>Silver: 200 Rs</span> 
                        </div>
                    </div>

                    <div className='right-hand-container'>

                        <div>
                            <select
                                value={theatrename}
                                onChange={(e) => {
                                    setTheatrename(e.target.value);
                                }}
                                className='form-handle'>
                                <option>Select here to Theater Name</option>
                                <option value="Cinepolis Cinemas (Seasons Mall)">Cinepolis Cinemas (Seasons Mall)</option>
                                <option value="City Pride Cinemas (Abhircuhi Mall)">City Pride Cinemas (Abhircuhi Mall)</option>
                                <option value="City Pride Multiplex.">City Pride Multiplex.</option>
                                <option value="E Square Multiplex">E Square Multiplex</option>
                                <option value="Victory Theatre.">Victory Theatre.</option>
                                <option value="Carnival Cinemas">Carnival Cinemas</option>

                            </select>
                        </div>

                        <div>
                            <input
                                type='Number'
                                placeholder='enter seat No'
                                className='form-handle'
                                value={seatno}
                                onChange={(e) => {
                                    setSeatno(e.target.value)
                                }}
                            />
                        </div>


                        <div>
                            <input
                                type='date'
                                className='form-handle'

                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                            />

                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Time'
                                className='form-handle'
                                value={time}
                                onChange={(e) => {
                                    setTime(e.target.value)
                                }}
                            />

                        </div>


                    </div>
                </div>

                <button 
                className='booking-btn'

                >Booking</button>
            </div>


        </>
    )
}
export default Booking