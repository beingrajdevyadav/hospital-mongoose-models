import mongoose from "mongoose";

const labTestSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: True
    },
    testName: {
        type: String,
        required: true,
    },
    result: String,
    dateConducted: {
        type: Date,
        default: Date.now
    },
    conductedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
    },
    reportUrl : String,
}, {timestamps: true});

export default LabTest = mongoose.model("LabTest", labTestSchema);