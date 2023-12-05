import './Booking.css';
import Navbar from "./../../components/Navbar/Navbar";
import { useState } from 'react';
//user, movie,ticketno,type,theatrename,seatno,date,time
function Booking(){
    const [user, setUser] = useState('');
    const [movie, setMovie] = useState('');
    const [ticketno, setTicketno] = useState('');
    const [type, setType] = useState('');
    const [theatrename, setTheatrename] = useState('');
    const [seatno, setSeatno] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    return(
        <>
        <Navbar/>
        <div className='booking-container'>
        <h3 className='text-center'>Easy Booking</h3>

       <div>
       <input 
        type='text'
        className='form-handle'
        placeholder='User Name'
        value={user}
        onChange={(e)=>{
            setUser(e.target.value);
        }}
        />
       </div>

        <div>
        <input 
        type='text'
        placeholder='Movie Name'
        value={movie}
        onChange={(e)=>{
            setMovie(e.target.value)
        }}
        />
        </div>

       <div>
       <input
        type='Number'
        placeholder='ticketno-text'
        value={ticketno}
        onChange={(e)=>{
            setTicketno(e.target.value)
        }}
        />
       </div>

        <label>Type: </label>
        <div>
        <input
        type='radio' 
        name='gender'
        value={type}
        onClick={(e)=>{
            setType(e.target.value)
        }}
        /> VIP : 500 Rs
         <input
        type='radio' 
        name='gender'
        value={type}
        onClick={(e)=>{
            setType(e.target.value)
        }}
        /> Golden: 300 Rs
         <input
        type='radio' 
        name='gender'
        value={type}
        onClick={(e)=>{
            setType(e.target.value)
        }}
        /> Silver: 200 Rs
        
        </div>
     

        <label>Theater Name: </label>

       <div>
       <select
        value={theatrename}
        onChange={(e)=>{
            setTheatrename(e.target.value);
        }}
        >   <option>Select here :</option>
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
        placeholder='seat No'
        value={seatno}
        onChange={(e)=>{
            setSeatno(e.target.value)
        }}
        />
       </div>

       <div>
       <input
        type='date'
        placeholder='Date'
        value={date}
        onChange={(e)=>{
            setDate(e.target.value)
        }}
        />

       </div>

       <div>
       <input
        type='text'
        placeholder='Time'
        value={time}
        onChange={(e)=>{
            setTime(e.target.value)
        }}
        />

       </div>

        </div>
        
        
        </>
    )
}
export default Booking