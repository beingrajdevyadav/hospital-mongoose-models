import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    name: String,
    role: {
        type: String,
        enum: ["Receptionist", "Nurse", "Technician", "Admin"],
        required: true,
    },
    department: String,
    phone: String,
    email: String,
    joiningDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true,
    }
}, {timestamps: true});

export default Staff = mongoose.model("Staff", staffSchema);

