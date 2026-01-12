import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import AdminDashboard from "./pages/dashboard/AdminDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import ParentDashboard from "./pages/dashboard/ParentDashboard";
import Applications from "./pages/Applications";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        
        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 bg-gray-100">
          <Routes>
            {/* ✅ ROOT ROUTE (THIS FIXES ERROR) */}
            <Route
              path="/"
              element={<Navigate to="/dashboard/admin" />}
            />

            {/* DASHBOARD ROUTES */}
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/parent" element={<ParentDashboard />} />

            {/* APPLICATION */}
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </main>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
