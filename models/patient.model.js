import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dateOfBirth: {
        type: Date
    },
    contact: {
        phone: {
            type: String,
            required: true,
        },
        email:{
            type:String,
        }, 
        address: {
            type: String,
        },
    },

    emergencyContact:{
        name: String,
        relation: String,
        phone: String,   
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    allergies: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {timestamps: true});

export default Patient = mongoose.model("Patient", patientSchema);