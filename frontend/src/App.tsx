
// import "./App.css";
// import { useEffect, useState } from "react";
// import Login from "./components/Login";
// import { api } from "./api/client";

// function App() {
//   const [token, setToken] = useState(
//   () => localStorage.getItem("accessToken")
// );

// if (!token) {
//   return <Login onLogin={setToken} />;
// }
//   return (
//     <div className="app">
//       <aside className="sidebar">
//         <h2>AttendEase</h2>
//         <p className="sidebar-label">WORKSPACE</p>

//         <nav>
//           <a className="active" href="#dashboard">Dashboard</a>
//           <a href="#history">Attendance History</a>
//           <a href="#corrections">Correction Requests</a>
//           <a href="#reports">Reports</a>
//         </nav>

//         <div className="sidebar-bottom">
//           <p>Attendance Management</p>
//           <small>Version 1.0</small>
//         </div>
//       </aside>

//       <main className="main-content" id="dashboard">
//         <header className="topbar">
//           <div>
//             <p className="eyebrow">EMPLOYEE WORKSPACE</p>
//             <h1>Attendance Dashboard</h1>
//           </div>

//           <div className="profile">
//             <div className="avatar">E</div>
//             <div>
//               <strong>Employee</strong>
//               <p>Team Member</p>
//             </div>
//           </div>
//         </header>

//         <section className="welcome">
//           <div>
//             <p>YOUR DAILY OVERVIEW</p>
//             <h2>Welcome to your workspace</h2>
//             <span>Manage your working hours and attendance.</span>
//           </div>
//           <div className="date">
//             {new Date().toLocaleDateString("en-GB", {
//               day: "2-digit",
//               month: "short",
//               year: "numeric",
//             })}
//           </div>
//         </section>

//         <section className="stats">
//           <article className="stat-card">
//             <span>Today's Status</span>
//             <h2>Not Clocked In</h2>
//             <small>Waiting for attendance action</small>
//           </article>

//           <article className="stat-card">
//             <span>Clock In</span>
//             <h2>--:--</h2>
//             <small>Today's recorded start time</small>
//           </article>

//           <article className="stat-card">
//             <span>Worked Hours</span>
//             <h2>00:00</h2>
//             <small>Net working duration</small>
//           </article>

//           <article className="stat-card">
//             <span>Break Duration</span>
//             <h2>00:00</h2>
//             <small>Today's break time</small>
//           </article>
//         </section>

//         <section className="content-grid">
//           <article className="panel">
//             <h3>Attendance Actions</h3>
//             <p className="muted">
//               Your attendance actions will be connected to the backend next.
//             </p>

//             <div className="actions">
//               <button className="primary" disabled>
//                 Clock In
//               </button>
//               <button disabled>Start Break</button>
//               <button disabled>End Break</button>
//               <button className="danger" disabled>
//                 Clock Out
//               </button>
//             </div>

//             <p className="notice">
//               Demo interface: attendance is not being recorded yet.
//             </p>
//           </article>

//           <article className="panel">
//             <h3>Today's Schedule</h3>
//             <div className="schedule-row">
//               <span>Shift Start</span>
//               <strong>08:30 AM</strong>
//             </div>
//             <div className="schedule-row">
//               <span>Shift End</span>
//               <strong>05:00 PM</strong>
//             </div>
//             <div className="schedule-row">
//               <span>Expected Hours</span>
//               <strong>8 hours</strong>
//             </div>
//             <p className="muted">
//               Example schedule. Actual shifts will come from the database.
//             </p>
//           </article>
//         </section>

//         <section className="panel history-panel" id="history">
//           <h3>Recent Attendance</h3>
//           <div className="empty-state">
//             <div className="empty-icon">◷</div>
//             <strong>No attendance records yet</strong>
//             <p>Records will appear here after connecting the API.</p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;


// import "./App.css";
// import { useCallback, useEffect, useState } from "react";
// import Login from "./components/Login";
// import { api } from "./api/client";

// type AttendanceSession = {
//   id: string;
//   employeeId: string;
//   clockInAt: string;
//   clockOutAt: string | null;
//   grossMinutes: number | null;
//   breakMinutes: number;
//   netMinutes: number | null;
//   status: "IN_PROGRESS" | "COMPLETED" | "INCOMPLETE";
// };

// function formatSriLankaTime(timestamp: string | null) {
//   if (!timestamp) return "--:--";

//   return new Intl.DateTimeFormat("en-LK", {
//     timeZone: "Asia/Colombo",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   }).format(new Date(timestamp));
// }

// function formatDuration(minutes: number | null) {
//   if (minutes === null) return "00:00";

//   const hours = Math.floor(minutes / 60);
//   const remainingMinutes = minutes % 60;

//   return `${String(hours).padStart(2, "0")}:${String(
//     remainingMinutes,
//   ).padStart(2, "0")}`;
// }

// function App() {
//   const [token, setToken] = useState(
//     () => localStorage.getItem("accessToken"),
//   );
//   const [attendance, setAttendance] = useState<AttendanceSession[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [actionLoading, setActionLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const loadAttendance = useCallback(async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await api.get<AttendanceSession[]>(
//         "/attendance/history",
//       );
//       setAttendance(response.data);
//     } catch (err) {
//       console.error("Failed to load attendance:", err);
//       setError("Could not load attendance. Please sign in again if needed.");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (token) {
//       void loadAttendance();
//     }
//   }, [token, loadAttendance]);

//   if (!token) {
//     return <Login onLogin={setToken} />;
//   }

//   const today = new Intl.DateTimeFormat("en-CA", {
//     timeZone: "Asia/Colombo",
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }).format(new Date());

//   const todaySessions = attendance.filter((session) => {
//     const sessionDate = new Intl.DateTimeFormat("en-CA", {
//       timeZone: "Asia/Colombo",
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }).format(new Date(session.clockInAt));

//     return sessionDate === today;
//   });

//   const activeSession = todaySessions.find(
//     (session) =>
//       session.status === "IN_PROGRESS" && session.clockOutAt === null,
//   );

//   const latestSession = todaySessions[0];

//   async function handleAttendanceAction(action: "clock-in" | "clock-out") {
//     setActionLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       await api.post(`/attendance/${action}`);
//       setMessage(
//         action === "clock-in"
//           ? "Clock-in recorded successfully."
//           : "Clock-out recorded successfully.",
//       );
//       await loadAttendance();
//     } catch (err: any) {
//       console.error("Attendance action failed:", err.response?.data ?? err);
//       setError(
//         err.response?.data?.message ??
//           "Attendance action failed. Please try again.",
//       );
//     } finally {
//       setActionLoading(false);
//     }
//   }

//   const workedMinutes = activeSession
//     ? Math.max(
//         0,
//         Math.floor(
//           (Date.now() - new Date(activeSession.clockInAt).getTime()) / 60000,
//         ) - (activeSession.breakMinutes ?? 0),
//       )
//     : (latestSession?.netMinutes ?? 0);

//   return (
//     <div className="app">
//       <aside className="sidebar">
//         <h2>AttendEase</h2>
//         <p className="sidebar-label">WORKSPACE</p>

//         <nav>
//           <a className="active" href="#dashboard">Dashboard</a>
//           <a href="#history">Attendance History</a>
//           <a href="#corrections">Correction Requests</a>
//           <a href="#reports">Reports</a>
//         </nav>

//         <div className="sidebar-bottom">
//           <p>Attendance Management</p>
//           <small>Version 1.0</small>
//         </div>
//       </aside>

//       <main className="main-content" id="dashboard">
//         <header className="topbar">
//           <div>
//             <p className="eyebrow">EMPLOYEE WORKSPACE</p>
//             <h1>Attendance Dashboard</h1>
//           </div>

//           <div className="profile">
//             <div className="avatar">E</div>
//             <div>
//               <strong>Employee</strong>
//               <p>Team Member</p>
//             </div>
//             <button
//               onClick={() => {
//                 localStorage.removeItem("accessToken");
//                 setToken(null);
//                 setAttendance([]);
//               }}
//             >
//               Log Out
//             </button>
//           </div>
//         </header>

//         <section className="welcome">
//           <div>
//             <p>YOUR DAILY OVERVIEW</p>
//             <h2>Welcome to your workspace</h2>
//             <span>Manage your working hours and attendance.</span>
//           </div>
//           <div className="date">
//             {new Intl.DateTimeFormat("en-LK", {
//               timeZone: "Asia/Colombo",
//               day: "2-digit",
//               month: "short",
//               year: "numeric",
//             }).format(new Date())}
//           </div>
//         </section>

//         {error && <p className="notice">{error}</p>}
//         {message && <p className="notice">{message}</p>}

//         <section className="stats">
//           <article className="stat-card">
//             <span>Today's Status</span>
//             <h2>
//               {activeSession
//                 ? "Clocked In"
//                 : latestSession?.status === "COMPLETED"
//                   ? "Completed"
//                   : "Not Clocked In"}
//             </h2>
//             <small>
//               {loading ? "Loading attendance..." : "Sri Lanka local time"}
//             </small>
//           </article>

//           <article className="stat-card">
//             <span>Clock In</span>
//             <h2>
//               {latestSession
//                 ? formatSriLankaTime(latestSession.clockInAt)
//                 : "--:--"}
//             </h2>
//             <small>Today's recorded start time</small>
//           </article>

//           <article className="stat-card">
//             <span>Worked Hours</span>
//             <h2>{formatDuration(workedMinutes)}</h2>
//             <small>Working duration (HH:MM)</small>
//           </article>

//           <article className="stat-card">
//             <span>Break Duration</span>
//             <h2>
//               {formatDuration(
//                 activeSession?.breakMinutes ??
//                   latestSession?.breakMinutes ??
//                   0,
//               )}
//             </h2>
//             <small>Recorded break time</small>
//           </article>
//         </section>

//         <section className="content-grid">
//           <article className="panel">
//             <h3>Attendance Actions</h3>
//             <p className="muted">
//               Record your attendance using the connected backend.
//             </p>

//             <div className="actions">
//               <button
//                 className="primary"
//                 disabled={actionLoading || loading || !!activeSession}
//                 onClick={() => void handleAttendanceAction("clock-in")}
//               >
//                 {actionLoading ? "Please wait..." : "Clock In"}
//               </button>

//               <button
//                 className="danger"
//                 disabled={actionLoading || loading || !activeSession}
//                 onClick={() => void handleAttendanceAction("clock-out")}
//               >
//                 {actionLoading ? "Please wait..." : "Clock Out"}
//               </button>
//             </div>

//             <p className="notice">
//               {activeSession
//                 ? "You are currently clocked in."
//                 : "Clock in to start recording your work time."}
//             </p>
//           </article>

