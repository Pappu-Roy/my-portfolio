import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();
    const { id } = await params;
    const data = await req.json();
    const updated = await Project.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("PUT Project Error:", error.message);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();
    const { id } = await params;
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ message: "Project deleted" });
  } catch (error: any) {
    console.error("DELETE Project Error:", error.message);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}