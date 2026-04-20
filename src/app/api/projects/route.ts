import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ position: 1 });
    return NextResponse.json(projects);
  } catch (error: any) {
    console.error("GET Projects Error:", error.message);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const newProject = await Project.create(data);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error: any) {
    console.error("POST Project Error:", error.message);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}