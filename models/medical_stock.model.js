import mongoose from "mongoose";

const medicalStockSchema = new mongoose.Schema({
    itemName: String,
    category: {
        type: String,
        enum: ["Medicine", "Equipment", "Supply"],
    },
    quantity: Number,
    expiryDate : Date,
    supplier: String,
    lastUpdated: {
        type: Date,
        default: Date.now,
    }
}, {timestamps: true});

export default MedicalStock = mongoose.model("MedicalStock", medicalStockSchema);