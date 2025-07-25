import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment", 
    required: true,
},
doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
},
patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
},
medications: [
    {
        name: String,
        dosage: String,
        frequency: String,
        duration: String,
    }
],
instructions: String,
createdAt: {
    type: Date,
    default: Date.now,
}
}, {timestamps: true});

export default Prescription = mongoose.model("Prescription", prescriptionSchema);