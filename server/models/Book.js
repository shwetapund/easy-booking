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
        enum:['solid: 200 Rs, golden: 300 Rs, VIP: 500 Rs'],
        required : true
    },
    theatrename:{
        type : String,
        enum:['Cinepolis Cinemas (Seasons Mall), City Pride Cinemas (Abhircuhi Mall), City Pride Multiplex. , E Square Multiplex, Victory Theatre., Carnival Cinemas'],
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
 