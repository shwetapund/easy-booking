import './Booking.css';
import Navbar from "./../../components/Navbar/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//user, movie,ticketno,type,theatrename,seatno,date,time
function Booking() {
    const [booking, setBooking] = useState([])

    const loadBooking = async ()=>{
        const getUser = JSON.parse(localStorage.getItem('user') || '{}');
        const userstore = getUser._id;


        try{
            const response = await axios.get(`/api/v1/user/bookings/${userstore}`)


            setBooking(response?.data?.data);
        }catch(err){
            console.log("Error", err)
        }
    }
    useEffect(()=>{
        loadBooking();
    },[])

    return (

        <>
            <Navbar />
   
            <h2 className='text-center mt-4'>All booking</h2>
            {
                booking?.map((bookingInstance, index)=>{
                    const {movie,ticketno,type,theatrename,seatno,date,time} = bookingInstance;

                    return(
                        <div key={index} className='ALL-booking-container'>
                            <div>
                            <img src={movie.Imageurl} className='img-booking'/>
                            </div>
                            <div className='booking-information'>
                            <p className='text-booking-info'>Ticket No:<span className='get-booking-text'>{ticketno}</span></p>

                            <p className='text-booking-info'>Type:<span className='get-booking-text'>{type}</span> </p>

                            <p className='text-booking-info'>Theater Name: <span className='get-booking-text'>{theatrename}</span> </p>

                            <p className='text-booking-info'>Seat No: <span className='get-booking-text'>{seatno}</span></p>

                            <p className='text-booking-info'>Date: <span className='get-booking-text'>{date}</span> </p>

                            <p className='text-booking-info'>Time: <span className='get-booking-text'>{time}</span> </p>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
export default Booking
