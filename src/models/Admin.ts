import mongoose, { Schema, model, models } from "mongoose";

const AdminSchema = new Schema({
  name: { type: String, default: "Admin User" },
  email: { type: String, required: true, unique: true },
  image: { type: String, default: "/profile.png" },
}, { timestamps: true });

const Admin = models.Admin || model("Admin", AdminSchema);
export default Admin;