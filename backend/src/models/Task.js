import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  dueDate: { 
    type: Date, 
    required: true 
  },
  status: {
    type: String,
    enum: ["pending", "in progress", "completed"],
    default: "pending"
  }
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);
export default Task;