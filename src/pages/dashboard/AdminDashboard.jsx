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
import Container from "../../assets/Container.png";
import Container2 from "../../assets/Container2.png";
import Container3 from "../../assets/Container3.png";

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

<div className="flex justify-center items-center mt-4">
  <div className="relative w-36 h-36">

    {/* Donut Ring */}
    <div className="absolute inset-0 rounded-full border-[16px] border-blue-600"></div>

    {/* Small Absent Slice */}
    <div className="absolute top-4 right-5 w-4 h-4 rounded-full bg-green-400"></div>

    {/* Center Text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold leading-none">3610</p>
      <p className="text-[11px] text-gray-400 mt-1">Present</p>
    </div>

    {/* Absent Badge */}
    <div className="absolute bottom-1 right-3 bg-white shadow rounded-full px-2 py-1 text-[10px] text-gray-600">
      44 Absent
    </div>

  </div>



  
</div>
    </div>  

    <div className="bg-white rounded-xl border p-4">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-sm font-semibold">Notice Board</h3>
    <button className="text-xs text-blue-600">View All</button>
  </div>

  <div className="space-y-4">
    {/* Item 1 */}
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-xs">
          🗒
        </div>
        <div>
          <p className="text-sm font-medium">
            Online Classes Preparation
          </p>
          <p className="text-xs text-gray-400">
            Added on : 4 Oct 2025
          </p>
        </div>
      </div>
      <span className="text-xs flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
        ⏱ 02 Days
      </span>
    </div>

    {/* Item 2 */}
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-xs">
          📄
        </div>
        <div>
          <p className="text-sm font-medium">
            Exam Time Table Release
          </p>
          <p className="text-xs text-gray-400">
            Added on : 30 Sep 2025
          </p>
        </div>
      </div>
      <span className="text-xs flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
        ⏱ 06 Days
      </span>
    </div>

    {/* Item 3 */}
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xs">
          🔔
        </div>
        <div>
          <p className="text-sm font-medium">
            Exam Preparation Notification!
          </p>
          <p className="text-xs text-gray-400">
            Added on : 23 Sep 2025
          </p>
        </div>
      </div>
      <span className="text-xs flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
        ⏱ 12 Days
      </span>
    </div>

    {/* Item 4 */}
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">
          🌱
        </div>
        <div>
          <p className="text-sm font-medium">
            World Environment Day Program.....!!!
          </p>
          <p className="text-xs text-gray-400">
            Added on : 19 Sep 2025
          </p>
        </div>
      </div>
      <span className="text-xs flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
        ⏱ 15 Days
      </span>
    </div>

    {/* Item 5 */}
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">
          📘
        </div>
        <div>
          <p className="text-sm font-medium">
            New Syllabus Instructions
          </p>
          <p className="text-xs text-gray-400">
            Added on : 16 Sep 2025
          </p>
        </div>
      </div>
      <span className="text-xs flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
        ⏱ 20 Days
      </span>
    </div>
  </div>
</div>

  </div>

  <div className="space-y-6">
   

<div className="bg-white rounded-xl  p-4">
  <h3 className="text-sm font-semibold mb-4">Quick Links</h3>

  <div className="space-y-4">
    {/* Attendance */}
    <div className="bg-yellow-50 rounded-xl py-6 flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-2">
        <img
          src={Container2}
          alt="Attendance"
          className="w-12 h-12"
        />
      </div>
      <p className="text-sm font-medium text-gray-800">
        Attendance
      </p>
    </div>

    {/* Exams */}
    <div className="bg-cyan-50 rounded-xl py-6 flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-2">
        <img
          src={Container}
          alt="Exams"
          className="w-12 h-12"
        />
      </div>
      <p className="text-sm font-medium text-gray-800">
        Exams
      </p>
    </div>

    {/* Reports */}
    <div className="bg-sky-50 rounded-xl py-6 flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-2 border-sky-500 flex items-center justify-center mb-2">
        <img
          src={Container3}
          alt="Reports"
          className="w-12 h-12"
        />
      </div>
      <p className="text-sm font-medium text-gray-800">
        Reports
      </p>
    </div>
  </div>
</div>


    {/* Fees Summary */}
   {/* ================= FEES SUMMARY ================= */}
<div className="space-y-3">

  {/* Total Fees Collected */}
  <div className="bg-white rounded-xl border p-4 flex justify-between items-center">
    <div>
      <p className="text-xs text-gray-400">
        Total Fees Collected
      </p>
      <p className="text-lg font-semibold text-gray-800">
        $25,000.02
      </p>
    </div>

    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
      ↑ 1.2%
    </span>
  </div>

  {/* Fine Collected till date */}
  <div className="bg-white rounded-xl border p-4 flex justify-between items-center">
    <div>
      <p className="text-xs text-gray-400">
        Fine Collected till date
      </p>
      <p className="text-lg font-semibold text-gray-800">
        $4,56,64
      </p>
    </div>

    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
      ↓ 1.5%
    </span>
  </div>

  {/* Student Not Paid */}
  <div className="bg-white rounded-xl border p-4 flex justify-between items-center">
    <div>
      <p className="text-xs text-gray-400">
        Student Not Paid
      </p>
      <p className="text-lg font-semibold text-gray-800">
        545
      </p>
    </div>

    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
      ↑ 1.5%
    </span>
  </div>

  {/* Total Outstanding */}
  <div className="bg-white rounded-xl border p-4 flex justify-between items-center">
    <div>
      <p className="text-xs text-gray-400">
        Total Outstanding
      </p>
      <p className="text-lg font-semibold text-gray-800">
        $4,56,64
      </p>
    </div>

    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
      ↓ 1.5%
    </span>
  </div>

</div>

</div>
</div>
</div>

);
}