//           <article className="panel">
//             <h3>Today's Schedule</h3>
//             <div className="schedule-row">
//               <span>Shift Start</span>
//               <strong>08:30 AM</strong>
//             </div>
//             <div className="schedule-row">
//               <span>Shift End</span>
//               <strong>05:00 PM</strong>
//             </div>
//             <div className="schedule-row">
//               <span>Expected Hours</span>
//               <strong>8 hours</strong>
//             </div>
//             <p className="muted">
//               Example schedule. Actual shifts will come from the database.
//             </p>
//           </article>
//         </section>

//         <section className="panel history-panel" id="history">
//           <h3>Recent Attendance</h3>

//           {loading ? (
//             <p className="muted">Loading attendance records...</p>
//           ) : attendance.length === 0 ? (
//             <div className="empty-state">
//               <div className="empty-icon">◷</div>
//               <strong>No attendance records yet</strong>
//               <p>Clock in to create your first record.</p>
//             </div>
//           ) : (
//             <div>
//               {attendance.map((session) => (
//                 <div className="schedule-row" key={session.id}>
//                   <span>
//                     {new Intl.DateTimeFormat("en-LK", {
//                       timeZone: "Asia/Colombo",
//                       day: "2-digit",
//                       month: "short",
//                       year: "numeric",
//                     }).format(new Date(session.clockInAt))}
//                     <br />
//                     <small>
//                       {formatSriLankaTime(session.clockInAt)} –{" "}
//                       {formatSriLankaTime(session.clockOutAt)}
//                     </small>
//                   </span>

//                   <strong>
//                     {session.status === "IN_PROGRESS"
//                       ? "In Progress"
//                       : session.status === "COMPLETED"
//                         ? formatDuration(session.netMinutes)
//                         : "Incomplete"}
//                   </strong>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;



// import "./App.css";
// import { useCallback, useEffect, useState } from "react";
// import Login from "./components/Login";
// import { api } from "./api/client";




// type BreakRecord = {
//   id: string;
//   startedAt: string;
//   endedAt: string | null;
//   breakType: "PAID" | "UNPAID";
// };

// type AttendanceSession = {
//   id: string;
//   employeeId: string;
//   clockInAt: string;
//   clockOutAt: string | null;
//   grossMinutes: number | null;
//   breakMinutes: number;
//   netMinutes: number | null;
//   status: "IN_PROGRESS" | "COMPLETED" | "INCOMPLETE";
//   breaks?: BreakRecord[];
// };


// type Page = "dashboard" | "history" | "corrections" | "reports";

// function formatSriLankaTime(timestamp: string | null) {
//   if (!timestamp) return "--:--";

//   return new Intl.DateTimeFormat("en-LK", {
//     timeZone: "Asia/Colombo",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   }).format(new Date(timestamp));
// }

// function formatSriLankaDate(timestamp: string) {
//   return new Intl.DateTimeFormat("en-LK", {
//     timeZone: "Asia/Colombo",
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   }).format(new Date(timestamp));
// }

// function formatDuration(minutes: number | null) {
//   if (minutes === null) return "00:00";

//   const hours = Math.floor(minutes / 60);
//   const remainingMinutes = minutes % 60;

//   return `${String(hours).padStart(2, "0")}:${String(
//     remainingMinutes,
//   ).padStart(2, "0")}`;
// }

// function App() {
//   const [token, setToken] = useState<string | null>(
//     () => localStorage.getItem("accessToken"),
//   );
//   const [currentPage, setCurrentPage] = useState<Page>("dashboard");
//   const [attendance, setAttendance] = useState<AttendanceSession[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [actionLoading, setActionLoading] = useState(false);
//   const [breakLoading, setBreakLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const loadAttendance = useCallback(async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await api.get<AttendanceSession[]>(
//         "/attendance/history",
//       );

//       setAttendance(response.data);
//     } catch (err) {
//       console.error("Failed to load attendance:", err);
//       setError("Could not load attendance records. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (token) {
//       void loadAttendance();
//     }
//   }, [token, loadAttendance]);

//   if (!token) {
//     return <Login onLogin={setToken} />;
//   }

//   const today = new Intl.DateTimeFormat("en-CA", {
//     timeZone: "Asia/Colombo",
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }).format(new Date());

//   const todaySessions = attendance.filter((session) => {
//     const sessionDate = new Intl.DateTimeFormat("en-CA", {
//       timeZone: "Asia/Colombo",
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }).format(new Date(session.clockInAt));

//     return sessionDate === today;
//   });

//   const activeSession = todaySessions.find(
//     (session) =>
//       session.status === "IN_PROGRESS" && session.clockOutAt === null,
//   );

//   const latestSession = todaySessions[0];

//   const workedMinutes = activeSession
//     ? Math.max(
//         0,
//         Math.floor(
//           (Date.now() - new Date(activeSession.clockInAt).getTime()) / 60000,
//         ) - (activeSession.breakMinutes ?? 0),
//       )
//     : (latestSession?.netMinutes ?? 0);

//   async function handleAttendanceAction(
//     action: "clock-in" | "clock-out",
//   ) {
//     setActionLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       await api.post(`/attendance/${action}`);

//       setMessage(
//         action === "clock-in"
//           ? "Clock-in recorded successfully."
//           : "Clock-out recorded successfully.",
//       );

//       await loadAttendance();
//     } catch (err: unknown) {
//       console.error("Attendance action failed:", err);

//       if (
//         typeof err === "object" &&
//         err !== null &&
//         "isAxiosError" in err
//       ) {
//         const axiosError = err as {
//           response?: { data?: { message?: string | string[] } };
//         };

//         const serverMessage = axiosError.response?.data?.message;

//         setError(
//           Array.isArray(serverMessage)
//             ? serverMessage.join(", ")
//             : serverMessage ?? "Attendance action failed. Please try again.",
//         );
//       } else {
//         setError("Attendance action failed. Please try again.");
//       }
//     } finally {
//       setActionLoading(false);
//     }
//   }

  
// async function handleBreakAction(action: "start" | "end") {
//   setBreakLoading(true);
//   setError("");
//   setMessage("");

//   try {
//     if (action === "start") {
//       await api.post("/attendance/break/start", {
//         breakType: "UNPAID",
//       });
//       setMessage("Break started successfully.");
//     } else {
//       await api.post("/attendance/break/end");
//       setMessage("Break ended successfully.");
//     }

//     await loadAttendance();
//   } catch (err: unknown) {
//     console.error("Break action failed:", err);

//     if (
//       typeof err === "object" &&
//       err !== null &&
//       "isAxiosError" in err
//     ) {
//       const axiosError = err as {
//         response?: { data?: { message?: string | string[] } };
//       };

//       const serverMessage = axiosError.response?.data?.message;

//       setError(
//         Array.isArray(serverMessage)
//           ? serverMessage.join(", ")
//           : serverMessage ?? "Break action failed. Please try again.",
//       );
//     } else {
//       setError("Break action failed. Please try again.");
//     }
//   } finally {
//     setBreakLoading(false);
//   }
// }

//   function handleLogout() {
//     localStorage.removeItem("accessToken");
//     setToken(null);
//     setAttendance([]);
//     setCurrentPage("dashboard");
//     setMessage("");
//     setError("");
//   }

//   return (
//     <div className="app">
//       <aside className="sidebar">
//         <h2>AttendEase</h2>
//         <p className="sidebar-label">WORKSPACE</p>

//         <nav>
//           <a
//             href="#dashboard"
//             className={currentPage === "dashboard" ? "active" : ""}
//             onClick={(event) => {
//               event.preventDefault();
//               setCurrentPage("dashboard");
//               setError("");
//               setMessage("");
//             }}
//           >
//             Dashboard
//           </a>

//           <a
//             href="#history"
//             className={currentPage === "history" ? "active" : ""}
//             onClick={(event) => {
//               event.preventDefault();
//               setCurrentPage("history");
//               setError("");
//               setMessage("");
//             }}
//           >
//             Attendance History
//           </a>

//           <a
//             href="#corrections"
//             className={currentPage === "corrections" ? "active" : ""}
//             onClick={(event) => {
//               event.preventDefault();
//               setCurrentPage("corrections");
//               setError("");
//               setMessage("");
//             }}
//           >
//             Correction Requests
//           </a>

//           <a
//             href="#reports"
//             className={currentPage === "reports" ? "active" : ""}
//             onClick={(event) => {
//               event.preventDefault();
//               setCurrentPage("reports");
//               setError("");
//               setMessage("");
//             }}
//           >
//             Reports
//           </a>
//         </nav>

//         <div className="sidebar-bottom">
//           <p>Attendance Management</p>
//           <small>Version 1.0</small>
//         </div>
//       </aside>

//       <main className="main-content">
//         <header className="topbar">
//           <div>
//             <p className="eyebrow">EMPLOYEE WORKSPACE</p>
//             <h1>
//               {currentPage === "dashboard" && "Attendance Dashboard"}
//               {currentPage === "history" && "Attendance History"}
//               {currentPage === "corrections" && "Correction Requests"}
//               {currentPage === "reports" && "Attendance Reports"}
//             </h1>
//           </div>

//           <div className="profile">
//             <div className="avatar">E</div>
//             <div>
//               <strong>Employee</strong>
//               <p>Team Member</p>
//             </div>
//             <button type="button" onClick={handleLogout}>
//               Log Out
//             </button>
//           </div>
//         </header>

//         {error && <p className="notice">{error}</p>}
//         {message && <p className="notice">{message}</p>}

//         {currentPage === "dashboard" && (
//           <>
//             <section className="welcome">
//               <div>
//                 <p>YOUR DAILY OVERVIEW</p>
//                 <h2>Welcome to your workspace</h2>
//                 <span>
//                   Manage your working hours and attendance.
//                 </span>
//               </div>

//               <div className="date">
//                 {new Intl.DateTimeFormat("en-LK", {
//                   timeZone: "Asia/Colombo",
//                   day: "2-digit",
//                   month: "short",
//                   year: "numeric",
//                 }).format(new Date())}
//               </div>
//             </section>

//             <section className="stats">
//               <article className="stat-card">
//                 <span>Today's Status</span>
//                 <h2>
//                   {activeSession
//                     ? "Clocked In"
//                     : latestSession?.status === "COMPLETED"
//                       ? "Completed"
//                       : "Not Clocked In"}
//                 </h2>
//                 <small>
//                   {loading ? "Loading attendance..." : "Sri Lanka local time"}
//                 </small>
//               </article>

//               <article className="stat-card">
//                 <span>Clock In</span>
//                 <h2>
//                   {latestSession
//                     ? formatSriLankaTime(latestSession.clockInAt)
//                     : "--:--"}
//                 </h2>
//                 <small>Today's recorded start time</small>
//               </article>

//               <article className="stat-card">
//                 <span>Worked Hours</span>
//                 <h2>{formatDuration(workedMinutes)}</h2>
//                 <small>Working duration (HH:MM)</small>
//               </article>

//               <article className="stat-card">
//                 <span>Break Duration</span>
//                 <h2>
//                   {formatDuration(
//                     activeSession?.breakMinutes ??
//                       latestSession?.breakMinutes ??
//                       0,
//                   )}
//                 </h2>
//                 <small>Recorded break time</small>
//               </article>
//             </section>

