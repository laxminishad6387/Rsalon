import mongoose from 'mongoose'

const bookingSchema= new mongoose.Schema({
    username:{type:String, required:true},
    email: {type: String, required:true},
    slot: {type: String, required:true},
    employe: {type: String, required:true},
    
})
 const  UserBooking= mongoose.model('UserBooking',bookingSchema);

 export default UserBooking;  //exporting the model to use it in other files.