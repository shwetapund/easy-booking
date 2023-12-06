import './Booking.css';
import Navbar from "./../../components/Navbar/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//user, movie,ticketno,type,theatrename,seatno,date,time
function Booking() {
    // const { id } = useParams();

    // const [user, setUser] = useState('');
    // const [movie, setMovie] = useState({});
    // const [ticketno, setTicketno] = useState('');
    // const [type, setType] = useState('');
    // const [theatrename, setTheatrename] = useState('');
    // const [seatno, setSeatno] = useState('');
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');

    // const loadMovie = async () => {
    //     const response = await axios.get(`/api/v1/bookmovie/${id}`)
    //     setMovie(response?.data?.data);

    // }
    // useEffect(() => {
    //     loadMovie();
    // },[])

    return (
        <>
            <Navbar />
    
 <h1>All booking</h1>

        </>
    )
}
export default Booking