//             <section className="content-grid">
//               <article className="panel">
//                 <h3>Attendance Actions</h3>
//                 <p className="muted">
//                   Record your attendance using the connected backend.
//                 </p>

//                 <div className="actions">
//                   <button
//                     type="button"
//                     className="primary"
//                     disabled={
//                       actionLoading || loading || !!activeSession
//                     }
//                     onClick={() => void handleAttendanceAction("clock-in")}
//                   >
//                     {actionLoading ? "Please wait..." : "Clock In"}
//                   </button>

//                   <button
//                     type="button"
//                     className="danger"
//                     disabled={
//                       actionLoading || loading || !activeSession
//                     }
//                     onClick={() => void handleAttendanceAction("clock-out")}
//                   >
//                     {actionLoading ? "Please wait..." : "Clock Out"}
//                   </button>

                  
// {/* <button
//   type="button"
//   disabled={
//     breakLoading ||
//     loading ||
//     !activeSession ||
//     !!activeSession.breaks?.some((item) => item.endedAt === null)
//   }
//   onClick={() => void handleBreakAction("start")}
// >
//   {breakLoading ? "Please wait..." : "Start Break"}
// </button>

// <button
//   type="button"
//   disabled={
//     breakLoading ||
//     loading ||
//     !activeSession ||
//     !activeSession.breaks?.some((item) => item.endedAt === null)
//   }
//   onClick={() => void handleBreakAction("end")}
// >
//   {breakLoading ? "Please wait..." : "End Break"}
// </button> */}


// <button
//   type="button"
//   className="success"
//   disabled={
//     breakLoading ||
//     loading ||
//     !activeSession ||
//     !!activeSession.breaks?.some((item) => item.endedAt === null)
//   }
//   onClick={() => void handleBreakAction("start")}
// >
//   {breakLoading ? "Please wait..." : "Start Break"}
// </button>

// <button
//   type="button"
//   className="warning"
//   disabled={
//     breakLoading ||
//     loading ||
//     !activeSession ||
//     !activeSession.breaks?.some((item) => item.endedAt === null)
//   }
//   onClick={() => void handleBreakAction("end")}
// >
//   {breakLoading ? "Please wait..." : "End Break"}
// </button>


//                 </div>

//                 <p className="notice">
//                   {activeSession
//                     ? "You are currently clocked in."
//                     : "Clock in to start recording your work time."}
//                 </p>
//               </article>

//               <article className="panel">
//                 <h3>Today's Schedule</h3>

//                 <div className="schedule-row">
//                   <span>Shift Start</span>
//                   <strong>08:30 AM</strong>
//                 </div>

//                 <div className="schedule-row">
//                   <span>Shift End</span>
//                   <strong>05:00 PM</strong>
//                 </div>

//                 <div className="schedule-row">
//                   <span>Expected Hours</span>
//                   <strong>8 hours</strong>
//                 </div>

//                 <p className="muted">
//                   Example schedule. Actual shifts will come from the database.
//                 </p>
//               </article>
//             </section>

//             <section className="panel">
//               <h3>Recent Attendance</h3>
//               <p className="muted">
//                 Your latest attendance sessions are shown here.
//               </p>

//               {loading ? (
//                 <p className="muted">Loading attendance...</p>
//               ) : todaySessions.length === 0 ? (
//                 <div className="empty-state">
//                   <div className="empty-icon">◷</div>
//                   <strong>No attendance records today</strong>
//                   <p>Clock in to create today's attendance record.</p>
//                 </div>
//               ) : (
//                 todaySessions.slice(0, 3).map((session) => (
//                   <div className="schedule-row" key={session.id}>
//                     <span>
//                       {formatSriLankaDate(session.clockInAt)}
//                       <br />
//                       <small>
//                         {formatSriLankaTime(session.clockInAt)} –{" "}
//                         {formatSriLankaTime(session.clockOutAt)}
//                       </small>
//                     </span>

//                     <strong>
//                       {session.status === "IN_PROGRESS"
//                         ? "In Progress"
//                         : session.status === "COMPLETED"
//                           ? formatDuration(session.netMinutes)
//                           : "Incomplete"}
//                     </strong>
//                   </div>
//                 ))
//               )}

//               <button
//                 type="button"
//                 onClick={() => setCurrentPage("history")}
//               >
//                 View Full Attendance History
//               </button>
//             </section>
//           </>
//         )}

//         {currentPage === "history" && (
//           <section className="panel history-panel">
//             <h2>Attendance History</h2>
//             <p className="muted">
//               All your recorded attendance sessions in Sri Lankan time.
//             </p>

//             {loading ? (
//               <p className="muted">Loading attendance records...</p>
//             ) : attendance.length === 0 ? (
//               <div className="empty-state">
//                 <div className="empty-icon">◷</div>
//                 <strong>No attendance records yet</strong>
//                 <p>Your records will appear here after you clock in.</p>
//               </div>
//             ) : (
//               attendance.map((session) => (
//                 <div className="schedule-row" key={session.id}>
//                   <span>
//                     <strong>{formatSriLankaDate(session.clockInAt)}</strong>
//                     <br />
//                     <small>
//                       Clock In: {formatSriLankaTime(session.clockInAt)}
//                     </small>
//                     <br />
//                     <small>
//                       Clock Out: {formatSriLankaTime(session.clockOutAt)}
//                     </small>
//                   </span>

//                   <span>
//                     <strong>
//                       {session.status === "IN_PROGRESS"
//                         ? "In Progress"
//                         : session.status === "COMPLETED"
//                           ? "Completed"
//                           : "Incomplete"}
//                     </strong>
//                     <br />
//                     <small>
//                       Net: {formatDuration(session.netMinutes)}
//                     </small>
//                     <br />
//                     <small>
//                       Break: {formatDuration(session.breakMinutes)}
//                     </small>
//                   </span>
//                 </div>
//               ))
//             )}

//             <button
//               type="button"
//               onClick={() => void loadAttendance()}
//               disabled={loading}
//             >
//               {loading ? "Refreshing..." : "Refresh History"}
//             </button>
//           </section>
//         )}

//         {currentPage === "corrections" && (
//           <section className="panel">
//             <h2>Correction Requests</h2>
//             <p className="muted">
//               Correction request functionality will be connected here next.
//             </p>
//           </section>
//         )}

//         {currentPage === "reports" && (
//           <section className="panel">
//             <h2>Attendance Reports</h2>
//             <p className="muted">
//               Attendance reports will be available here in a later step.
//             </p>
//           </section>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;



// import "./App.css";
// import { useCallback, useEffect, useState } from "react";
// import Login from "./components/Login";
// import { api } from "./api/client";

// type BreakRecord = {
//   id: string;
//   startedAt: string;
//   endedAt: string | null;
//   breakType: "PAID" | "UNPAID";
// };

// type AttendanceSession = {
//   id: string;
//   employeeId: string;
//   clockInAt: string;
//   clockOutAt: string | null;
//   grossMinutes: number | null;
//   breakMinutes: number;
//   netMinutes: number | null;
//   status: "IN_PROGRESS" | "COMPLETED" | "INCOMPLETE";
//   breaks?: BreakRecord[];
// };

// type CorrectionRequest = {
//   id: string;
//   sessionId: string;
//   requestedById: string;
//   reason: string;
//   originalClockInAt: string | null;
//   originalClockOutAt: string | null;
//   proposedIn: string | null;
//   proposedOut: string | null;
//   status: "PENDING" | "APPROVED" | "REJECTED";
//   reviewNote: string | null;
//   createdAt: string;
//   reviewedAt?: string | null;
//   session?: AttendanceSession;
//   requestedBy?: {
//     id: string;
//     email: string;
//     role: string;
//   };
// };

// type Page = "dashboard" | "history" | "corrections" | "reports";

// function formatSriLankaTime(timestamp: string | null) {
//   if (!timestamp) return "--:--";

//   return new Intl.DateTimeFormat("en-LK", {
//     timeZone: "Asia/Colombo",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   }).format(new Date(timestamp));
// }

// function formatSriLankaDate(timestamp: string) {
//   return new Intl.DateTimeFormat("en-LK", {
//     timeZone: "Asia/Colombo",
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   }).format(new Date(timestamp));
// }

// function formatDuration(minutes: number | null) {
//   if (minutes === null) return "00:00";

//   const hours = Math.floor(minutes / 60);
//   const remainingMinutes = minutes % 60;

//   return `${String(hours).padStart(2, "0")}:${String(
//     remainingMinutes,
//   ).padStart(2, "0")}`;
// }

// function getErrorMessage(err: unknown, fallback: string) {
//   if (typeof err === "object" && err !== null && "isAxiosError" in err) {
//     const axiosError = err as {
//       response?: { data?: { message?: string | string[] } };
//     };

//     const serverMessage = axiosError.response?.data?.message;

//     if (Array.isArray(serverMessage)) return serverMessage.join(", ");
//     if (serverMessage) return serverMessage;
//   }

//   return fallback;
// }

// // Read the role from the JWT payload for displaying the correct workspace.
// // The backend still enforces all permissions.
// function getRoleFromToken(token: string | null): string {
//   if (!token) return "";

//   try {
//     const payload = token.split(".")[1];
//     if (!payload) return "";

//     const base64 = payload
//       .replace(/-/g, "+")
//       .replace(/_/g, "/");

//     const decoded = JSON.parse(atob(base64)) as {
//       role?: string;
//     };

//     return decoded.role ?? "";
//   } catch {
//     return "";
//   }
// }

// // Convert a datetime-local value interpreted as Sri Lanka local time
// // into an ISO string for the backend.
// function sriLankaInputToIso(value: string): string | undefined {
//   if (!value) return undefined;

//   const match = value.match(
//     /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/,
//   );

//   if (!match) return undefined;

//   const [, year, month, day, hour, minute] = match;
//   const iso = `${year}-${month}-${day}T${hour}:${minute}:00+05:30`;
//   const date = new Date(iso);

//   return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
// }

// function App() {
//   const [token, setToken] = useState<string | null>(
//     () => localStorage.getItem("accessToken"),
//   );
//   const [currentPage, setCurrentPage] = useState<Page>("dashboard");
//   const [attendance, setAttendance] = useState<AttendanceSession[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [actionLoading, setActionLoading] = useState(false);
//   const [breakLoading, setBreakLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   // Correction request state
//   const [myRequests, setMyRequests] = useState<CorrectionRequest[]>([]);
//   const [pendingRequests, setPendingRequests] = useState<CorrectionRequest[]>([]);
//   const [correctionLoading, setCorrectionLoading] = useState(false);
//   const [correctionSubmitting, setCorrectionSubmitting] = useState(false);
//   const [reviewingId, setReviewingId] = useState<string | null>(null);

