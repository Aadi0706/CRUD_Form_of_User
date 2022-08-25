const mongoose= require('mongoose');


const connectDB= ()=>{

    return mongoose.connect("mongodb+srv://Aditya07:Aditya07@freeclusterdatabase.so6y5.mongodb.net/Form_crud?retryWrites=true&w=majority")
}



module.exports = connectDB;