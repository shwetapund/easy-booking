import react from 'react';
import './About.css';
import Footer from "./../../components/Footer/Footer";
import Navbar from './../../components/Navbar/Navbar';
import bokking from "./../About/easy.jpg"
import { Link, useParams} from 'react-router-dom';
import Card from '../../components/Card/Card';
import shweta from "./../About/shweta1.jpg"
import pornima from "./../About/pornima.jpg"
import nitish from "./../About/nitish.jpg"
import rahul from "./../About/mypic.JPG"

function About() {

    return (
        <>
            <Navbar />
            <h1 className='text-center mt-4'>About Us</h1>
            <div className='container-about'>
                <img className='site-img' src={bokking} />
                <p className='paragraph'>At Easy Booking , the online video streaming Over The Top (OTT) platform, we truly believe that for entertainment to come alive, you need to feel it. That’s where Easy Booking brings in the advantage of the language of your comfort! With 12 navigational and featured languages across original features, live TV, catch up TV, lifestyle shows, children's programmes, exclusive short series and acclaimed plays - it’s unlimited entertainment in the language that sounds like home. Easy Booking offers an exhaustive array of content; with 90+ live TV channels and 1.25 lac+ hours of viewing across the languages of English, Hindi, Bengali, Malayalam, Tamil, Telugu, Kannada, Marathi, Oriya, Bhojpuri, Gujarati & Punjabi making it a complete video destination for OTT viewers. Our exhaustive selection of Bollywood and language movies make us the preferred destination for an avid cinema connoisseur.

                    We offer a comfortable and friendly user experience with highly evolved video streaming technology at amazing speed and crystal clear sounds. Language Navigation, Seamless Video playback, Smart Content Search & recommendation, option to choose video quality and much more create a video experience like no other. All you need is a compatible connected device. Tune into WacthWave now, in your language!<br/>

                    <button type='button' className='button-abouts'> <Link className='button-about' to="/">Book Now</Link> </button>

                </p>
            </div>
            <h1 className='text-center hading-team'>Our Team</h1>

            <div className='card-contain'>
            <Card name='Shweta Pund' img={shweta} description="I am Shweta Pund,I have completed Bachelor of computer application from RSMDP. "/>
            <Card name='Pournima Anjole' img={pornima} description="I am Pornima Anjole,currently pursuing graduation B.tech final year from TulsiramJi Gaikwad Patil College of Engineering And Technology."/>
            <Card name='Nitish Kumar' img={nitish} description="I am Nitish Kumar,currently pursuing graduation B.tech final year from Govindrao wanjari college of Engineering And Technology."/>
            <Card name='Rahul Jadhav' img={rahul} description="I am Rahul Jadhav,currently pursuing B.tech Third year from parikrama college of Engineering, kashti"/>
            </div>
        
       
        <Footer/>
        </>
    )
}
export default About