//   const [selectedSessionId, setSelectedSessionId] = useState("");
//   const [correctionReason, setCorrectionReason] = useState("");
//   const [proposedIn, setProposedIn] = useState("");
//   const [proposedOut, setProposedOut] = useState("");
//   const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});

//   const role = getRoleFromToken(token);
//   const canReview = role === "ADMIN" || role === "MANAGER";

//   const loadAttendance = useCallback(async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await api.get<AttendanceSession[]>(
//         "/attendance/history",
//       );
//       setAttendance(response.data);
//     } catch (err: unknown) {
//       console.error("Failed to load attendance:", err);
//       setError(
//         getErrorMessage(err, "Could not load attendance records. Please try again."),
//       );
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const loadMyRequests = useCallback(async () => {
//     try {
//       const response = await api.get<CorrectionRequest[]>(
//         "/corrections/my-requests",
//       );
//       setMyRequests(response.data);
//     } catch (err: unknown) {
//       console.error("Failed to load correction requests:", err);
//       setError(
//         getErrorMessage(err, "Could not load your correction requests."),
//       );
//     }
//   }, []);

//   const loadPendingRequests = useCallback(async () => {
//     if (!canReview) return;

//     try {
//       const response = await api.get<CorrectionRequest[]>(
//         "/corrections/pending",
//       );
//       setPendingRequests(response.data);
//     } catch (err: unknown) {
//       console.error("Failed to load pending corrections:", err);
//       setError(
//         getErrorMessage(err, "Could not load pending correction requests."),
//       );
//     }
//   }, [canReview]);

//   useEffect(() => {
//     if (token) {
//       void loadAttendance();
//     }
//   }, [token, loadAttendance]);

//   useEffect(() => {
//     if (token && currentPage === "corrections") {
//       setError("");
//       void loadMyRequests();

//       if (canReview) {
//         void loadPendingRequests();
//       }
//     }
//   }, [token, currentPage, canReview, loadMyRequests, loadPendingRequests]);

//   if (!token) {
//     return <Login onLogin={setToken} />;
//   }

//   const today = new Intl.DateTimeFormat("en-CA", {
//     timeZone: "Asia/Colombo",
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }).format(new Date());

//   const todaySessions = attendance.filter((session) => {
//     const sessionDate = new Intl.DateTimeFormat("en-CA", {
//       timeZone: "Asia/Colombo",
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }).format(new Date(session.clockInAt));

//     return sessionDate === today;
//   });

//   const activeSession = todaySessions.find(
//     (session) =>
//       session.status === "IN_PROGRESS" && session.clockOutAt === null,
//   );

//   const latestSession = todaySessions[0];

//   const activeBreak = activeSession?.breaks?.some(
//     (item) => item.endedAt === null,
//   ) ?? false;

//   const workedMinutes = activeSession
//     ? Math.max(
//         0,
//         Math.floor(
//           (Date.now() - new Date(activeSession.clockInAt).getTime()) / 60000,
//         ) - (activeSession.breakMinutes ?? 0),
//       )
//     : (latestSession?.netMinutes ?? 0);

//   async function handleAttendanceAction(action: "clock-in" | "clock-out") {
//     setActionLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       await api.post(`/attendance/${action}`);

//       setMessage(
//         action === "clock-in"
//           ? "Clock-in recorded successfully."
//           : "Clock-out recorded successfully.",
//       );

//       await loadAttendance();
//     } catch (err: unknown) {
//       console.error("Attendance action failed:", err);
//       setError(
//         getErrorMessage(err, "Attendance action failed. Please try again."),
//       );
//     } finally {
//       setActionLoading(false);
//     }
//   }

//   async function handleBreakAction(action: "start" | "end") {
//     setBreakLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       if (action === "start") {
//         await api.post("/attendance/break/start", {
//           breakType: "UNPAID",
//         });
//         setMessage("Break started successfully.");
//       } else {
//         await api.post("/attendance/break/end");
//         setMessage("Break ended successfully.");
//       }

//       await loadAttendance();
//     } catch (err: unknown) {
//       console.error("Break action failed:", err);
//       setError(getErrorMessage(err, "Break action failed. Please try again."));
//     } finally {
//       setBreakLoading(false);
//     }
//   }

//   async function handleCreateCorrection(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setError("");
//     setMessage("");

//     if (!selectedSessionId) {
//       setError("Please select an attendance session.");
//       return;
//     }

//     if (!correctionReason.trim()) {
//       setError("Please enter a reason for the correction.");
//       return;
//     }

//     const convertedIn = sriLankaInputToIso(proposedIn);
//     const convertedOut = sriLankaInputToIso(proposedOut);

//     if (proposedIn && !convertedIn) {
//       setError("Please enter a valid proposed clock-in time.");
//       return;
//     }

//     if (proposedOut && !convertedOut) {
//       setError("Please enter a valid proposed clock-out time.");
//       return;
//     }

//     if (convertedIn && convertedOut && convertedOut <= convertedIn) {
//       setError("Proposed clock-out must be later than proposed clock-in.");
//       return;
//     }

//     setCorrectionSubmitting(true);

//     try {
//       await api.post("/corrections", {
//         sessionId: selectedSessionId,
//         reason: correctionReason.trim(),
//         ...(convertedIn ? { proposedIn: convertedIn } : {}),
//         ...(convertedOut ? { proposedOut: convertedOut } : {}),
//       });

//       setMessage("Correction request submitted successfully.");
//       setSelectedSessionId("");
//       setCorrectionReason("");
//       setProposedIn("");
//       setProposedOut("");

//       await loadMyRequests();
//     } catch (err: unknown) {
//       console.error("Failed to submit correction:", err);
//       setError(
//         getErrorMessage(err, "Could not submit the correction request."),
//       );
//     } finally {
//       setCorrectionSubmitting(false);
//     }
//   }

//   async function handleReviewCorrection(
//     requestId: string,
//     decision: "APPROVED" | "REJECTED",
//   ) {
//     setError("");
//     setMessage("");
//     setReviewingId(requestId);

//     try {
//       await api.patch(`/corrections/${requestId}/review`, {
//         decision,
//         reviewNote: reviewNotes[requestId]?.trim() || undefined,
//       });

//       setMessage(
//         decision === "APPROVED"
//           ? "Correction request approved."
//           : "Correction request rejected.",
//       );

//       await Promise.all([
//         loadPendingRequests(),
//         loadMyRequests(),
//         loadAttendance(),
//       ]);
//     } catch (err: unknown) {
//       console.error("Failed to review correction:", err);
//       setError(
//         getErrorMessage(err, "Could not review the correction request."),
//       );
//     } finally {
//       setReviewingId(null);
//     }
//   }

//   function handleLogout() {
//     localStorage.removeItem("accessToken");
//     setToken(null);
//     setAttendance([]);
//     setMyRequests([]);
//     setPendingRequests([]);
//     setCurrentPage("dashboard");
//     setMessage("");
//     setError("");
//   }

//   function goToPage(page: Page) {
//     setCurrentPage(page);
//     setError("");
//     setMessage("");
//   }

//   return (
//     <div className="app">
//       <aside className="sidebar">
//         <h2>AttendEase</h2>
//         <p className="sidebar-label">WORKSPACE</p>

//         <nav>
//           <a
//             href="#dashboard"
//             className={currentPage === "dashboard" ? "active" : ""}
//             onClick={(event) => {
//               event.preventDefault();
//               goToPage("dashboard");
//             }}
//           >
//             Dashboard
//           </a>

//           <a
//             href="#history"
//             className={currentPage === "history" ? "active" : ""}
//             onClick={(event) => {
//               event.preventDefault();
//               goToPage("history");
//             }}
//           >
//             Attendance History
//           </a>

//           <a
//             href="#corrections"
//             className={currentPage === "corrections" ? "active" : ""}
//             onClick={(event) => {
//               event.preventDefault();
//               goToPage("corrections");
//             }}
//           >
//             Correction Requests
//           </a>

//           <a
//             href="#reports"
//             className={currentPage === "reports" ? "active" : ""}
//             onClick={(event) => {
//               event.preventDefault();
//               goToPage("reports");
//             }}
//           >
//             Reports
//           </a>
//         </nav>

//         <div className="sidebar-bottom">
//           <p>Attendance Management</p>
//           <small>Version 1.0</small>
//         </div>
//       </aside>

//       <main className="main-content">
//         <header className="topbar">
//           <div>
//             <p className="eyebrow">EMPLOYEE WORKSPACE</p>
//             <h1>
//               {currentPage === "dashboard" && "Attendance Dashboard"}
//               {currentPage === "history" && "Attendance History"}
//               {currentPage === "corrections" && "Correction Requests"}
//               {currentPage === "reports" && "Attendance Reports"}
//             </h1>
//           </div>

//           <div className="profile">
//             <div className="avatar">
//               {canReview ? (role === "ADMIN" ? "A" : "M") : "E"}
//             </div>
//             <div>
//               <strong>
//                 {role === "ADMIN"
//                   ? "Administrator"
//                   : role === "MANAGER"
//                     ? "Manager"
//                     : "Employee"}
//               </strong>
//               <p>{role || "Team Member"}</p>
//             </div>
//             <button type="button" onClick={handleLogout}>
//               Log Out
//             </button>
//           </div>
//         </header>

//         {error && <p className="notice">{error}</p>}
//         {message && <p className="notice">{message}</p>}

//         {currentPage === "dashboard" && (
//           <>
//             <section className="welcome">
//               <div>
//                 <p>YOUR DAILY OVERVIEW</p>
//                 <h2>Welcome to your workspace</h2>
//                 <span>Manage your working hours and attendance.</span>
//               </div>

//               <div className="date">
//                 {new Intl.DateTimeFormat("en-LK", {
//                   timeZone: "Asia/Colombo",
//                   day: "2-digit",
//                   month: "short",
//                   year: "numeric",
//                 }).format(new Date())}
//               </div>
//             </section>

//             <section className="stats">
//               <article className="stat-card">
//                 <span>Today's Status</span>
//                 <h2>
//                   {activeSession
//                     ? "Clocked In"
//                     : latestSession?.status === "COMPLETED"
//                       ? "Completed"
//                       : "Not Clocked In"}
//                 </h2>
//                 <small>
//                   {loading ? "Loading attendance..." : "Sri Lanka local time"}
//                 </small>
//               </article>

//               <article className="stat-card">
//                 <span>Clock In</span>
//                 <h2>
//                   {latestSession
//                     ? formatSriLankaTime(latestSession.clockInAt)
//                     : "--:--"}
//                 </h2>
//                 <small>Today's recorded start time</small>
//               </article>

//               <article className="stat-card">
//                 <span>Worked Hours</span>
//                 <h2>{formatDuration(workedMinutes)}</h2>
//                 <small>Working duration (HH:MM)</small>
//               </article>

//               <article className="stat-card">
//                 <span>Break Duration</span>
//                 <h2>
//                   {formatDuration(
//                     activeSession?.breakMinutes ??
//                       latestSession?.breakMinutes ??
//                       0,
//                   )}
//                 </h2>
//                 <small>Recorded break time</small>
//               </article>
//             </section>

