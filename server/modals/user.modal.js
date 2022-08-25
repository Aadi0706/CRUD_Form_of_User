
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    student_code: { type: Number, required: true, unique: [true, "Student code already exist"] },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    email: { type: String, required: [true, "Please provide an email address"], unique: [true, "Email exist already."], lowercase: true },
    mobNum: { type: Number, required: [true, "Please provide a mobile number"], unique: [true, "Mobile number exist already."] },
    city: { type: String, required: true },
    state: { type: String, required: true },
    status: {
        type: String,
        // enum:['Active', 'Inactive'],
        default: "Active",
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }


},
    {
        timestamps: true,
        versionKey: false
    });

const User = mongoose.model("user", userSchema);

module.exports = User;
