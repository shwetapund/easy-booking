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
   
  },
  language:{
type:String
  },
  movieType: {
    type: String,
   
  },
  rating: {
    type: Number,
   
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
