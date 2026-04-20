import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  tech: { type: [String], default: [] },
  liveLink: { type: String },
  githubLink: { type: String },
  category: { type: String },
  position: { type: Number, default: 0 }, 
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
}, { timestamps: true });

const Project = models.Project || model("Project", ProjectSchema);
export default Project;