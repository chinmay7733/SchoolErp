import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdKeyboardArrowDown,
  MdApps,
  MdChat,
  MdCall,
  MdCalendarMonth,
  MdEmail,
  MdTask,
  MdNote,
  MdFolder,
  MdPeople,
  MdSchool,
  MdPerson,
  MdGroups,
  MdViewQuilt,
  MdViewCompact,
  MdFormatTextdirectionRToL,
  MdCheckBoxOutlineBlank,
  MdClass,
  MdSchedule,
  MdMeetingRoom,
  MdRepeat,
  MdViewModule,
  MdMenuBook,
  MdBook,
  MdAccessTime,
  MdHomeWork,
  MdQuiz,
  MdAssignment,
  MdEventNote,
  MdGrade,
  MdFactCheck,
  MdRule,
} from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

import logo from "../assets/logo.png";
import school from "../assets/school.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const [openDashboard, setOpenDashboard] = useState(true);
  const [openApps, setOpenApps] = useState(true);
  const [openLayout, setOpenLayout] = useState(false);
  const [openPeople, setOpenPeople] = useState(true);
  const [openStudents, setOpenStudents] = useState(false);
  const [openTeachers, setOpenTeachers] = useState(false);

  const [openAcademic, setOpenAcademic] = useState(true);
  const [openClasses, setOpenClasses] = useState(false);
  const [openExams, setOpenExams] = useState(false);

  const navItem = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm transition ${
      isActive
        ? "bg-blue-100 text-blue-600 font-medium"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  const subItem =
    "flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100";

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b bg-white">
        <button onClick={() => setIsOpen(true)}>
          <HiMenu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <img src={logo} className="h-8 w-8" />
          <span className="font-semibold">PreSkool</span>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:static z-50 top-0 left-0 h-screen w-64 bg-white border-r flex flex-col
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* HEADER */}
        <div className="px-4 py-3 border-b flex items-center gap-3">
          <button className="lg:hidden" onClick={() => setIsOpen(false)}>
            <HiX size={22} />
          </button>
          <img src={logo} className="h-9 w-9" />
          <h1 className="text-lg font-semibold">PreSkool</h1>
        </div>

        {/* SCHOOL */}
        <div className="px-4 py-4">
          <div className="flex items-center border rounded-md px-3 py-2 text-sm font-medium">
            <img src={school} className="h-6 w-6 mr-2" />
            Global International
          </div>
        </div>

        {/* NAV */}
        <nav className="flex-1 overflow-y-auto px-2 space-y-1">

          {/* MAIN */}
          <p className="px-4 pt-2 pb-1 text-xs font-semibold text-gray-400 uppercase">
            Main
          </p>

          {/* DASHBOARD */}
          <button
            onClick={() => setOpenDashboard(!openDashboard)}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <MdDashboard /> Dashboard
            </span>
            <MdKeyboardArrowDown className={`${openDashboard ? "rotate-180" : ""}`} />
          </button>

          {openDashboard && (
            <div className="ml-4 space-y-1">
              <NavLink to="/dashboard/admin" className={navItem}>Admin Dashboard</NavLink>
              <NavLink to="/dashboard/teacher" className={navItem}>Teacher Dashboard</NavLink>
              <NavLink to="/dashboard/student" className={navItem}>Student Dashboard</NavLink>
              <NavLink to="/dashboard/parent" className={navItem}>Parent Dashboard</NavLink>
            </div>
          )}

          {/* APPLICATIONS */}
          <button
            onClick={() => setOpenApps(!openApps)}
            className="flex items-center justify-between w-full px-3 py-2 mt-3 text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <MdApps /> Applications
            </span>
            <MdKeyboardArrowDown className={`${openApps ? "rotate-180" : ""}`} />
          </button>

          {openApps && (
            <div className="ml-6 space-y-1">
              <NavLink to="/applications/chat" className={subItem}><MdChat /> Chat</NavLink>
              <NavLink to="/applications/call" className={subItem}><MdCall /> Call</NavLink>
              <NavLink to="/applications/calendar" className={subItem}><MdCalendarMonth /> Calendar</NavLink>
              <NavLink to="/applications/email" className={subItem}><MdEmail /> Email</NavLink>
              <NavLink to="/applications/todo" className={subItem}><MdTask /> To Do</NavLink>
              <NavLink to="/applications/notes" className={subItem}><MdNote /> Notes</NavLink>
              <NavLink to="/applications/files" className={subItem}><MdFolder /> File Manager</NavLink>
            </div>
          )}

          {/* LAYOUT DIVIDER */}
          <div className="flex items-center px-4 pt-4">
            <div className="flex-grow border-t" />
            <span className="mx-3 text-xs font-semibold text-gray-400">LAYOUT</span>
            <div className="flex-grow border-t" />
          </div>

          {/* LAYOUT */}
          <button
            onClick={() => setOpenLayout(!openLayout)}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <MdViewQuilt /> Layout
            </span>
            <MdKeyboardArrowDown className={`${openLayout ? "rotate-180" : ""}`} />
          </button>

          {openLayout && (
            <div className="ml-6 space-y-1">
              <div className={subItem}><MdViewQuilt /> Default</div>
              <div className={subItem}><MdViewCompact /> Mini</div>
              <div className={subItem}><MdFormatTextdirectionRToL /> RTL</div>
              <div className={subItem}><MdCheckBoxOutlineBlank /> Box</div>
            </div>
          )}

          {/* PEOPLE */}
          <button
            onClick={() => setOpenPeople(!openPeople)}
            className="flex items-center justify-between w-full px-3 py-2 mt-3 text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <MdPeople /> People
            </span>
            <MdKeyboardArrowDown className={`${openPeople ? "rotate-180" : ""}`} />
          </button>

          {openPeople && (
            <div className="ml-4 space-y-1">
              <button onClick={() => setOpenStudents(!openStudents)} className={subItem}>
                <MdSchool /> Students
              </button>

              {openStudents && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/people/students" className={subItem}>All Students</NavLink>
                  <NavLink to="/people/promotion" className={subItem}>Student Promotion</NavLink>
                </div>
              )}

              <NavLink to="/people/parents" className={navItem}><MdPerson /> Parents</NavLink>
              <NavLink to="/people/guardians" className={subItem}><MdGroups /> Guardians</NavLink>

              <button onClick={() => setOpenTeachers(!openTeachers)} className={subItem}>
                <MdPerson /> Teachers
              </button>

              {openTeachers && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/people/teachers" className={subItem}>All Teachers</NavLink>
                  <NavLink to="/people/routine" className={subItem}>Routine</NavLink>
                </div>
              )}
            </div>
          )}


          <button
            onClick={() => setOpenAcademic(!openAcademic)}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <MdSchool /> Academic
            </span>
            <MdKeyboardArrowDown className={`${openAcademic ? "rotate-180" : ""}`} />
          </button>

          {openAcademic && (
            <div className="ml-4 space-y-1">

              <button onClick={() => setOpenClasses(!openClasses)} className={subItem}>
                <MdClass /> Classes
              </button>

              {openClasses && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/academic/classes" className={subItem}>All Classes</NavLink>
                  <NavLink to="/academic/schedule" className={subItem}>Schedule</NavLink>
                </div>
              )}

              <NavLink to="/academic/class-room" className={subItem}><MdMeetingRoom /> Class Room</NavLink>
              <NavLink to="/academic/class-routine" className={subItem}><MdRepeat /> Class Routine</NavLink>
              <NavLink to="/academic/section" className={subItem}><MdViewModule /> Section</NavLink>
              <NavLink to="/academic/subject" className={subItem}><MdMenuBook /> Subject</NavLink>
              <NavLink to="/academic/syllabus" className={subItem}><MdBook /> Syllabus</NavLink>
              <NavLink to="/academic/time-table" className={subItem}><MdAccessTime /> Time Table</NavLink>
              <NavLink to="/academic/home-work" className={subItem}><MdHomeWork /> Home Work</NavLink>

              <button onClick={() => setOpenExams(!openExams)} className={subItem}>
                <MdQuiz /> Examinations
              </button>

              {openExams && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/academic/exam" className={subItem}><MdAssignment /> Exam</NavLink>
                  <NavLink to="/academic/exam-schedule" className={subItem}><MdEventNote /> Exam Schedule</NavLink>
                  <NavLink to="/academic/grade" className={subItem}><MdGrade /> Grade</NavLink>
                  <NavLink to="/academic/exam-attendance" className={subItem}><MdFactCheck /> Exam Attendance</NavLink>
                  <NavLink to="/academic/exam-results" className={subItem}><MdRule /> Exam Results</NavLink>
                </div>
              )}

              <NavLink to="/academic/reasons" className={subItem}><MdRule /> Reasons</NavLink>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}
