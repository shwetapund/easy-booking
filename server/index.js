import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import healthApi from "./controllers/health.js";
import {postSignUpApi, postLoginApi} from "./controllers/signUp.js";

import {addMovie, getAllMovies, searchMovie ,getuserbook,bookmovie, getMovieById,delMovie} from './controllers/movies.js';


import path from 'path';
import { postAdminApi, postAdminLoginApi } from './controllers/adminSignup.js';

const app = express();
app.use(express.json());
const MongoDBConn = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if(conn){
        console.log('monogodb is connected')
        
    }
};

MongoDBConn();

 app.get('/api/v1/healths',healthApi)

 app.post('/api/v1/signups',postSignUpApi)

 app.post('/api/v1/logins',postLoginApi)

app.post('/api/v1/admin/signups',postAdminApi)

app.post('/api/v1/admin/logins',postAdminLoginApi)

app.post('/api/v1/movie',addMovie)

app.delete('/api/v1/movie/:id', delMovie)

app.get('/api/v1/movies',getAllMovies)

app.get('/app/v1/search/movie',searchMovie)

app.get('/api/v1/user/bookings/:id', getuserbook)

app.post('/api/v1/bookmovie', bookmovie)

app.get('/api/v1/bookmovie/:_id',getMovieById)


const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}



const PORT = process.env.PORT || 5000;


app.listen(PORT, (req,res)=>{
    console.log(`server is running on ${PORT}`)
})