//             <section className="content-grid">
//               <article className="panel">
//                 <h3>Attendance Actions</h3>
//                 <p className="muted">
//                   Record your attendance using the connected backend.
//                 </p>

//                 <div className="actions">
//                   <button
//                     type="button"
//                     className="primary"
//                     disabled={actionLoading || loading || !!activeSession}
//                     onClick={() => void handleAttendanceAction("clock-in")}
//                   >
//                     {actionLoading ? "Please wait..." : "Clock In"}
//                   </button>

//                   <button
//                     type="button"
//                     className="danger"
//                     disabled={actionLoading || loading || !activeSession}
//                     onClick={() => void handleAttendanceAction("clock-out")}
//                   >
//                     {actionLoading ? "Please wait..." : "Clock Out"}
//                   </button>

//                   <button
//                     type="button"
//                     className="success"
//                     disabled={
//                       breakLoading || loading || !activeSession || activeBreak
//                     }
//                     onClick={() => void handleBreakAction("start")}
//                   >
//                     {breakLoading ? "Please wait..." : "Start Break"}
//                   </button>

//                   <button
//                     type="button"
//                     className="warning"
//                     disabled={
//                       breakLoading || loading || !activeSession || !activeBreak
//                     }
//                     onClick={() => void handleBreakAction("end")}
//                   >
//                     {breakLoading ? "Please wait..." : "End Break"}
//                   </button>
//                 </div>

//                 <p className="notice">
//                   {activeSession
//                     ? activeBreak
//                       ? "You are currently on a break."
//                       : "You are currently clocked in."
//                     : "Clock in to start recording your work time."}
//                 </p>
//               </article>

//               <article className="panel">
//                 <h3>Today's Schedule</h3>

//                 <div className="schedule-row">
//                   <span>Shift Start</span>
//                   <strong>08:30 AM</strong>
//                 </div>

//                 <div className="schedule-row">
//                   <span>Shift End</span>
//                   <strong>05:00 PM</strong>
//                 </div>

//                 <div className="schedule-row">
//                   <span>Expected Hours</span>
//                   <strong>8 hours</strong>
//                 </div>

//                 <p className="muted">
//                   Example schedule. Actual shifts will come from the database.
//                 </p>
//               </article>
//             </section>

//             <section className="panel">
//               <h3>Recent Attendance</h3>
//               <p className="muted">
//                 Your latest attendance sessions are shown here.
//               </p>

//               {loading ? (
//                 <p className="muted">Loading attendance...</p>
//               ) : todaySessions.length === 0 ? (
//                 <div className="empty-state">
//                   <div className="empty-icon">◷</div>
//                   <strong>No attendance records today</strong>
//                   <p>Clock in to create today's attendance record.</p>
//                 </div>
//               ) : (
//                 todaySessions.slice(0, 3).map((session) => (
//                   <div className="schedule-row" key={session.id}>
//                     <span>
//                       {formatSriLankaDate(session.clockInAt)}
//                       <br />
//                       <small>
//                         {formatSriLankaTime(session.clockInAt)} –{" "}
//                         {formatSriLankaTime(session.clockOutAt)}
//                       </small>
//                     </span>

//                     <strong>
//                       {session.status === "IN_PROGRESS"
//                         ? "In Progress"
//                         : session.status === "COMPLETED"
//                           ? formatDuration(session.netMinutes)
//                           : "Incomplete"}
//                     </strong>
//                   </div>
//                 ))
//               )}

//               <button
//                 type="button"
//                 onClick={() => goToPage("history")}
//               >
//                 View Full Attendance History
//               </button>
//             </section>
//           </>
//         )}

//         {currentPage === "history" && (
//           <section className="panel history-panel">
//             <h2>Attendance History</h2>
//             <p className="muted">
//               All your recorded attendance sessions in Sri Lankan time.
//             </p>

//             {loading ? (
//               <p className="muted">Loading attendance records...</p>
//             ) : attendance.length === 0 ? (
//               <div className="empty-state">
//                 <div className="empty-icon">◷</div>
//                 <strong>No attendance records yet</strong>
//                 <p>Your records will appear here after you clock in.</p>
//               </div>
//             ) : (
//               attendance.map((session) => (
//                 <div className="schedule-row" key={session.id}>
//                   <span>
//                     <strong>{formatSriLankaDate(session.clockInAt)}</strong>
//                     <br />
//                     <small>
//                       Clock In: {formatSriLankaTime(session.clockInAt)}
//                     </small>
//                     <br />
//                     <small>
//                       Clock Out: {formatSriLankaTime(session.clockOutAt)}
//                     </small>
//                   </span>

//                   <span>
//                     <strong>
//                       {session.status === "IN_PROGRESS"
//                         ? "In Progress"
//                         : session.status === "COMPLETED"
//                           ? "Completed"
//                           : "Incomplete"}
//                     </strong>
//                     <br />
//                     <small>Net: {formatDuration(session.netMinutes)}</small>
//                     <br />
//                     <small>Break: {formatDuration(session.breakMinutes)}</small>
//                   </span>

//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSelectedSessionId(session.id);
//                       setCorrectionReason("");
//                       setProposedIn("");
//                       setProposedOut("");
//                       goToPage("corrections");
//                     }}
//                   >
//                     Request Correction
//                   </button>
//                 </div>
//               ))
//             )}

//             <button
//               type="button"
//               onClick={() => void loadAttendance()}
//               disabled={loading}
//             >
//               {loading ? "Refreshing..." : "Refresh History"}
//             </button>
//           </section>
//         )}

//         {currentPage === "corrections" && (
//           <>
//             <section className="panel">
//               <h2>Submit a Correction Request</h2>
//               <p className="muted">
//                 Select an attendance session and explain what needs to be
//                 corrected. Proposed times are optional. Times entered here
//                 are interpreted as Sri Lanka local time.
//               </p>

//               <form onSubmit={handleCreateCorrection}>
//                 <div className="form-group">
//                   <label htmlFor="correction-session">
//                     Attendance Session
//                   </label>
//                   <select
//                     id="correction-session"
//                     value={selectedSessionId}
//                     onChange={(event) =>
//                       setSelectedSessionId(event.target.value)
//                     }
//                     required
//                   >
//                     <option value="">Select an attendance session</option>
//                     {attendance.map((session) => (
//                       <option key={session.id} value={session.id}>
//                         {formatSriLankaDate(session.clockInAt)} —{" "}
//                         {formatSriLankaTime(session.clockInAt)} to{" "}
//                         {formatSriLankaTime(session.clockOutAt)} (
//                         {session.status})
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="proposed-in">
//                     Proposed Clock-In (optional)
//                   </label>
//                   <input
//                     id="proposed-in"
//                     type="datetime-local"
//                     value={proposedIn}
//                     onChange={(event) => setProposedIn(event.target.value)}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="proposed-out">
//                     Proposed Clock-Out (optional)
//                   </label>
//                   <input
//                     id="proposed-out"
//                     type="datetime-local"
//                     value={proposedOut}
//                     onChange={(event) => setProposedOut(event.target.value)}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="correction-reason">Reason</label>
//                   <textarea
//                     id="correction-reason"
//                     value={correctionReason}
//                     onChange={(event) =>
//                       setCorrectionReason(event.target.value)
//                     }
//                     placeholder="Explain why your attendance needs correction..."
//                     rows={4}
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={correctionSubmitting || attendance.length === 0}
//                 >
//                   {correctionSubmitting
//                     ? "Submitting..."
//                     : "Submit Correction Request"}
//                 </button>

//                 {attendance.length === 0 && (
//                   <p className="muted">
//                     No attendance sessions are available to correct.
//                   </p>
//                 )}
//               </form>
//             </section>

//             <section className="panel">
//               <div className="section-heading">
//                 <div>
//                   <h2>My Correction Requests</h2>
//                   <p className="muted">
//                     Track the status of your submitted requests.
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   disabled={correctionLoading}
//                   onClick={async () => {
//                     setCorrectionLoading(true);
//                     await loadMyRequests();
//                     setCorrectionLoading(false);
//                   }}
//                 >
//                   Refresh
//                 </button>
//               </div>

//               {correctionLoading ? (
//                 <p className="muted">Loading requests...</p>
//               ) : myRequests.length === 0 ? (
//                 <div className="empty-state">
//                   <strong>No correction requests yet</strong>
//                   <p>Your submitted requests will appear here.</p>
//                 </div>
//               ) : (
//                 myRequests.map((request) => (
//                   <article className="correction-card" key={request.id}>
//                     <div className="section-heading">
//                       <strong>
//                         Submitted {formatSriLankaDate(request.createdAt)}
//                       </strong>
//                       <span
//                         className={`status-badge status-${request.status.toLowerCase()}`}
//                       >
//                         {request.status}
//                       </span>
//                     </div>

//                     <p>
//                       <strong>Reason:</strong> {request.reason}
//                     </p>

//                     <p>
//                       <strong>Original clock-in:</strong>{" "}
//                       {request.originalClockInAt
//                         ? `${formatSriLankaDate(request.originalClockInAt)} ${formatSriLankaTime(request.originalClockInAt)}`
//                         : "--"}
//                     </p>

//                     <p>
//                       <strong>Original clock-out:</strong>{" "}
//                       {request.originalClockOutAt
//                         ? `${formatSriLankaDate(request.originalClockOutAt)} ${formatSriLankaTime(request.originalClockOutAt)}`
//                         : "--"}
//                     </p>

//                     <p>
//                       <strong>Proposed clock-in:</strong>{" "}
//                       {request.proposedIn
//                         ? `${formatSriLankaDate(request.proposedIn)} ${formatSriLankaTime(request.proposedIn)}`
//                         : "No change"}
//                     </p>

//                     <p>
//                       <strong>Proposed clock-out:</strong>{" "}
//                       {request.proposedOut
//                         ? `${formatSriLankaDate(request.proposedOut)} ${formatSriLankaTime(request.proposedOut)}`
//                         : "No change"}
//                     </p>

//                     {request.reviewNote && (
//                       <p>
//                         <strong>Review note:</strong> {request.reviewNote}
//                       </p>
//                     )}
//                   </article>
//                 ))
//               )}
//             </section>

//             {canReview && (
//               <section className="panel">
//                 <h2>Pending Requests — Manager Review</h2>
//                 <p className="muted">
//                   Review employee requests and approve or reject them.
//                 </p>

//                 {pendingRequests.length === 0 ? (
//                   <div className="empty-state">
//                     <strong>No pending requests</strong>
//                     <p>There are no correction requests waiting for review.</p>
//                   </div>
//                 ) : (
//                   pendingRequests.map((request) => (
//                     <article className="correction-card" key={request.id}>
//                       <div className="section-heading">
//                         <strong>
//                           {request.requestedBy?.email ?? "Employee"}
//                         </strong>
//                         <span className="status-badge status-pending">
//                           PENDING
//                         </span>
//                       </div>

