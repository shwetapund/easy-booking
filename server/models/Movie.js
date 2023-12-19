import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Imageurl: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,

  },
  language: {
    type: String
  },
  movieType: {
    type: String,
    default: 'other'
  },
  rating: {
    type: String,
  },
  description: {
    type: String
  }
},
  {
    timestamps: true,

  });

const Movie = model('Movie', movieSchema);

export default Movie
