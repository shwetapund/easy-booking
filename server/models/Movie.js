import { Schema,model } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Imageurl:{
    type:String,
    required:true
  },
  duration: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  movieType: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description:{
    type:String
  }
   
},
{
    timestamps: true,

});

const Movie = model('Movie', movieSchema);

export default Movie
