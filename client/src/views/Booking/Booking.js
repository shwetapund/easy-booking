import './Booking.css';
import Navbar from "./../../components/Navbar/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import showToast from 'crunchy-toast';
import Footer from "./../../components/Footer/Footer";
import jsPDF from 'jspdf'; 
import 'jspdf-autotable'; 

function Booking() {
  const [booking, setBooking] = useState([]);
  const [user, setUser] = useState({});

  const loadBooking = async () => {
    const getUser = JSON.parse(localStorage.getItem('user') || '{}');
    const userstore = getUser._id;

    try {
      const response = await axios.get(`/api/v1/user/bookings/${userstore}`);
      setBooking(response?.data?.data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    loadBooking();
  }, []);

  useEffect(() => {
    const userfind = JSON.parse(localStorage.getItem('user') || '{}');
    const Adminfind = JSON.parse(localStorage.getItem('admin') || '{}');

    if (userfind?.email || Adminfind?.email) {
      setUser(userfind);
    } else {
      showToast('You are not logged in!', 'success', 3000);
      window.location.href = '/login';
    }
  }, []);

  const downloadPDF = (bookingInstance) => {
    const { movie, ticketno, type, theatrename, seatno, date, time } = bookingInstance;

    const pdf = new jsPDF();
    
    pdf.text('Booking Information', 10, 10);
    pdf.autoTable({
      startY: 20,
      head: [['Field', 'Value']],
      body: [
        ['Movie', movie?.title],
        ['Ticket No', ticketno],
        ['Type', type],
        ['Theater Name', theatrename],
        ['Seat No', seatno],
        ['Date', date],
        ['Time', time],
      ],
    });
    pdf.save(`Booking_${ticketno}.pdf`);
  };

  return (
    <>
      <Navbar />

      <h2 className='text-center mt-4'>All booking</h2>
      {booking?.map((bookingInstance, index) => {
        const { movie, ticketno, type, theatrename, seatno, date, time } = bookingInstance;

        return (
          <div key={index} className='ALL-booking-container'>
            <div>
              <img src={movie?.Imageurl} className='img-booking' alt={`Movie Poster for ${movie?.title}`} />
            </div>
            <div className='booking-information'>
              <p className='text-booking-info'>Type: <span className='get-booking-text'>{type}</span></p>
              <p className='text-booking-info'>Theater Name: <span className='get-booking-text'>{theatrename}</span></p>
              <p className='text-booking-info'>Seat No: <span className='get-booking-text'>{seatno}</span></p>
              <p className='text-booking-info'>Date: <span className='get-booking-text'>{date}</span></p>
              <p className='text-booking-info'>Time: <span className='get-booking-text'>{time}</span></p>
              <button className='btn-dawnload' onClick={() => {downloadPDF(bookingInstance)}}>Download ⬇️</button>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
}

export default Booking;
