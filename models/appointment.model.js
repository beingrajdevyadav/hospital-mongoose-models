import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient", 
        required: true
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    timeSlot : {
        type: String,
        required: true,
    },
    reason: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Scheduled", "Completed", "Cancelled"],
        default: "Scheduled",
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {timestamps: true});


export default Appointment = mongoose.model("Appointment", appointmentSchema);