import React, { useState, useEffect } from 'react';
import './BookSeatNo.css';
import { useParams } from 'react-router-dom';
import movieimg from './movie.png'

const BookSeatNo = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [canChangeSeats, setCanChangeSeats] = useState(true);
  const {id}=useParams()


  useEffect(() => {
    setBookedSeats([]);
    const storedSelectedSeats = localStorage.getItem('selectedSeats');
    if (storedSelectedSeats) {
      setSelectedSeats(JSON.parse(storedSelectedSeats));
    }

    const timeoutId = setTimeout(() => {
      setSelectedSeats([]);
    }, 3 * 60 * 60 * 1000); 

    
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSeatClick = (seat) => {
    if (!canChangeSeats) {
      
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else if (!bookedSeats.includes(seat)) {
      const newSelectedSeats = [...selectedSeats, seat];
      setSelectedSeats(newSelectedSeats);
     
    }
  };

  const renderSeats = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return rows.map((row) => (
      <div key={row} className="row">
        {cols.map((col) => {
          const seat = `${row}${col}`;
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          return (
            <div
              key={seat}
              className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : ''}`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>
    ));
  };

  const disableChangeSeats = () => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    setCanChangeSeats(false);
    window.location.href=`/bookingTicket/${id}`
  };

  return (
    <div className='movie-container'>

   <div className='left-div'>
<img src={movieimg} className='movie-img' />
   </div >
   <div className='right-div'>
   <div className="movie-seat-booking">
      <div className="seat-container">{renderSeats()}  
      
       <div className='screen'> <p className='text-center'>Screen This Way</p> </div> </div>
 

      <div className="selected-seats">

     <h2 className='sected-heading'>Selected Seat: </h2>
        <p className='selcted-seats'>{selectedSeats.join(', ')}</p>
       
          <button onClick={disableChangeSeats} type='button' className='booking-botton'>Go to Booking Page</button>
     </div>
       
    
    </div>
   </div>
   
    </div>
  );
};

export default BookSeatNo;
