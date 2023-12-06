import { Schema, model } from "mongoose";

 const bookSchema = new Schema({
    user:{
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    movie:{
        type : Schema.Types.ObjectId,
        ref : "Movie",
        required : true
    },
    ticketno:{
        type : String,
        required : true
    },
    type:{
        type : String,
    },
    theatrename:{
        type : String,
        required : true
    },
    seatno:{
        type: String,
        required : true
    },
    date:{
        type: String,
        required : true
    },
    time:{
        type: String,
        required : true
    }

 })

 const Book = model('Book', bookSchema);

 export default Book
 