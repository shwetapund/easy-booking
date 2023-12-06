import Movie from "./../models/Movie.js";
import Book from "../models/Book.js";

const addMovie = async (req,res)=>{
    const {title,Imageurl,duration,releaseDate,movieType,rating,description,language}=req.body;
    // if(!title||!Imageurl||!duration||!releaseDate||!movieType||!rating||!description){
    //     res.status(400).send({msg:"All fields are required"})
    // }
    const adddMovie= new Movie({
        title:title,
        Imageurl:Imageurl,
        duration:duration,
        releaseDate:releaseDate,
        movieType:movieType,
        rating:rating,
        description:description,
        language:language
    })

    try{
       const movie= await adddMovie.save();
       res.json({
        success:true,
        data:movie,
        message:'Movie added successfully'
       })
    }catch(err){
        res.json({
            success:false,
            message:err.message
        })
    }
}

const getAllMovies= async(req,res)=>{
   try{
    const getAllMovies=await Movie.find({})
    res.json({
        success:true,
        data:getAllMovies,
        message:'movies fetched successfully'
    })
   }catch(err){
    res.json({
        success:false,
        message:err.message
    })
   }
}
const getMovieById = async (req,res)=>{
   try{
    const {_id} = req.params;

    const fetchMovie = await Movie.findById(_id)
    res.status(200).json({
        success:true,
        data:fetchMovie,
        message:'successfully fetch movie '
    })
   }catch(err){
    res.json({
        success:false,
        message:err.message
    })
   }
}

const searchMovie= async(req,res)=>{
    const {q}=req.query
    const search= await Movie.find({title:{$regex:q,$options:"i"}})
    if(!search){
        return res.status(404).send("no result")
    }
    res.json({
        success:true,
        data:search,
        message:'Search Successful'
    })

}

const bookmovie = async (req, res) => {
    const { user, movie,ticketno,type,theatrename,seatno,date,time} = req.body;

    const books = new Book({
        user, movie,ticketno,type,theatrename,seatno,date,time
    })

    try {
        const saveBooking = await books.save();
        res.status(201).json({
            success: true,
            Order: saveBooking,
            message: " Ticket Book succesfully..!"
        })
    } catch (e) {
        res.status(404).json({
            success: false,
            message: e.message
        })
    }
}

const getuserbook =  async (req, res) => {
    try{
        const { id } = req.params
        const findBooking = await Book.find({ user: { _id: id } }).populate('user  movie')
        res.status(204).json({
            success:true,
            data:findBooking,
            message:" Booking fetch successfully..!"  
          })
    }catch(err){
         res.status(404).send(err.message)
    }
}


export {addMovie,getAllMovies,searchMovie,getuserbook,bookmovie, getMovieById}


