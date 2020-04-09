import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
    description: { type: String, default: "Cool beans" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;