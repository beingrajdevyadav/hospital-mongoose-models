import mongoose from "mongoose";

const modecalSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    }, 
    diagnosis: String,
    treatment: String,
    reports: [String],
    doctorNotes: String,

}, {timestamps: true});

export default MedicalRecord = mongoose.model("MedicalRecord", modecalSchema)