//                       <p>
//                         <strong>Submitted:</strong>{" "}
//                         {formatSriLankaDate(request.createdAt)}
//                       </p>

//                       <p>
//                         <strong>Reason:</strong> {request.reason}
//                       </p>

//                       <p>
//                         <strong>Original clock-in:</strong>{" "}
//                         {request.originalClockInAt
//                           ? `${formatSriLankaDate(request.originalClockInAt)} ${formatSriLankaTime(request.originalClockInAt)}`
//                           : "--"}
//                       </p>

//                       <p>
//                         <strong>Original clock-out:</strong>{" "}
//                         {request.originalClockOutAt
//                           ? `${formatSriLankaDate(request.originalClockOutAt)} ${formatSriLankaTime(request.originalClockOutAt)}`
//                           : "--"}
//                       </p>

//                       <p>
//                         <strong>Proposed clock-in:</strong>{" "}
//                         {request.proposedIn
//                           ? `${formatSriLankaDate(request.proposedIn)} ${formatSriLankaTime(request.proposedIn)}`
//                           : "No change"}
//                       </p>

//                       <p>
//                         <strong>Proposed clock-out:</strong>{" "}
//                         {request.proposedOut
//                           ? `${formatSriLankaDate(request.proposedOut)} ${formatSriLankaTime(request.proposedOut)}`
//                           : "No change"}
//                       </p>

//                       <div className="form-group">
//                         <label htmlFor={`review-note-${request.id}`}>
//                           Review Note (optional)
//                         </label>
//                         <textarea
//                           id={`review-note-${request.id}`}
//                           rows={2}
//                           value={reviewNotes[request.id] ?? ""}
//                           onChange={(event) =>
//                             setReviewNotes((previous) => ({
//                               ...previous,
//                               [request.id]: event.target.value,
//                             }))
//                           }
//                           placeholder="Enter a note for the employee..."
//                         />
//                       </div>

//                       <div className="actions">
//                         <button
//                           type="button"
//                           className="success"
//                           disabled={reviewingId === request.id}
//                           onClick={() =>
//                             void handleReviewCorrection(
//                               request.id,
//                               "APPROVED",
//                             )
//                           }
//                         >
//                           {reviewingId === request.id
//                             ? "Please wait..."
//                             : "Approve"}
//                         </button>

//                         <button
//                           type="button"
//                           className="danger"
//                           disabled={reviewingId === request.id}
//                           onClick={() =>
//                             void handleReviewCorrection(
//                               request.id,
//                               "REJECTED",
//                             )
//                           }
//                         >
//                           {reviewingId === request.id
//                             ? "Please wait..."
//                             : "Reject"}
//                         </button>
//                       </div>
//                     </article>
//                   ))
//                 )}

//                 <button
//                   type="button"
//                   onClick={() => void loadPendingRequests()}
//                 >
//                   Refresh Pending Requests
//                 </button>
//               </section>
//             )}
//           </>
//         )}

//         {currentPage === "reports" && (
//           <section className="panel">
//             <h2>Attendance Reports</h2>
//             <p className="muted">
//               Attendance reports will be available here in a later step.
//             </p>
//           </section>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;




import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Login from "./components/Login";
import { api } from "./api/client";

type BreakRecord = {
  id: string;
  startedAt: string;
  endedAt: string | null;
  breakType: "PAID" | "UNPAID";
};

type AttendanceSession = {
  id: string;
  employeeId: string;
  clockInAt: string;
  clockOutAt: string | null;
  grossMinutes: number | null;
  breakMinutes: number;
  netMinutes: number | null;
  status: "IN_PROGRESS" | "COMPLETED" | "INCOMPLETE";
  breaks?: BreakRecord[];
};

type CorrectionRequest = {
  id: string;
  sessionId: string;
  requestedById: string;
  reason: string;
  originalClockInAt: string | null;
  originalClockOutAt: string | null;
  proposedIn: string | null;
  proposedOut: string | null;
  status: "PENDING" | "APPROVED" | "REJECTED";
  reviewNote: string | null;
  createdAt: string;
  reviewedAt?: string | null;
  session?: AttendanceSession;
  requestedBy?: {
    id: string;
    email: string;
    role: string;
  };
  reviewedBy?: {
    id: string;
    email: string;
    role: string;
  } | null;
};

type Page = "dashboard" | "history" | "corrections" | "reports";

