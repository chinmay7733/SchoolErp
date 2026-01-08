export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Total Students</div>
        <div className="bg-white p-4 rounded shadow">Total Teachers</div>
        <div className="bg-white p-4 rounded shadow">Total Parents</div>
      </div>
    </div>
  );
}
