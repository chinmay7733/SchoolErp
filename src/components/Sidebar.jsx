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
  MdManageAccounts,
  MdPayments,
  MdLibraryBooks,
  MdSportsSoccer,
  MdHotel,
  MdDirectionsBus,
  MdBadge,
  MdApartment,
  MdAssignmentInd,
  MdEventAvailable,
  MdEventBusy,
  MdBeachAccess,
  MdAttachMoney,
  MdAccountBalanceWallet,
  MdReceiptLong,
  MdCategory,
  MdTrendingUp,
  MdDescription,
  MdSwapHoriz
, MdCampaign,
  MdEvent,
  MdAssessment,
  MdSecurity,
  MdDeleteForever 
, MdCardMembership,
  MdExtension,
  MdArticle,
  MdLocationOn,
  MdPublic,
  MdMap,
  MdLocationCity,
  MdReviews,
  MdHelpOutline 
, MdContactMail,
  MdConfirmationNumber,
  MdPersonOutline,  
  MdLockOutline,
  MdLogin,
  MdPersonAdd,
  MdPassword,
  MdMarkEmailRead,
  MdLockClock
, MdErrorOutline,
  MdBugReport,
  MdInsertDriveFile,
  MdTimer,
  MdBuild
, MdSettings,
  MdWeb,
  MdAccountBalance,
  MdStorage,
  MdDashboardCustomize,
  MdNotifications,
  MdUpdate,
  MdLayers,
  MdWidgets,
  MdBarChart,
  MdInsertChart,
  MdInsertEmoticon,
  MdDynamicForm,
  MdTableChart,
  MdChevronRight,


  


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
  const [openManagement, setOpenManagement] = useState(false);
  const [openFees, setOpenFees] = useState(false);
  const [openLibrary, setOpenLibrary] = useState(false);
  const [openHostel, setOpenHostel] = useState(false);
  const [openTransport, setOpenTransport] = useState(false);
  const [openHRM, setOpenHRM] = useState(false);
  const [openAttendance, setOpenAttendance] = useState(false);
  const [openLeaves, setOpenLeaves] = useState(false);
  const [openFinanceAccounts, setOpenFinanceAccounts] = useState(false);
  const [openMembership, setOpenMembership] = useState(false);
  const [openContent, setOpenContent] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openErrors, setOpenErrors] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openGeneralSettings, setOpenGeneralSettings] = useState(false);
  const [openWebsiteSettings, setOpenWebsiteSettings] = useState(false);
  const [openAppSettings, setOpenAppSettings] = useState(false);
  const [openSystemSettings, setOpenSystemSettings] = useState(false);
  const [openAnnouncements, setOpenAnnouncements] = useState(false);
  const [openReports, setOpenReports] = useState(false);
  const [openUserManagement, setOpenUserManagement] = useState(false);
  const [openFinancialSettings, setOpenFinancialSettings] = useState(false);  
  const [openAcademicSettings, setOpenAcademicSettings] = useState(false);
  const [openOtherSettings, setOpenOtherSettings] = useState(false);
 const [openUI, setOpenUI] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [openMultiLevel, setOpenMultiLevel] = useState(false);
  const [openMultiLevel2, setOpenMultiLevel2] = useState(false);
  const [openMultiLevel3, setOpenMultiLevel3] = useState(false);

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
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b bg-white">
        <button onClick={() => setIsOpen(true)}>
          <HiMenu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <img src={logo} className="h-8 w-8" />
          <span className="font-semibold">PreSkool</span>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
      <aside
        className={`fixed lg:static z-50 top-0 left-0 h-screen w-64 bg-white border-r flex flex-col
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <div className="px-4 py-3 border-b flex items-center gap-3">
          <button className="lg:hidden" onClick={() => setIsOpen(false)}>
            <HiX size={22} />
          </button>
          <img src={logo}
          alt="logo"
           className="h-9 w-30" />
          <h1 className="text-lg font-semibold"></h1>
        </div>
        <div className="px-4 py-4">
          <div className="flex items-center border rounded-md px-3 py-2 text-sm font-medium">
            <img src={school}
            alt="school"
            className="h-6 w-6 mr-2" />
            Global International
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 space-y-1">

          <p className="px-4 pt-2 pb-1 text-xs font-semibold text-gray-400 uppercase">
            Main
          </p>
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
          <div className="flex items-center px-4 pt-4">
            <div className="flex-grow border-t" />
            <span className="mx-3 text-xs font-semibold text-gray-400">LAYOUT</span>
            <div className="flex-grow border-t" />
          </div>
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
          <p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
            Management
          </p>

          <button onClick={() => setOpenManagement(!openManagement)}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <MdManageAccounts /> Management
            </span>
            <MdKeyboardArrowDown className={`${openManagement ? "rotate-180" : ""}`} />
          </button>

          {openManagement && (
            <div className="ml-4 space-y-1">
              <button onClick={() => setOpenFees(!openFees)} className={subItem}>
                <MdPayments /> Fees Collection <MdKeyboardArrowDown className="ml-auto" />
              </button>

              {openFees && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/management/fees-group" className={subItem}>Fees Group</NavLink>
                  <NavLink to="/management/fees-type" className={subItem}>Fees Type</NavLink>
                  <NavLink to="/management/fees-master" className={subItem}>Fees Master</NavLink>
                  <NavLink to="/management/fees-assign" className={subItem}>Fees Assign</NavLink>
                  <NavLink to="/management/collect-fees" className={subItem}>Collect Fees</NavLink>
                </div>
              )}
              <button onClick={() => setOpenLibrary(!openLibrary)} className={subItem}>
                <MdLibraryBooks /> Library <MdKeyboardArrowDown className="ml-auto" />
              </button>

              {openLibrary && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/management/library-members" className={subItem}>Library Members</NavLink>
                  <NavLink to="/management/books" className={subItem}>Books</NavLink>
                  <NavLink to="/management/issue-book" className={subItem}>Issue Book</NavLink>
                  <NavLink to="/management/return-book" className={subItem}>Return</NavLink>
                </div>
              )}

              <NavLink to="/management/sports" className={subItem}>
                <MdSportsSoccer /> Sports
              </NavLink>
              <button onClick={() => setOpenHostel(!openHostel)} className={subItem}>
                <MdHotel /> Hostel <MdKeyboardArrowDown className="ml-auto" />
              </button>

              {openHostel && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/management/hostel-list" className={subItem}>Hostel List</NavLink>
                  <NavLink to="/management/hostel-rooms" className={subItem}>Hostel Rooms</NavLink>
                  <NavLink to="/management/room-type" className={subItem}>Room Type</NavLink>
                </div>
              )}
              <button onClick={() => setOpenTransport(!openTransport)} className={subItem}>
                <MdDirectionsBus /> Transport <MdKeyboardArrowDown className="ml-auto" />
              </button>

              {openTransport && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/management/routes" className={subItem}>Routes</NavLink>
                  <NavLink to="/management/pickup-points" className={subItem}>Pickup Points</NavLink>
                  <NavLink to="/management/drivers" className={subItem}>Vehicle Drivers</NavLink>
                  <NavLink to="/management/vehicles" className={subItem}>Vehicles</NavLink>
                  <NavLink to="/management/assign-vehicle" className={subItem}>Assign Vehicle</NavLink>
                </div>
              )}
            </div>
          )}
          <p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
            HRM
          </p>

          <button onClick={() => setOpenHRM(!openHRM)}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <MdBadge /> HRM
            </span>
            <MdKeyboardArrowDown className={`${openHRM ? "rotate-180" : ""}`} />
          </button>

          {openHRM && (
            <div className="ml-4 space-y-1">
              <NavLink to="/hrm/staffs" className={subItem}><MdBadge /> Staffs</NavLink>
              <NavLink to="/hrm/departments" className={subItem}><MdApartment /> Departments</NavLink>
              <NavLink to="/hrm/designation" className={subItem}><MdAssignmentInd /> Designation</NavLink>

              <button onClick={() => setOpenAttendance(!openAttendance)} className={subItem}>
                <MdEventAvailable /> Attendance
              </button>

              {openAttendance && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/hrm/attendance/student" className={subItem}>Student Attendance</NavLink>
                  <NavLink to="/hrm/attendance/teacher" className={subItem}>Teacher Attendance</NavLink>
                  <NavLink to="/hrm/attendance/staff" className={subItem}>Staff Attendance</NavLink>
                </div>
              )}

              <button onClick={() => setOpenLeaves(!openLeaves)} className={subItem}>
                <MdEventBusy /> Leaves
              </button>

              {openLeaves && (
                <div className="ml-6 space-y-1">
                  <NavLink to="/hrm/leaves/list" className={subItem}>List of Leaves</NavLink>
                  <NavLink to="/hrm/leaves/approve" className={subItem}>Approve Request</NavLink>
                </div>
              )}

              <NavLink to="/hrm/holidays" className={subItem}><MdBeachAccess /> Holidays</NavLink>
              <NavLink to="/hrm/payroll" className={subItem}><MdAttachMoney /> Payroll</NavLink>
            </div>
          )}

          <p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  Finance & Accounts
</p>

<button
  onClick={() => setOpenFinanceAccounts(!openFinanceAccounts)}
  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
>
  <span className="flex items-center gap-2">
    <MdAccountBalanceWallet /> Accounts
  </span>
  <MdKeyboardArrowDown
    className={`${openFinanceAccounts ? "rotate-180" : ""}`}
  />
</button>

{openFinanceAccounts && (
  <div className="ml-4 space-y-1">
    <NavLink to="/finance/expenses" className={subItem}>
      <MdReceiptLong /> Expenses
    </NavLink>
    <NavLink to="/finance/expense-category" className={subItem}>
      <MdCategory /> Expense Category
    </NavLink>
    <NavLink to="/finance/income" className={subItem}>
      <MdTrendingUp /> Income
    </NavLink>
    <NavLink to="/finance/invoices" className={subItem}>
      <MdDescription /> Invoices
    </NavLink>
    <NavLink to="/finance/transactions" className={subItem}>
      <MdSwapHoriz /> Transactions
    </NavLink>
  </div>
)}
<p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  Announcements
</p>

<div className="ml-2 space-y-1">
  <NavLink to="/announcements/notice-board" className={subItem}>
    <MdCampaign /> Notice Board
  </NavLink>

  <NavLink to="/announcements/events" className={subItem}>
    <MdEvent /> Events
  </NavLink>
</div>
<p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  Reports
</p>

<div className="ml-2 space-y-1">
  <NavLink to="/reports/attendance" className={subItem}>
    <MdAssessment /> Attendance Report
  </NavLink>
  <NavLink to="/reports/class" className={subItem}>
    <MdSchool /> Class Report
  </NavLink>
  <NavLink to="/reports/student" className={subItem}>
    <MdPerson /> Student Report
  </NavLink>
  <NavLink to="/reports/grade" className={subItem}>
    <MdGrade /> Grade Report
  </NavLink>
  <NavLink to="/reports/leave" className={subItem}>
    <MdEventNote /> Leave Report
  </NavLink>
  <NavLink to="/reports/fees" className={subItem}>
    <MdPayments /> Fees Report
  </NavLink>
</div>
<p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  User Management
</p>

<div className="ml-2 space-y-1">
  <NavLink to="/users" className={subItem}>
    <MdManageAccounts /> Users
  </NavLink>
  <NavLink to="/roles-permissions" className={subItem}>
    <MdSecurity /> Roles & Permissions
  </NavLink>
  <NavLink to="/delete-account-request" className={subItem}>
    <MdDeleteForever /> Delete Account Request
  </NavLink>
</div>
      <p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  Membership
</p>

<button
  onClick={() => setOpenMembership(!openMembership)}
  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
>
  <span className="flex items-center gap-2">
    <MdCardMembership /> Membership
  </span>
  <MdKeyboardArrowDown
    className={`${openMembership ? "rotate-180" : ""}`}
  />
</button>

{openMembership && (
  <div className="ml-4 space-y-1">
    <NavLink to="/membership/plans" className={subItem}>
      <MdCardMembership /> Membership Plans
    </NavLink>
    <NavLink to="/membership/addons" className={subItem}>
      <MdExtension /> Membership Addons
    </NavLink>
    <NavLink to="/membership/transactions" className={subItem}>
      <MdSwapHoriz /> Transactions
    </NavLink>
  </div>
)}
<p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  Content
</p>

<button
  onClick={() => setOpenContent(!openContent)}
  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
>
  <span className="flex items-center gap-2">
    <MdDescription /> Content
  </span>
  <MdKeyboardArrowDown
    className={`${openContent ? "rotate-180" : ""}`}
  />
</button>

{openContent && (
  <div className="ml-4 space-y-1">

    <NavLink to="/content/pages" className={subItem}>
      <MdDescription /> Pages
    </NavLink>

    {/* BLOG */}
    <button
      onClick={() => setOpenBlog(!openBlog)}
      className={subItem}
    >
      <MdArticle /> Blog
      <MdKeyboardArrowDown className="ml-auto" />
    </button>

    {openBlog && (
      <div className="ml-6 space-y-1">
        <NavLink to="/content/blogs" className={subItem}>All Blogs</NavLink>
        <NavLink to="/content/categories" className={subItem}>Categories</NavLink>
        <NavLink to="/content/comments" className={subItem}>Comments</NavLink>
        <NavLink to="/content/tags" className={subItem}>Tags</NavLink>
      </div>
    )}

    {/* LOCATION */}
    <button
      onClick={() => setOpenLocation(!openLocation)}
      className={subItem}
    >
      <MdLocationOn /> Location
      <MdKeyboardArrowDown className="ml-auto" />
    </button>

    {openLocation && (
      <div className="ml-6 space-y-1">
        <NavLink to="/content/countries" className={subItem}>
          <MdPublic /> Countries
        </NavLink>
        <NavLink to="/content/states" className={subItem}>
          <MdMap /> States
        </NavLink>
        <NavLink to="/content/cities" className={subItem}>
          <MdLocationCity /> Cities
        </NavLink>
      </div>
    )}

    <NavLink to="/content/testimonials" className={subItem}>
      <MdReviews /> Testimonials
    </NavLink>

    <NavLink to="/content/faq" className={subItem}>
      <MdHelpOutline /> FAQ
    </NavLink>
  </div>
)}
<p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  Support
</p>

<div className="ml-2 space-y-1">
  <NavLink to="/support/contact-messages" className={subItem}>
    <MdContactMail /> Contact Messages
  </NavLink>

  <NavLink to="/support/tickets" className={subItem}>
    <MdConfirmationNumber /> Tickets
  </NavLink>
</div>
<p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  Support
</p>

<NavLink to="/profile" className={subItem}>
  <MdPersonOutline /> Profile
</NavLink>

<button
  onClick={() => setOpenAuth(!openAuth)}
  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
>
  <span className="flex items-center gap-2">
    <MdLockOutline /> Authentication
  </span>
  <MdKeyboardArrowDown
    className={`${openAuth ? "rotate-180" : ""}`}
  />
</button>

{openAuth && (
  <div className="ml-6 space-y-1">
    <NavLink to="/auth/login" className={subItem}>
      <MdLogin /> Login
    </NavLink>
    <NavLink to="/auth/register" className={subItem}>
      <MdPersonAdd /> Register
    </NavLink>
    <NavLink to="/auth/forgot-password" className={subItem}>
      <MdPassword /> Forgot Password
    </NavLink>
    <NavLink to="/auth/reset-password" className={subItem}>
      <MdPassword /> Reset Password
    </NavLink>
    <NavLink to="/auth/email-verification" className={subItem}>
      <MdMarkEmailRead /> Email Verification
    </NavLink>
    <NavLink to="/auth/lock-screen" className={subItem}>
      <MdLockClock /> Lock Screen
    </NavLink>
  </div>
)}
<button
  onClick={() => setOpenErrors(!openErrors)}
  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
>
  <span className="flex items-center gap-2">
    <MdErrorOutline /> Error Pages
  </span>
  <MdKeyboardArrowDown
    className={`${openErrors ? "rotate-180" : ""}`}
  />
</button>

{openErrors && (
  <div className="ml-6 space-y-1">
    <NavLink to="/error/404" className={subItem}>
      <MdBugReport /> 404 Error
    </NavLink>
    <NavLink to="/error/500" className={subItem}>
      <MdBugReport /> 500 Error
    </NavLink>
  </div>
)}

<div className="ml-2 space-y-1">
  <NavLink to="/blank-page" className={subItem}>
    <MdInsertDriveFile /> Blank Page
  </NavLink>
  <NavLink to="/coming-soon" className={subItem}>
    <MdTimer /> Coming Soon
  </NavLink>
  <NavLink to="/maintenance" className={subItem}>
    <MdBuild /> Under Maintenance
  </NavLink>
</div>

<p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  Settings
</p>

<button
  onClick={() => setOpenSettings(!openSettings)}
  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
>
  <span className="flex items-center gap-2">
    <MdSettings /> Settings
  </span>
  <MdKeyboardArrowDown
    className={`${openSettings ? "rotate-180" : ""}`}
  />
</button>
{openSettings && (
  <div className="ml-4 space-y-1">

    {/* GENERAL SETTINGS */}
    <button
      onClick={() => setOpenGeneralSettings(!openGeneralSettings)}
      className={subItem}
    >
      <MdPerson /> General Settings
      <MdKeyboardArrowDown className="ml-auto" />
    </button>

    {openGeneralSettings && (
      <div className="ml-6 space-y-1">
        <NavLink to="/settings/profile" className={subItem}>Profile Settings</NavLink>
        <NavLink to="/settings/security" className={subItem}>Security Settings</NavLink>
        <NavLink to="/settings/notifications" className={subItem}>Notifications</NavLink>
        <NavLink to="/settings/devices" className={subItem}>Connected Apps</NavLink>
      </div>
    )}

    {/* WEBSITE SETTINGS */}
    <button
      onClick={() => setOpenWebsiteSettings(!openWebsiteSettings)}
      className={subItem}
    >
      <MdWeb /> Website Settings
      <MdKeyboardArrowDown className="ml-auto" />
    </button>

    {openWebsiteSettings && (
      <div className="ml-6 space-y-1">
        <NavLink to="/settings/company" className={subItem}>Company Settings</NavLink>
        <NavLink to="/settings/localization" className={subItem}>Localization</NavLink>
        <NavLink to="/settings/prefixes" className={subItem}>Prefixes</NavLink>
        <NavLink to="/settings/preferences" className={subItem}>Preferences</NavLink>
        <NavLink to="/settings/social-auth" className={subItem}>Social Authentication</NavLink>
        <NavLink to="/settings/language" className={subItem}>Language</NavLink>
      </div>
    )}

    {/* APP SETTINGS */}
    <button
      onClick={() => setOpenAppSettings(!openAppSettings)}
      className={subItem}
    >
      <MdApps /> App Settings
      <MdKeyboardArrowDown className="ml-auto" />
    </button>

    {openAppSettings && (
      <div className="ml-6 space-y-1">
        <NavLink to="/settings/invoice" className={subItem}>Invoice Settings</NavLink>
        <NavLink to="/settings/custom-fields" className={subItem}>Custom Fields</NavLink>
      </div>
    )}

    <button
      onClick={() => setOpenSystemSettings(!openSystemSettings)}
      className={subItem}
    >
      <MdEmail /> System Settings
      <MdKeyboardArrowDown className="ml-auto" />
    </button>

    {openSystemSettings && (
      <div className="ml-6 space-y-1">
        <NavLink to="/settings/email" className={subItem}>Email Settings</NavLink>
        <NavLink to="/settings/email-templates" className={subItem}>Email Templates</NavLink>
        <NavLink to="/settings/sms" className={subItem}>SMS Settings</NavLink>
        <NavLink to="/settings/otp" className={subItem}>OTP</NavLink>
        <NavLink to="/settings/gdpr" className={subItem}>GDPR Cookies</NavLink>
      </div>
    )}

    <button
      onClick={() => setOpenFinancialSettings(!openFinancialSettings)}
      className={subItem}
    >
      <MdAccountBalance /> Financial Settings
      <MdKeyboardArrowDown className="ml-auto" />
    </button>

    {openFinancialSettings && (
      <div className="ml-6 space-y-1">
        <NavLink to="/settings/payment-gateway" className={subItem}>Payment Gateway</NavLink>
        <NavLink to="/settings/tax-rates" className={subItem}>Tax Rates</NavLink>
      </div>
    )}
    <button
      onClick={() => setOpenAcademicSettings(!openAcademicSettings)}
      className={subItem}
    >
      <MdSchool /> Academic Settings
      <MdKeyboardArrowDown className="ml-auto" />
    </button>

    {openAcademicSettings && (
      <div className="ml-6 space-y-1">
        <NavLink to="/settings/school" className={subItem}>School Settings</NavLink>
        <NavLink to="/settings/religion" className={subItem}>Religion</NavLink>
      </div>
    )}
    <button
      onClick={() => setOpenOtherSettings(!openOtherSettings)}
      className={subItem}
    >
      <MdStorage /> Other Settings
      <MdKeyboardArrowDown className="ml-auto" />
    </button>

    {openOtherSettings && (
      <div className="ml-6 space-y-1">
        <NavLink to="/settings/storage" className={subItem}>Storage</NavLink>
        <NavLink to="/settings/ip-ban" className={subItem}>Ban IP Address</NavLink>
      </div>
    )}

  </div>
)}
<p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  UI Interface
</p>

<button
  onClick={() => setOpenUI(!openUI)}
  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
>
  <span className="flex items-center gap-2">
    <MdDashboardCustomize /> UI Interface
  </span>
  <MdKeyboardArrowDown className={`${openUI ? "rotate-180" : ""}`} />
</button>

{openUI && (
  <div className="ml-4 space-y-1">
    <NavLink to="/ui/base-ui" className={subItem}>
      <MdWidgets /> Base UI
    </NavLink>
    <NavLink to="/ui/advanced-ui" className={subItem}>
      <MdDashboardCustomize /> Advanced UI
    </NavLink>
    <NavLink to="/ui/charts" className={subItem}>
      <MdBarChart /> Charts
    </NavLink>
    <NavLink to="/ui/icons" className={subItem}>
      <MdInsertEmoticon /> Icons
    </NavLink>
    <NavLink to="/ui/forms" className={subItem}>
      <MdDynamicForm /> Forms
    </NavLink>
    <NavLink to="/ui/tables" className={subItem}>
      <MdTableChart /> Tables
    </NavLink>
  </div>
)}
<p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
  Help
</p>

<div className="ml-2 space-y-1">
  <NavLink to="/help/documentation" className={subItem}>
    <MdDescription /> Documentation
  </NavLink>

  <NavLink to="/help/changelog" className={subItem}>
    <MdUpdate /> Changelog
  </NavLink>
</div>
<button
  onClick={() => setOpenMultiLevel(!openMultiLevel)}
  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold"
>
  <span className="flex items-center gap-2">
    <MdLayers /> Multi Level
  </span>
  <MdKeyboardArrowDown className={`${openMultiLevel ? "rotate-180" : ""}`} />
</button>

{openMultiLevel && (
  <div className="ml-4 space-y-1">

    <NavLink to="/multilevel/1" className={subItem}>
      <MdChevronRight /> Multilevel 1
    </NavLink>

    <button
      onClick={() => setOpenMultiLevel2(!openMultiLevel2)}
      className={subItem}
    >
      <MdChevronRight /> Multilevel 2
    </button>

    {openMultiLevel2 && (
      <div className="ml-6 space-y-1">
        <NavLink to="/multilevel/2-1" className={subItem}>Multilevel 2.1</NavLink>
        <NavLink to="/multilevel/2-2" className={subItem}>Multilevel 2.2</NavLink>
        <NavLink to="/multilevel/2-2-1" className={subItem}>Multilevel 2.2.1</NavLink>
        <NavLink to="/multilevel/2-2-2" className={subItem}>Multilevel 2.2.2</NavLink>
      </div>
    )}

    <NavLink to="/multilevel/3" className={subItem}>
      <MdChevronRight /> Multilevel 3
    </NavLink>
  </div>
)}  
        </nav>
      </aside>
    </>
  );
}