function formatSriLankaTime(timestamp: string | null) {
  if (!timestamp) return "--:--";

  return new Intl.DateTimeFormat("en-LK", {
    timeZone: "Asia/Colombo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(timestamp));
}

function formatSriLankaDate(timestamp: string) {
  return new Intl.DateTimeFormat("en-LK", {
    timeZone: "Asia/Colombo",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(timestamp));
}

function formatDuration(minutes: number | null) {
  if (minutes === null) return "00:00";

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(
    remainingMinutes,
  ).padStart(2, "0")}`;
}

function getErrorMessage(err: unknown, fallback: string) {
  if (typeof err === "object" && err !== null && "isAxiosError" in err) {
    const axiosError = err as {
      response?: { data?: { message?: string | string[] } };
    };

    const serverMessage = axiosError.response?.data?.message;

    if (Array.isArray(serverMessage)) return serverMessage.join(", ");
    if (serverMessage) return serverMessage;
  }

  return fallback;
}

function getRoleFromToken(token: string | null): string {
  if (!token) return "";

  try {
    const payload = token.split(".")[1];
    if (!payload) return "";

    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = JSON.parse(atob(base64)) as { role?: string };

    return decoded.role ?? "";
  } catch {
    return "";
  }
}

function sriLankaInputToIso(value: string): string | undefined {
  if (!value) return undefined;

  const match = value.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/,
  );

  if (!match) return undefined;

  const [, year, month, day, hour, minute] = match;
  const iso = `${year}-${month}-${day}T${hour}:${minute}:00+05:30`;
  const date = new Date(iso);

  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

function App() {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem("accessToken"),
  );

  const [currentPage, setCurrentPage] = useState<Page>("dashboard");
  const [attendance, setAttendance] = useState<AttendanceSession[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [breakLoading, setBreakLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Employee correction state
  const [myRequests, setMyRequests] = useState<CorrectionRequest[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState("");
  const [correctionReason, setCorrectionReason] = useState("");
  const [proposedIn, setProposedIn] = useState("");
  const [proposedOut, setProposedOut] = useState("");
  const [correctionSubmitting, setCorrectionSubmitting] = useState(false);

  // Admin/manager correction state
  const [allRequests, setAllRequests] = useState<CorrectionRequest[]>([]);
  const [correctionLoading, setCorrectionLoading] = useState(false);
  const [reviewingId, setReviewingId] = useState<string | null>(null);
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});

  // Notification state
  const [notifications, setNotifications] = useState<
    { id: string; text: string; status: "APPROVED" | "REJECTED" }[]
  >([]);

  // Stores previously seen request statuses for notification detection.
  const previousStatuses = useRef<Record<string, string> | null>(null);

  const role = getRoleFromToken(token);
  const canReview = role === "ADMIN" || role === "MANAGER";
  const isAdmin = role === "ADMIN";

  const loadAttendance = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get<AttendanceSession[]>(
        "/attendance/history",
      );
      setAttendance(response.data);
    } catch (err: unknown) {
      console.error("Failed to load attendance:", err);
      setError(
        getErrorMessage(
          err,
          "Could not load attendance records. Please try again.",
        ),
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch employee requests and notify them when a status changes.
  const loadMyRequests = useCallback(async () => {
    try {
      const response = await api.get<CorrectionRequest[]>(
        "/corrections/my-requests",
      );

      const requests = response.data;
      setMyRequests(requests);

      const currentStatuses: Record<string, string> = {};

      for (const request of requests) {
        currentStatuses[request.id] = request.status;
      }

      const oldStatuses = previousStatuses.current;

      if (oldStatuses !== null) {
        for (const request of requests) {
          const previousStatus = oldStatuses[request.id];

          if (
            previousStatus === "PENDING" &&
            (request.status === "APPROVED" ||
              request.status === "REJECTED")
          ) {
            const text =
              request.status === "APPROVED"
                ? "Your attendance correction request has been approved."
                : "Your attendance correction request has been rejected.";

            setNotifications((previous) => [
              {
                id: `${request.id}-${request.status}`,
                text,
                status: request.status as "APPROVED" | "REJECTED",
              },
              ...previous,
            ]);

            setMessage(text);
          }
        }
      }

      previousStatuses.current = currentStatuses;
    } catch (err: unknown) {
      console.error("Failed to load your correction requests:", err);
    }
  }, []);

  // Admin/manager gets every request: pending, approved, and rejected.
  const loadAllRequests = useCallback(async () => {
    if (!canReview) return;

    setCorrectionLoading(true);

    try {
      const response = await api.get<CorrectionRequest[]>("/corrections/all");
      setAllRequests(response.data);
    } catch (err: unknown) {
      console.error("Failed to load all correction requests:", err);
      setError(
        getErrorMessage(err, "Could not load correction requests."),
      );
    } finally {
      setCorrectionLoading(false);
    }
  }, [canReview]);

  useEffect(() => {
    if (token) {
      void loadAttendance();
    }
  }, [token, loadAttendance]);

  // Employee status checking runs every 15 seconds while logged in.
  useEffect(() => {
    if (!token || canReview) return;

    previousStatuses.current = null;

    void loadMyRequests();

    const intervalId = window.setInterval(() => {
      void loadMyRequests();
    }, 15000);

    return () => window.clearInterval(intervalId);
  }, [token, canReview, loadMyRequests]);

  // Load all requests when an admin/manager opens the corrections page.
  useEffect(() => {
    if (token && canReview && currentPage === "corrections") {
      setError("");
      void loadAllRequests();
    }
  }, [token, canReview, currentPage, loadAllRequests]);

  if (!token) {
    return <Login onLogin={setToken} />;
  }

  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const todaySessions = attendance.filter((session) => {
    const sessionDate = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Colombo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(session.clockInAt));

    return sessionDate === today;
  });

  const activeSession = todaySessions.find(
    (session) =>
      session.status === "IN_PROGRESS" && session.clockOutAt === null,
  );

  const latestSession = todaySessions[0];

  const activeBreak =
    activeSession?.breaks?.some((item) => item.endedAt === null) ?? false;

  const workedMinutes = activeSession
    ? Math.max(
        0,
        Math.floor(
          (Date.now() - new Date(activeSession.clockInAt).getTime()) / 60000,
        ) - (activeSession.breakMinutes ?? 0),
      )
    : (latestSession?.netMinutes ?? 0);

  const pendingRequests = allRequests.filter(
    (request) => request.status === "PENDING",
  );

  const approvedRequests = allRequests.filter(
    (request) => request.status === "APPROVED",
  );

  const rejectedRequests = allRequests.filter(
    (request) => request.status === "REJECTED",
  );

  async function handleAttendanceAction(action: "clock-in" | "clock-out") {
    setActionLoading(true);
    setError("");
    setMessage("");

    try {
      await api.post(`/attendance/${action}`);

      setMessage(
        action === "clock-in"
          ? "Clock-in recorded successfully."
          : "Clock-out recorded successfully.",
      );

      await loadAttendance();
    } catch (err: unknown) {
      console.error("Attendance action failed:", err);
      setError(
        getErrorMessage(err, "Attendance action failed. Please try again."),
      );
    } finally {
      setActionLoading(false);
    }
  }

  async function handleBreakAction(action: "start" | "end") {
    setBreakLoading(true);
    setError("");
    setMessage("");

    try {
      if (action === "start") {
        await api.post("/attendance/break/start", {
          breakType: "UNPAID",
        });
        setMessage("Break started successfully.");
      } else {
        await api.post("/attendance/break/end");
        setMessage("Break ended successfully.");
      }

      await loadAttendance();
    } catch (err: unknown) {
      console.error("Break action failed:", err);
      setError(
        getErrorMessage(err, "Break action failed. Please try again."),
      );
    } finally {
      setBreakLoading(false);
    }
  }

  async function handleCreateCorrection(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!selectedSessionId) {
      setError("Please select an attendance session.");
      return;
    }

    if (!correctionReason.trim()) {
      setError("Please enter a reason for the correction.");
      return;
    }

    const convertedIn = sriLankaInputToIso(proposedIn);
    const convertedOut = sriLankaInputToIso(proposedOut);

    if (proposedIn && !convertedIn) {
      setError("Please enter a valid proposed clock-in time.");
      return;
    }

    if (proposedOut && !convertedOut) {
      setError("Please enter a valid proposed clock-out time.");
      return;
    }

    if (convertedIn && convertedOut && convertedOut <= convertedIn) {
      setError("Proposed clock-out must be later than proposed clock-in.");
      return;
    }

    setCorrectionSubmitting(true);

    try {
      await api.post("/corrections", {
        sessionId: selectedSessionId,
        reason: correctionReason.trim(),
        ...(convertedIn ? { proposedIn: convertedIn } : {}),
        ...(convertedOut ? { proposedOut: convertedOut } : {}),
      });

      setMessage("Correction request submitted successfully.");
      setSelectedSessionId("");
      setCorrectionReason("");
      setProposedIn("");
      setProposedOut("");

      await loadMyRequests();
    } catch (err: unknown) {
      console.error("Failed to submit correction:", err);
      setError(
        getErrorMessage(err, "Could not submit the correction request."),
      );
    } finally {
      setCorrectionSubmitting(false);
    }
  }

  async function handleReviewCorrection(
    requestId: string,
    decision: "APPROVED" | "REJECTED",
  ) {
    setError("");
    setMessage("");
    setReviewingId(requestId);

    try {
      await api.patch(`/corrections/${requestId}/review`, {
        decision,
        reviewNote: reviewNotes[requestId]?.trim() || undefined,
      });

      setMessage(
        decision === "APPROVED"
          ? "Correction request approved successfully."
          : "Correction request rejected successfully.",
      );

      await Promise.all([loadAllRequests(), loadAttendance()]);
    } catch (err: unknown) {
      console.error("Failed to review correction:", err);
      setError(
        getErrorMessage(err, "Could not review the correction request."),
      );
    } finally {
      setReviewingId(null);
    }
  }

  function handleLogout() {
    localStorage.removeItem("accessToken");
    setToken(null);
    setAttendance([]);
    setMyRequests([]);
    setAllRequests([]);
    setNotifications([]);
    previousStatuses.current = null;
    setCurrentPage("dashboard");
    setMessage("");
    setError("");
  }

  function goToPage(page: Page) {
    setCurrentPage(page);
    setError("");
    setMessage("");
  }

  function renderAdminRequestCard(request: CorrectionRequest) {
    const canTakeAction = request.status === "PENDING";

    return (
      <article className="correction-card" key={request.id}>
        <div className="section-heading">
          <div>
            <strong>{request.requestedBy?.email ?? "Employee"}</strong>
            <p className="muted">
              Submitted {formatSriLankaDate(request.createdAt)}
            </p>
          </div>

          <span
            className={`status-badge status-${request.status.toLowerCase()}`}
          >
            {request.status}
          </span>
        </div>

        <p>
          <strong>Reason:</strong> {request.reason}
        </p>

        <p>
          <strong>Original clock-in:</strong>{" "}
          {request.originalClockInAt
            ? `${formatSriLankaDate(request.originalClockInAt)} ${formatSriLankaTime(request.originalClockInAt)}`
            : "--"}
        </p>

        <p>
          <strong>Original clock-out:</strong>{" "}
          {request.originalClockOutAt
            ? `${formatSriLankaDate(request.originalClockOutAt)} ${formatSriLankaTime(request.originalClockOutAt)}`
            : "--"}
        </p>

        <p>
          <strong>Proposed clock-in:</strong>{" "}
          {request.proposedIn
            ? `${formatSriLankaDate(request.proposedIn)} ${formatSriLankaTime(request.proposedIn)}`
            : "No change"}
        </p>

        <p>
          <strong>Proposed clock-out:</strong>{" "}
          {request.proposedOut
            ? `${formatSriLankaDate(request.proposedOut)} ${formatSriLankaTime(request.proposedOut)}`
            : "No change"}
        </p>

        {request.reviewedBy && (
          <p>
            <strong>Reviewed by:</strong> {request.reviewedBy.email}
          </p>
        )}

        {request.reviewedAt && (
          <p>
            <strong>Reviewed on:</strong>{" "}
            {formatSriLankaDate(request.reviewedAt)}{" "}
            {formatSriLankaTime(request.reviewedAt)}
          </p>
        )}

        {request.reviewNote && (
          <p>
            <strong>Review note:</strong> {request.reviewNote}
          </p>
        )}

        {canTakeAction && (
          <>
            <div className="form-group">
              <label htmlFor={`review-note-${request.id}`}>
                Review Note (optional)
              </label>
              <textarea
                id={`review-note-${request.id}`}
                rows={2}
                value={reviewNotes[request.id] ?? ""}
                onChange={(event) =>
                  setReviewNotes((previous) => ({
                    ...previous,
                    [request.id]: event.target.value,
                  }))
                }
                placeholder="Explain your decision to the employee..."
              />
            </div>

            <div className="actions">
              <button
                type="button"
                className="success"
                disabled={reviewingId === request.id}
                onClick={() =>
                  void handleReviewCorrection(request.id, "APPROVED")
                }
              >
                {reviewingId === request.id ? "Please wait..." : "Approve"}
              </button>

              <button
                type="button"
                className="danger"
                disabled={reviewingId === request.id}
                onClick={() =>
                  void handleReviewCorrection(request.id, "REJECTED")
                }
              >
                {reviewingId === request.id ? "Please wait..." : "Reject"}
              </button>
            </div>
          </>
        )}
      </article>
    );
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>AttendEase</h2>
        <p className="sidebar-label">WORKSPACE</p>

        <nav>
          <a
            href="#dashboard"
            className={currentPage === "dashboard" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              goToPage("dashboard");
            }}
          >
            Dashboard
          </a>

          <a
            href="#history"
            className={currentPage === "history" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              goToPage("history");
            }}
          >
            Attendance History
          </a>

          <a
            href="#corrections"
            className={currentPage === "corrections" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              goToPage("corrections");
            }}
          >
            {canReview ? "Correction Management" : "Correction Requests"}
          </a>

          <a
            href="#reports"
            className={currentPage === "reports" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              goToPage("reports");
            }}
          >
            Reports
          </a>
        </nav>

        <div className="sidebar-bottom">
          <p>Attendance Management</p>
          <small>Version 1.0</small>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">
              {canReview ? "ADMINISTRATION WORKSPACE" : "EMPLOYEE WORKSPACE"}
            </p>
            <h1>
              {currentPage === "dashboard" && "Attendance Dashboard"}
              {currentPage === "history" && "Attendance History"}
              {currentPage === "corrections" &&
                (canReview ? "Correction Management" : "Correction Requests")}
              {currentPage === "reports" && "Attendance Reports"}
            </h1>
          </div>

          <div className="profile">
            <div className="avatar">
              {role === "ADMIN" ? "A" : role === "MANAGER" ? "M" : "E"}
            </div>
            <div>
              <strong>
                {role === "ADMIN"
                  ? "Administrator"
                  : role === "MANAGER"
                    ? "Manager"
                    : "Employee"}
              </strong>
              <p>{role || "Team Member"}</p>
            </div>
            <button type="button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </header>

        {error && <p className="notice">{error}</p>}
        {message && <p className="notice">{message}</p>}

        {!canReview && notifications.length > 0 && (
          <section className="panel notification-panel">
            <div className="section-heading">
              <h3>Notifications</h3>
              <button
                type="button"
                onClick={() => setNotifications([])}
              >
                Clear
              </button>
            </div>

            {notifications.map((notification) => (
              <div
                className={`notification-item status-${notification.status.toLowerCase()}`}
                key={notification.id}
              >
                <strong>{notification.status}</strong>
                <p>{notification.text}</p>
                <button
                  type="button"
                  onClick={() =>
                    setNotifications((previous) =>
                      previous.filter((item) => item.id !== notification.id),
                    )
                  }
                >
                  Dismiss
                </button>
              </div>
            ))}
          </section>
        )}

        {currentPage === "dashboard" && (
          <>
            <section className="welcome">
              <div>
                <p>YOUR DAILY OVERVIEW</p>
                <h2>
                  {canReview
                    ? "Welcome to the administration workspace"
                    : "Welcome to your workspace"}
                </h2>
                <span>Manage your working hours and attendance.</span>
              </div>

              <div className="date">
                {new Intl.DateTimeFormat("en-LK", {
                  timeZone: "Asia/Colombo",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date())}
              </div>
            </section>

            <section className="stats">
              <article className="stat-card">
                <span>Today's Status</span>
                <h2>
                  {activeSession
                    ? "Clocked In"
                    : latestSession?.status === "COMPLETED"
                      ? "Completed"
                      : "Not Clocked In"}
                </h2>
                <small>
                  {loading ? "Loading attendance..." : "Sri Lanka local time"}
                </small>
              </article>

              <article className="stat-card">
                <span>Clock In</span>
                <h2>
                  {latestSession
                    ? formatSriLankaTime(latestSession.clockInAt)
                    : "--:--"}
                </h2>
                <small>Today's recorded start time</small>
              </article>

              <article className="stat-card">
                <span>Worked Hours</span>
                <h2>{formatDuration(workedMinutes)}</h2>
                <small>Working duration (HH:MM)</small>
              </article>

              <article className="stat-card">
                <span>Break Duration</span>
                <h2>
                  {formatDuration(
                    activeSession?.breakMinutes ??
                      latestSession?.breakMinutes ??
                      0,
                  )}
                </h2>
                <small>Recorded break time</small>
              </article>
            </section>

            <section className="content-grid">
              <article className="panel">
                <h3>Attendance Actions</h3>
                <p className="muted">
                  Record your attendance using the connected backend.
                </p>

                <div className="actions">
                  <button
                    type="button"
                    className="primary"
                    disabled={actionLoading || loading || !!activeSession}
                    onClick={() => void handleAttendanceAction("clock-in")}
                  >
                    {actionLoading ? "Please wait..." : "Clock In"}
                  </button>

                  <button
                    type="button"
                    className="danger"
                    disabled={actionLoading || loading || !activeSession}
                    onClick={() => void handleAttendanceAction("clock-out")}
                  >
                    {actionLoading ? "Please wait..." : "Clock Out"}
                  </button>

                  <button
                    type="button"
                    className="success"
                    disabled={
                      breakLoading || loading || !activeSession || activeBreak
                    }
                    onClick={() => void handleBreakAction("start")}
                  >
                    {breakLoading ? "Please wait..." : "Start Break"}
                  </button>

                  <button
                    type="button"
                    className="warning"
                    disabled={
                      breakLoading || loading || !activeSession || !activeBreak
                    }
                    onClick={() => void handleBreakAction("end")}
                  >
                    {breakLoading ? "Please wait..." : "End Break"}
                  </button>
                </div>

                <p className="notice">
                  {activeSession
                    ? activeBreak
                      ? "You are currently on a break."
                      : "You are currently clocked in."
                    : "Clock in to start recording your work time."}
                </p>
              </article>

              <article className="panel">
                <h3>Today's Schedule</h3>
                <div className="schedule-row">
                  <span>Shift Start</span>
                  <strong>08:30 AM</strong>
                </div>
                <div className="schedule-row">
                  <span>Shift End</span>
                  <strong>05:00 PM</strong>
                </div>
                <div className="schedule-row">
                  <span>Expected Hours</span>
                  <strong>8 hours</strong>
                </div>
                <p className="muted">
                  Example schedule. Actual shifts will come from the database.
                </p>
              </article>
            </section>

            <section className="panel">
              <h3>Recent Attendance</h3>
              <p className="muted">
                Your latest attendance sessions are shown here.
              </p>

              {loading ? (
                <p className="muted">Loading attendance...</p>
              ) : todaySessions.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">◷</div>
                  <strong>No attendance records today</strong>
                  <p>Clock in to create today's attendance record.</p>
                </div>
              ) : (
                todaySessions.slice(0, 3).map((session) => (
                  <div className="schedule-row" key={session.id}>
                    <span>
                      {formatSriLankaDate(session.clockInAt)}
                      <br />
                      <small>
                        {formatSriLankaTime(session.clockInAt)} –{" "}
                        {formatSriLankaTime(session.clockOutAt)}
                      </small>
                    </span>
                    <strong>
                      {session.status === "IN_PROGRESS"
                        ? "In Progress"
                        : session.status === "COMPLETED"
                          ? formatDuration(session.netMinutes)
                          : "Incomplete"}
                    </strong>
                  </div>
                ))
              )}

              <button
                type="button"
                onClick={() => goToPage("history")}
              >
                View Full Attendance History
              </button>
            </section>
          </>
        )}

        {currentPage === "history" && (
          <section className="panel history-panel">
            <h2>Attendance History</h2>
            <p className="muted">
              Your recorded attendance sessions in Sri Lankan time.
            </p>

            {loading ? (
              <p className="muted">Loading attendance records...</p>
            ) : attendance.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">◷</div>
                <strong>No attendance records yet</strong>
                <p>Your records will appear here after you clock in.</p>
              </div>
            ) : (
              attendance.map((session) => (
                <div className="schedule-row" key={session.id}>
                  <span>
                    <strong>{formatSriLankaDate(session.clockInAt)}</strong>
                    <br />
                    <small>
                      Clock In: {formatSriLankaTime(session.clockInAt)}
                    </small>
                    <br />
                    <small>
                      Clock Out: {formatSriLankaTime(session.clockOutAt)}
                    </small>
                  </span>

                  <span>
                    <strong>
                      {session.status === "IN_PROGRESS"
                        ? "In Progress"
                        : session.status === "COMPLETED"
                          ? "Completed"
                          : "Incomplete"}
                    </strong>
                    <br />
                    <small>Net: {formatDuration(session.netMinutes)}</small>
                    <br />
                    <small>Break: {formatDuration(session.breakMinutes)}</small>
                  </span>

                  {!canReview && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedSessionId(session.id);
                        setCorrectionReason("");
                        setProposedIn("");
                        setProposedOut("");
                        goToPage("corrections");
                      }}
                    >
                      Request Correction
                    </button>
                  )}
                </div>
              ))
            )}

            <button
              type="button"
              onClick={() => void loadAttendance()}
              disabled={loading}
            >
              {loading ? "Refreshing..." : "Refresh History"}
            </button>
          </section>
        )}

        {currentPage === "corrections" && (
          <>
            {!canReview && (
              <>
                <section className="panel">
                  <h2>Submit a Correction Request</h2>
                  <p className="muted">
                    Select an attendance session and explain what needs to be
                    corrected. Proposed times are optional.
                  </p>

                  <form onSubmit={handleCreateCorrection}>
                    <div className="form-group">
                      <label htmlFor="correction-session">
                        Attendance Session
                      </label>
                      <select
                        id="correction-session"
                        value={selectedSessionId}
                        onChange={(event) =>
                          setSelectedSessionId(event.target.value)
                        }
                        required
                      >
                        <option value="">Select an attendance session</option>
                        {attendance.map((session) => (
                          <option key={session.id} value={session.id}>
                            {formatSriLankaDate(session.clockInAt)} —{" "}
                            {formatSriLankaTime(session.clockInAt)} to{" "}
                            {formatSriLankaTime(session.clockOutAt)} (
                            {session.status})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="proposed-in">
                        Proposed Clock-In (optional)
                      </label>
                      <input
                        id="proposed-in"
                        type="datetime-local"
                        value={proposedIn}
                        onChange={(event) => setProposedIn(event.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="proposed-out">
                        Proposed Clock-Out (optional)
                      </label>
                      <input
                        id="proposed-out"
                        type="datetime-local"
                        value={proposedOut}
                        onChange={(event) => setProposedOut(event.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="correction-reason">Reason</label>
                      <textarea
                        id="correction-reason"
                        value={correctionReason}
                        onChange={(event) =>
                          setCorrectionReason(event.target.value)
                        }
                        placeholder="Explain why your attendance needs correction..."
                        rows={4}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={
                        correctionSubmitting || attendance.length === 0
                      }
                    >
                      {correctionSubmitting
                        ? "Submitting..."
                        : "Submit Correction Request"}
                    </button>
                  </form>
                </section>

                <section className="panel">
                  <div className="section-heading">
                    <div>
                      <h2>My Correction Requests</h2>
                      <p className="muted">
                        Track your submitted requests and review decisions.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => void loadMyRequests()}
                    >
                      Refresh
                    </button>
                  </div>

                  {myRequests.length === 0 ? (
                    <div className="empty-state">
                      <strong>No correction requests yet</strong>
                      <p>Your submitted requests will appear here.</p>
                    </div>
                  ) : (
                    myRequests.map((request) => (
                      <article className="correction-card" key={request.id}>
                        <div className="section-heading">
                          <strong>
                            Submitted {formatSriLankaDate(request.createdAt)}
                          </strong>
                          <span
                            className={`status-badge status-${request.status.toLowerCase()}`}
                          >
                            {request.status}
                          </span>
                        </div>

                        <p>
                          <strong>Reason:</strong> {request.reason}
                        </p>
                        <p>
                          <strong>Original clock-in:</strong>{" "}
                          {request.originalClockInAt
                            ? `${formatSriLankaDate(request.originalClockInAt)} ${formatSriLankaTime(request.originalClockInAt)}`
                            : "--"}
                        </p>
                        <p>
                          <strong>Original clock-out:</strong>{" "}
                          {request.originalClockOutAt
                            ? `${formatSriLankaDate(request.originalClockOutAt)} ${formatSriLankaTime(request.originalClockOutAt)}`
                            : "--"}
                        </p>
                        <p>
                          <strong>Proposed clock-in:</strong>{" "}
                          {request.proposedIn
                            ? `${formatSriLankaDate(request.proposedIn)} ${formatSriLankaTime(request.proposedIn)}`
                            : "No change"}
                        </p>
                        <p>
                          <strong>Proposed clock-out:</strong>{" "}
                          {request.proposedOut
                            ? `${formatSriLankaDate(request.proposedOut)} ${formatSriLankaTime(request.proposedOut)}`
                            : "No change"}
                        </p>
                        {request.reviewNote && (
                          <p>
                            <strong>Review note:</strong> {request.reviewNote}
                          </p>
                        )}
                      </article>
                    ))
                  )}
                </section>
              </>
            )}

            {canReview && (
              <>
                <section className="panel">
                  <div className="section-heading">
                    <div>
                      <h2>Pending Requests</h2>
                      <p className="muted">
                        Review and decide on employee correction requests.
                      </p>
                    </div>
                    <button
                      type="button"
                      disabled={correctionLoading}
                      onClick={() => void loadAllRequests()}
                    >
                      {correctionLoading ? "Refreshing..." : "Refresh"}
                    </button>
                  </div>

                  {correctionLoading ? (
                    <p className="muted">Loading correction requests...</p>
                  ) : pendingRequests.length === 0 ? (
                    <div className="empty-state">
                      <strong>No pending requests</strong>
                      <p>There are no requests waiting for review.</p>
                    </div>
                  ) : (
                    pendingRequests.map(renderAdminRequestCard)
                  )}
                </section>

                <section className="panel">
                  <h2>Approved Requests</h2>
                  <p className="muted">
                    Complete history of approved correction requests.
                  </p>

                  {approvedRequests.length === 0 ? (
                    <div className="empty-state">
                      <strong>No approved requests</strong>
                      <p>Approved requests will appear here.</p>
                    </div>
                  ) : (
                    approvedRequests.map(renderAdminRequestCard)
                  )}
                </section>

                <section className="panel">
                  <h2>Rejected Requests</h2>
                  <p className="muted">
                    Complete history of rejected correction requests.
                  </p>

                  {rejectedRequests.length === 0 ? (
                    <div className="empty-state">
                      <strong>No rejected requests</strong>
                      <p>Rejected requests will appear here.</p>
                    </div>
                  ) : (
                    rejectedRequests.map(renderAdminRequestCard)
                  )}
                </section>
              </>
            )}
          </>
        )}

        {currentPage === "reports" && (
          <section className="panel">
            <h2>Attendance Reports</h2>
            <p className="muted">
              Attendance reports will be available here in a later step.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
