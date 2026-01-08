import {
  MdAdd,
  MdSearch,
  MdNotificationsNone,
  MdSettings,
  MdPerson,
  MdGroups,
  MdMenuBook,
} from "react-icons/md";

import studentImg from "../../assets/Image.png";
import bgImg from "../../assets/IMAGE1.jpeg";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      total: 3654,
      active: 3643,
      inactive: 11,
      img: (
        <img
          src={studentImg}
          alt="Students"
          className="w-8 h-8 object-contain"
        />
      ),
      badge: "1.2%",
      badgeColor: "bg-red-100 text-red-600",
    },
    {
      title: "Total Teachers",
      total: 284,
      active: 254,
      inactive: 30,
      icon: <MdPerson size={28} />,
      badge: "1.2%",
      badgeColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Staff",
      total: 162,
      active: 161,
      inactive: 2,
      icon: <MdGroups size={28} />,
      badge: "1.2%",
      badgeColor: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Total Subjects",
      total: 82,
      active: 81,
      inactive: 1,
      icon: <MdMenuBook size={28} />,
      badge: "1.2%",
      badgeColor: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* TOP BAR */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-md border text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <select className="border rounded-md px-3 py-2 text-sm bg-white">
              <option>Academic Year : 2025 / 2026</option>
            </select>

            <button className="p-2 rounded-md border bg-white">
              <MdSettings size={18} />
            </button>

            <button className="p-2 rounded-md border bg-white">
              <MdNotificationsNone size={18} />
            </button>
          </div>
        </div>

        {/* HEADER */}
        <div className="bg-gray-200 rounded-md px-4 py-3 flex justify-between">
          <div>
            <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            <p className="text-xs text-gray-600">
              Dashboard / <span className="text-gray-800">Admin Dashboard</span>
            </p>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              <MdAdd /> Add Student
            </button>
            <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              <MdAdd /> Add Teacher
            </button>
          </div>
        </div>

        {/* WELCOME CARD */}
        <div
          className="relative rounded-xl p-6 text-white"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-xl" />
          <div className="relative">
            <h2 className="text-xl font-semibold">Welcome Back, Mr. User 👋</h2>
            <p className="text-sm mt-1">Have a Good day at work</p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
        {stats.map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border">
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div className="p-3 bg-gray-100 rounded-lg">
                  {item.img || item.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{item.total}</h2>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${item.badgeColor}`}>
                {item.badge}
              </span>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-4">
              <span>
                Active <strong>{item.active}</strong>
              </span>
              <span>
                Inactive <strong>{item.inactive}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
 {/* FEES COLLECTION */}
<div className="bg-white rounded-xl border p-3">
  {/* Header */}
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-sm font-semibold">Fees Collection</h3>

    {/* September DROPDOWN */}
    <select className="text-xs text-gray-600 border rounded px-2 py-1 bg-white focus:outline-none">
      <option>September</option>
      <option>August</option>
      <option>July</option>
    </select>
  </div>

  {/* Legend */}
  <div className="flex gap-4 text-xs text-gray-500 mb-4">
    <span className="flex items-center gap-1">
      <span className="w-2.5 h-2.5 bg-gray-300"></span>
      Total Fee
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2.5 h-2.5 bg-blue-600"></span>
      Collected Fee
    </span>
  </div>

  {/* CHART */}
  <div className="flex gap-4">
    {/* LEFT Y-AXIS */}
    <div className="flex flex-col justify-between h-[240px] text-[11px] text-gray-400">
      <span>60L</span>
      <span>50L</span>
      <span>40L</span>
      <span>30L</span>
      <span>20L</span>
      <span>10L</span>
      <span>0</span>
    </div>

    {/* BARS + GRID */}
    <div className="relative w-full h-[240px]">
      {/* RECTANGULAR GRID LINES */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="border-t border-gray-200"
          />
        ))}
      </div>

      {/* BAR CONTAINER */}
      <div className="relative z-10 flex items-end justify-between h-full px-4">
        {[
          { label: "CS: 2023", collected: 80 },
          { label: "CE: 2023", collected: 75 },
          { label: "ML: 2023", collected: 65 },
          { label: "EE: 2023", collected: 80 },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            {/* TOTAL BAR (RECTANGLE) */}
            <div className="relative h-[190px] w-7 bg-gray-200">
              {/* COLLECTED BAR */}
              <div
                className="absolute bottom-0 w-full bg-blue-600"
                style={{ height: `${item.collected}%` }}
              />
            </div>

            {/* LABEL */}
            <span className="text-[11px] text-gray-500">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* LEAVE REQUESTS */}
<div className="bg-white rounded-xl border p-4">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-sm font-semibold">Leave Requests</h3>

    <select className="text-xs border rounded px-2 py-1 bg-white">
      <option>This Week</option>
      <option>Last Week</option>
    </select>
  </div>

  {/* REQUEST 1 */}
  <div className="pb-4 border-b">
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-300" />
          
        <div>
          <p className="text-sm font-semibold">
            James
            <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded">
              Emergency
            </span>
          </p>

          <p className="text-xs text-gray-500">Physics Teacher</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button className="w-7 h-7 rounded bg-green-100 text-green-600 flex items-center justify-center text-sm">
          ✓
        </button>
        <button className="w-7 h-7 rounded bg-red-100 text-red-600 flex items-center justify-center text-sm">
          ✕
        </button>
      </div>
    </div>
{/* Dates row */}
<div className="flex justify-between text-xs mt-2 ml-13">
  <span className="font-semibold text-gray-600">
    Leave : 12 - 13 May
  </span>
  <span className="font-semibold text-gray-600">
    Apply on : 12 May
  </span>
</div>
  </div>

  {/* REQUEST 2 */}
  <div className="pt-4">
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        {/* Avatar with minus */}
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
          –
        </div>

        <div>
          <p className="text-sm font-semibold">
            Hendrita
            <span className="ml-2 text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded">
              Medical
            </span>
          </p>

          <p className="text-xs text-gray-500">Maths Teacher</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button className="w-7 h-7 rounded bg-green-100 text-green-600 flex items-center justify-center text-sm">
          ✓
        </button>
        <button className="w-7 h-7 rounded bg-red-100 text-red-600 flex items-center justify-center text-sm">
          ✕
        </button>
      </div>
    </div>

    {/* Dates row */}
<div className="flex justify-between text-xs mt-2 ml-13">
  <span className="font-semibold text-gray-600">
    Leave : 17 - 18 May
  </span>
  <span className="font-semibold text-gray-600">
    Apply on : 12 May
  </span>
</div>
  </div>
</div>
    </div>


{/* ================= DASHBOARD EXTRA ================= */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

  {/* ================= LEFT : SCHEDULES ================= */}
  <div className="bg-white rounded-xl border p-4">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-sm font-semibold">Schedules</h3>
      <button className="text-xs text-blue-600">+ Add New</button>
    </div>

    <p className="text-xs font-medium mb-2">July 2024</p>

    {/* Days */}
    <div className="grid grid-cols-7 text-[11px] text-gray-500 text-center mb-2">
      {["S","M","T","W","T","F","S"].map(d => (
        <span key={d}>{d}</span>
      ))}
    </div>

    {/* Calendar */}
    <div className="grid grid-cols-7 gap-y-2 text-xs text-center mb-4">
      {Array.from({ length: 30 }).map((_, i) => {
        const day = i + 1;
        const active = [6, 7, 12, 27].includes(day);

        return (
          <span
            key={day}
            className={`w-7 mx-auto py-1 rounded ${
              active ? "bg-blue-600 text-white" : "text-gray-400"
            }`}
          >
            {day}
          </span>
        );
      })}
    </div>

    {/* ================= UPCOMING EVENTS ================= */}
{/* ================= UPCOMING EVENTS ================= */}
<div className="space-y-3">

  {/* Event 1 */}
  <div className="bg-white rounded-lg p-3 flex justify-between items-start border-l-4 border-blue-500">
    <div className="flex gap-3">
      {/* Left Icon */}
      <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600 text-xs">
        ○
      </div>

      <div>
        <p className="text-xs font-semibold">Parents, Teacher Meet</p>
        <p className="text-[11px] text-gray-400">15 July 2024</p>
        <p className="text-[11px] text-gray-400 mt-1">
          09:10 AM - 10:50 PM
        </p>
      </div>
    </div>

    {/* Blank Avatars */}
    <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded-full bg-gray-200" />
      <div className="w-6 h-6 rounded-full bg-gray-200" />
      <div className="w-6 h-6 rounded-full bg-gray-200" />
    </div>
  </div>

  {/* Event 2 */}
  <div className="bg-white rounded-lg p-3 flex justify-between items-start border-l-4 border-purple-500">
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded bg-purple-50 flex items-center justify-center text-purple-600 text-xs">
        ○
      </div>

      <div>
        <p className="text-xs font-semibold">Staff Meeting</p>
        <p className="text-[11px] text-gray-400">10 July 2024</p>
        <p className="text-[11px] text-gray-400 mt-1">
          09:10 AM - 10:50 PM
        </p>
      </div>
    </div>

    <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded-full bg-gray-200" />
      <div className="w-6 h-6 rounded-full bg-gray-200" />
      <div className="w-6 h-6 rounded-full bg-gray-200" />
    </div>
  </div>

  {/* Event 3 */}
  <div className="bg-white rounded-lg p-3 flex justify-between items-start border-l-4 border-red-500">
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center text-red-600 text-xs">
        ○
      </div>

      <div>
        <p className="text-xs font-semibold">Vacation Meeting</p>
        <p className="text-[11px] text-gray-400">
          07 July 2024 - 07 July 2024
        </p>
        <p className="text-[11px] text-gray-400 mt-1">
          09:10 AM - 10:50 PM
        </p>
      </div>
    </div>

    <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded-full bg-gray-200" />
      <div className="w-6 h-6 rounded-full bg-gray-200" />
      <div className="w-6 h-6 rounded-full bg-gray-200" />
    </div>
  </div>

</div>
  </div>
  {/* ================= CENTER : ATTENDANCE + NOTICE ================= */}
  <div className="space-y-6">
    {/* Attendance */}
    <div className="bg-white rounded-xl border p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold">Attendance</h3>
        <select className="text-xs border rounded px-2 py-1">
          <option>Today</option>
        </select>
      </div>

      <div className="flex gap-4 text-xs mb-4">
        <span className="text-blue-600 border-b-2 border-blue-600 pb-1">
          Students
        </span>
        <span className="text-gray-400">Teachers</span>
        <span className="text-gray-400">Staff</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Emergency", value: "28" },
          { label: "Absent", value: "01" },
          { label: "Late", value: "01" },
        ].map((a, i) => (
          <div key={i} className="bg-gray-50 rounded p-3 text-center">
            <p className="text-xs text-gray-500">{a.label}</p>
            <p className="font-semibold">{a.value}</p>
          </div>
        ))}
      </div>

      {/* Donut (UI only) */}
      <div className="flex justify-center">
        <div className="relative w-32 h-32 rounded-full border-[16px] border-blue-600">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-sm font-semibold">3610</p>
            <p className="text-[11px] text-gray-400">Present</p>
          </div>

          <div className="absolute bottom-2 right-2 bg-white shadow rounded-full px-2 py-1 text-[10px]">
            44 Absent
          </div>
        </div>
      </div>
    </div>

    {/* Notice Board */}
    <div className="bg-white rounded-xl border p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold">Notice Board</h3>
        <button className="text-xs text-blue-600">View All</button>
      </div>

      <div className="space-y-3">
        {[
          { title: "Online Classes Preparation", days: "02 Days" },
          { title: "Exam Time Table Release", days: "06 Days" },
          { title: "Exam Preparation Notification!", days: "12 Days" },
          { title: "World Environment Day Program...!!!", days: "15 Days" },
          { title: "New Syllabus Instructions", days: "20 Days" },
        ].map((n, i) => (
          <div key={i} className="flex justify-between text-xs">
            <p className="text-gray-600">{n.title}</p>
            <span className="text-gray-400">{n.days}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* ================= RIGHT : QUICK LINKS + FEES ================= */}
  <div className="space-y-6">
    {/* Quick Links */}
    <div className="bg-white rounded-xl border p-4">
      <h3 className="text-sm font-semibold mb-3">Quick Links</h3>

      <div className="space-y-3">
        {["Attendance", "Exams", "Reports"].map((q, i) => (
          <div
            key={i}
            className="bg-blue-50 text-blue-600 text-sm py-4 rounded-lg text-center font-medium"
          >
            {q}
          </div>
        ))}
      </div>
    </div>

    {/* Fees Summary */}
    <div className="bg-white rounded-xl border p-4 space-y-4">
      {[
        { title: "Total Fees Collected", value: "$25,000.02", up: true },
        { title: "Fine Collected till date", value: "$4,56,64", up: false },
        { title: "Student Not Paid", value: "545", up: true },
        { title: "Total Outstanding", value: "$4,56,64", up: false },
      ].map((f, i) => (
        <div key={i}>
          <p className="text-xs text-gray-400">{f.title}</p>
          <div className="flex justify-between items-center">
            <p className="font-semibold">{f.value}</p>
            <span
              className={`text-xs px-2 py-0.5 rounded ${
                f.up
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {f.up ? "↑ 1.2%" : "↓ 1.5%"}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



    </div>  );

}
