import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true
    },
    type:{
        type: String,
        enum: ["General", "Private", "ICU"],
        required: true,
    },
    isOccupied: {
        type: Boolean,
        default: false,
    },
    assignedPatient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});


export default Room = mongoose.model("Room", roomSchema);