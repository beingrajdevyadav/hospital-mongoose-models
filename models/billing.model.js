import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    },
    services: [
        {
            name: String,
            cost: Number,
        }
    ],

    totalAmount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ["Paid", "Pending"],
        default: "Pending",
    },
}, {timestamps: true});

export default Billing = mongoose.model("Billing", billingSchema);

