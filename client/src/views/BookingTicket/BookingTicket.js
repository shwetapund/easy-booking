import './BookingTicket.css';
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import showToast from 'crunchy-toast';
import Footer from "./../../components/Footer/Footer";
import theaterData from "./BookingTicket.json";
//user, movie,ticketno,type,theatrename,seatno,date,time

function BookingTicket() {
    const { id } = useParams();

    const [user, setUser] = useState('');
    const [movie, setMovie] = useState({});
    const [type, setType] = useState('');
    const [theatrename, setTheatrename] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedCity, setSelectedCity] = useState(theaterData);
    const [selectedTheater,setSelectedTheater] = useState([]);

    const loadMovie = async () => {
        const response = await axios.get(`/api/v1/bookmovie/${id}`)
        setMovie(response?.data?.data);

    }
    useEffect(() => {
        loadMovie();
       const getSeatNo=JSON.parse(localStorage.getItem('selectedSeats'),"{}")
       setSelectedSeats(getSeatNo)
    }, [])

    const booking = async () => {
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');

        const bookingdetails = {
            user: currentUser._id,
            movie: movie._id,
            type: type,
            theatrename: theatrename,
            date: date,
            time: time,
            seatno: selectedSeats
        }
        try {
            const response = await axios.post('/api/v1/bookmovie', bookingdetails);

            alert(response?.data?.message);

            if (response?.data?.success === true) {

                localStorage.removeItem('selectedSeats')

                window.location.href = '/booking';
            }
        } catch (err) {
            console.log(err.message);
        }

    }

    useEffect(() => {
        const userfind = JSON.parse(localStorage.getItem('user') || '{}');

        if (userfind?.email) {
            setUser(userfind);
        }
        else {
            showToast('You are not Logged In', 'danger', 3000);
            window.location.href = '/login'
        }

    }, [])


const handleSelectCity = (e)=>{
    setSelectedCity(e.target.value);
}
const theatre = selectedCity ? theaterData[selectedCity] : [];

    return (
        <>
            <Navbar />
            <div className='booking-container'>
                <h3 className='text-center pt-3 '>Easy Booking</h3>

                <div className='main-booking-container'>
                    <div>
                        <img src={movie.Imageurl} className='movie-iamge' />
                        <div className='d-flex movie-description'>
                            <p>⭐{movie.rating}</p>
                            <p>{movie.movieType}</p>
                        </div>
                        <h3 className='text-center'>{movie.title}</h3>

                    </div>

                    <div className='left-hand-container'>

                        <div className='d-flex'>
                            <div className=''>
                                <label className='d-flex fs-5 ms-2'>
                                    Type: </label>
                            </div>
                            <div className='ms-5 mt-1'>
                                <input
                                    type='radio'
                                    name='typeSelect'
                                    value="VIP 500 Rs"
                                    onClick={(e) => {
                                        setType(e.target.value)
                                    }}
                                    checked={type === "VIP 500 Rs"}
                                /> <span className='type-text'>VIP : 500 Rs</span>

                            </div>
                        </div>
                        <div className='type-btn mt-0'>
                            <div className='type-input'>

                                <input
                                    type='radio'
                                    name='typeSelect'
                                    className='input-left'
                                    value="Golden 300 Rs"
                                    onClick={(e) => {
                                        setType(e.target.value)
                                    }}
                                    checked={type === "Golden 300 Rs"}
                                /> &nbsp; <span className='type-text'>Golden: 300 Rs</span>
                            </div>
                            <div className='type-input'>
                                <input
                                    className='input-left'
                                    type='radio'
                                    name='typeSelect'
                                    value="Solid 200 Rs"
                                    onClick={(e) => {
                                        setType(e.target.value)
                                    }}
                                    checked={type === "Solid 200 Rs"}
                                /> &nbsp; <span className='type-text'>Silver: 200 Rs</span>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <select
                                value={selectedCity}
                                onChange={handleSelectCity}
                                className='form-handle'>
                                <option>Select here to City</option>
                                <option value="Pune">Pune</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Aurangabad">Aurangabad</option>

                            </select>
                        </div>
                    </div>

                    <div className='right-hand-container'>

                        <div>
                            
                            <select
                                onChange={(e)=>{setTheatrename(e.target.value)}}
                                className='form-handle'>
                            <option   value="" >Select Theater</option>
                                {
                                    theatre?.map((theater, index)=>{
                                        return(
                                            <>
                                               <option key={index} value={theater}>{theater}</option>
                                            </>
                                        )
                                    })
                                       
                                      
                                }
                            </select>
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
                            <select
                                className='form-handle'

                                value={time}
                                onChange={(e) => {
                                    setTime(e.target.value);
                                }}>
                                <option>Select Time</option>
                                <option value="9 To 12 AM">9 To 12 AM</option>
                                <option value="12 To 3 PM">12 To 3 PM</option>
                                <option value="6 To 9 PM">6 To 9 PM</option>
                                <option value="9 To 12 PM">9 To 12 PM</option>
                            </select>
                        </div>


                     

                    </div>
                </div>


                <button
                    className='booking-btn'
                    onClick={booking}
                >Booking</button>
            </div>

            <Footer />
        </>
    )
}
export default BookingTicket

















