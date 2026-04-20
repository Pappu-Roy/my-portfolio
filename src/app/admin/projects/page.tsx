"use client";
import { useState, useEffect } from "react";
import { FiEdit2, FiTrash2, FiPlus, FiArrowLeft, FiToggleLeft, FiToggleRight } from "react-icons/fi";

const emptyForm = {
  title: "", description: "", imageUrl: "", tech: "",
  liveLink: "", githubLink: "", position: 0, status: "Active"
};

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [view, setView] = useState<"list" | "form">("list");
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      if (!res.ok) throw new Error("API Error");
      const data = await res.json();
      setProjects(data || []);
    } catch (error) {
      console.error("Fetch Data Error:", error);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `/api/projects/${currentId}` : "/api/projects";

    const payload = {
      ...formData,
      tech: formData.tech.split(",").map((s: string) => s.trim()).filter(Boolean),
      position: isNaN(Number(formData.position)) ? 0 : Number(formData.position),
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormData(emptyForm);
        setIsEditing(false);
        setView("list");
        fetchProjects();
      } else {
        const errorData = await res.json();
        alert("Error: " + (errorData.error || "Failed to submit"));
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (p: any) => {
    setIsEditing(true);
    setCurrentId(p._id);
    setFormData({ ...p, tech: p.tech.join(", ") });
    setView("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      fetchProjects();
    }
  };

  const handleToggleStatus = async (p: any) => {
    const newStatus = p.status === "Active" ? "Inactive" : "Active";
    await fetch(`/api/projects/${p._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...p, status: newStatus }),
    });
    fetchProjects();
  };

  const handleBack = () => {
    setView("list");
    setIsEditing(false);
    setFormData(emptyForm);
  };

  // ===================== FORM VIEW =====================
  if (view === "form") {
    return (
      <div className="space-y-8 pb-20">
        {/* Header with Back button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <FiArrowLeft /> Back
          </button>
          <h1 className="text-3xl font-black">
            {isEditing ? "Edit" : "Add New"} <span className="text-primary">Project</span>
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" placeholder="Project Title" className="input-field" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            <input type="text" placeholder="Image URL" className="input-field" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} required />
            <textarea placeholder="Description" className="input-field md:col-span-2" rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
            <input type="text" placeholder="Tech Stack (React, Next.js, ...)" className="input-field" value={formData.tech} onChange={e => setFormData({...formData, tech: e.target.value})} />
            <input type="text" placeholder="Live Link" className="input-field" value={formData.liveLink} onChange={e => setFormData({...formData, liveLink: e.target.value})} />
            <input type="text" placeholder="Github Link" className="input-field" value={formData.githubLink} onChange={e => setFormData({...formData, githubLink: e.target.value})} />
            <input type="number" placeholder="Position (1 = first)" className="input-field" value={formData.position} onChange={e => setFormData({...formData, position: parseInt(e.target.value) || 0})} />
            <select className="input-field cursor-pointer" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {loading ? "Saving..." : isEditing ? "Update Project" : "Add Project"}
            </button>
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-2.5 bg-gray-100 dark:bg-slate-800 font-bold rounded-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  // ===================== LIST VIEW =====================
  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black">
          My <span className="text-primary">Projects</span>
        </h1>
        <button
          onClick={() => { setFormData(emptyForm); setIsEditing(false); setView("form"); }}
          className="flex items-center gap-2 px-5 py-3 bg-primary text-white font-bold rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
        >
          <FiPlus className="text-lg" />
          Add Project
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-slate-800/50 text-xs uppercase font-bold text-gray-400">
              <th className="p-5">Pos</th>
              <th className="p-5">Project</th>
              <th className="p-5">Status</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {projects.length === 0 && (
              <tr>
                <td colSpan={4} className="p-10 text-center text-gray-400">
                  No projects yet. Click "Add Project" to get started!
                </td>
              </tr>
            )}
            {projects.map((p: any) => (
              <tr key={p._id} className="hover:bg-gray-50/50 dark:hover:bg-slate-800/20 transition-colors">
                <td className="p-5 font-bold text-primary">{p.position}</td>
                <td className="p-5">
                  <div className="flex items-center gap-4">
                    <img src={p.imageUrl} className="w-12 h-12 rounded-lg object-cover bg-gray-100" alt="" />
                    <div>
                      <p className="font-bold">{p.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{p.tech.join(", ")}</p>
                    </div>
                  </div>
                </td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${p.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {p.status}
                  </span>
                </td>
                <td className="p-5">
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(p)} title="Edit" className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg cursor-pointer transition-colors">
                      <FiEdit2 />
                    </button>
                    <button onClick={() => handleToggleStatus(p)} title={p.status === "Active" ? "Deactivate" : "Activate"} className={`p-2 rounded-lg cursor-pointer transition-colors ${p.status === "Active" ? "text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20" : "text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"}`}>
                      {p.status === "Active" ? <FiToggleRight className="text-lg" /> : <FiToggleLeft className="text-lg" />}
                    </button>
                    <button onClick={() => handleDelete(p._id)} title="Delete" className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg cursor-pointer transition-colors">
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}