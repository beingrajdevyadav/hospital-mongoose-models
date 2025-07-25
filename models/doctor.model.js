import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    department: {
        type: String,
    },
    email:{
        type: String,
    },
    phone:{
        type: String,
    },
    availability:{
        days: [String],
        time: {
            start: String,
            end: String
        }
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});


export default Doctor = mongoose.model("Doctor", doctorSchema);