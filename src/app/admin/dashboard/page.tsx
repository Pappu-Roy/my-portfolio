export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Welcome back, <span className="text-primary">Admin!</span></h1>
        <p className="text-gray-500">Today is April 16, 2026</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Total Projects", value: "32", color: "bg-blue-500" },
          { label: "Unread Messages", value: "05", color: "bg-green-500" },
          { label: "Blog Posts", value: "12", color: "bg-purple-500" },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
            <h2 className="text-5xl font-black mt-2">{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Recent Messages (Placeholder) */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-bold mb-6">Recent Inquiries</h3>
        <p className="text-gray-500 text-sm">No new messages at the moment.</p>
      </div>
    </div>
  );
}