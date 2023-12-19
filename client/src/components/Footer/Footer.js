import { Link } from 'react-router-dom';
import './Footer.css';
import linkdinImg from "./../../assets/linkedin.png";
import GithubImg from "./../../assets/github.png";
import weblogo from "./../../assets/ticket.png";

export default function Footer() {
    return(
        <footer className="text-center footer-container">

  <div className="container p-4">

    <section className="footer-container">
      <div className="row d-flex justify-content-center ">

        <div className="col-lg-6">
            <p className='description'>
                <h4>
                    <img src={weblogo} className='img-logo'/>
                    Easy Booking</h4>
"Easy Booking helps you book tickets easily! Choose your movie, pick the theater, and simply select your seat—golden, silver, or VIP. It's quick and easy to book your favorite seats with just a few clicks, without any hassle.And also to select the Time according to user requirement."</p>
        </div>
        <div className='col-lg-2'>
            <h4 className='quickLink-text'>Click here🖐</h4>
           <div className='links-container'>
           <Link to="/" className='link-text'>Home</Link>
            <Link to="/about" className='link-text'>About</Link>
            <Link to="/booking" className='link-text'>Booking</Link>
            <Link to="/login" className='link-text'>Login</Link>
            <Link to="/signup" className='link-text'>SignUp</Link>
           </div>
        </div>
        <div className="col-lg-4">
        <h4 className='contact-text'>Contact ☎</h4>
         <p className='mt-5 mob-text'>Mob 📞: 8393273255</p>
         <p className='mail-text'>Gmail 📧: easybooking@gmail.com</p>
          <div className="contact-container mt-4">
           
            <div className='contact-icon'>
            <Link to="" >
              <img src="https://portfoilo-simple.netlify.app/images/peerlist.png" 
              className='contact-img'/>
            </Link>
            </div>
            <div className='contact-icon ms-4'>
            <Link to="" className='link-img'><img src={linkdinImg} 
            className='contact-img'/></Link></div>

            <div className='contact-icon ms-4'>
            <Link to="https://github.com/shwetapund/easy-booking" className='contact-img'><img src={GithubImg} 
            className='contact-img'/></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

</footer>
    )
}