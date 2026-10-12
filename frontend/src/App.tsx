
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



import "./App.css";
import { useCallback, useEffect, useState } from "react";
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

  const loadAttendance = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await api.get<AttendanceSession[]>(
        "/attendance/history",
      );

      setAttendance(response.data);
    } catch (err) {
      console.error("Failed to load attendance:", err);
      setError("Could not load attendance records. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) {
      void loadAttendance();
    }
  }, [token, loadAttendance]);

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

  const workedMinutes = activeSession
    ? Math.max(
        0,
        Math.floor(
          (Date.now() - new Date(activeSession.clockInAt).getTime()) / 60000,
        ) - (activeSession.breakMinutes ?? 0),
      )
    : (latestSession?.netMinutes ?? 0);

  async function handleAttendanceAction(
    action: "clock-in" | "clock-out",
  ) {
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

      if (
        typeof err === "object" &&
        err !== null &&
        "isAxiosError" in err
      ) {
        const axiosError = err as {
          response?: { data?: { message?: string | string[] } };
        };

        const serverMessage = axiosError.response?.data?.message;

        setError(
          Array.isArray(serverMessage)
            ? serverMessage.join(", ")
            : serverMessage ?? "Attendance action failed. Please try again.",
        );
      } else {
        setError("Attendance action failed. Please try again.");
      }
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

    if (
      typeof err === "object" &&
      err !== null &&
      "isAxiosError" in err
    ) {
      const axiosError = err as {
        response?: { data?: { message?: string | string[] } };
      };

      const serverMessage = axiosError.response?.data?.message;

      setError(
        Array.isArray(serverMessage)
          ? serverMessage.join(", ")
          : serverMessage ?? "Break action failed. Please try again.",
      );
    } else {
      setError("Break action failed. Please try again.");
    }
  } finally {
    setBreakLoading(false);
  }
}

  function handleLogout() {
    localStorage.removeItem("accessToken");
    setToken(null);
    setAttendance([]);
    setCurrentPage("dashboard");
    setMessage("");
    setError("");
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
              setCurrentPage("dashboard");
              setError("");
              setMessage("");
            }}
          >
            Dashboard
          </a>

          <a
            href="#history"
            className={currentPage === "history" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              setCurrentPage("history");
              setError("");
              setMessage("");
            }}
          >
            Attendance History
          </a>

          <a
            href="#corrections"
            className={currentPage === "corrections" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              setCurrentPage("corrections");
              setError("");
              setMessage("");
            }}
          >
            Correction Requests
          </a>

          <a
            href="#reports"
            className={currentPage === "reports" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              setCurrentPage("reports");
              setError("");
              setMessage("");
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
            <p className="eyebrow">EMPLOYEE WORKSPACE</p>
            <h1>
              {currentPage === "dashboard" && "Attendance Dashboard"}
              {currentPage === "history" && "Attendance History"}
              {currentPage === "corrections" && "Correction Requests"}
              {currentPage === "reports" && "Attendance Reports"}
            </h1>
          </div>

          <div className="profile">
            <div className="avatar">E</div>
            <div>
              <strong>Employee</strong>
              <p>Team Member</p>
            </div>
            <button type="button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </header>

        {error && <p className="notice">{error}</p>}
        {message && <p className="notice">{message}</p>}

        {currentPage === "dashboard" && (
          <>
            <section className="welcome">
              <div>
                <p>YOUR DAILY OVERVIEW</p>
                <h2>Welcome to your workspace</h2>
                <span>
                  Manage your working hours and attendance.
                </span>
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
                    disabled={
                      actionLoading || loading || !!activeSession
                    }
                    onClick={() => void handleAttendanceAction("clock-in")}
                  >
                    {actionLoading ? "Please wait..." : "Clock In"}
                  </button>

                  <button
                    type="button"
                    className="danger"
                    disabled={
                      actionLoading || loading || !activeSession
                    }
                    onClick={() => void handleAttendanceAction("clock-out")}
                  >
                    {actionLoading ? "Please wait..." : "Clock Out"}
                  </button>

                  
{/* <button
  type="button"
  disabled={
    breakLoading ||
    loading ||
    !activeSession ||
    !!activeSession.breaks?.some((item) => item.endedAt === null)
  }
  onClick={() => void handleBreakAction("start")}
>
  {breakLoading ? "Please wait..." : "Start Break"}
</button>

<button
  type="button"
  disabled={
    breakLoading ||
    loading ||
    !activeSession ||
    !activeSession.breaks?.some((item) => item.endedAt === null)
  }
  onClick={() => void handleBreakAction("end")}
>
  {breakLoading ? "Please wait..." : "End Break"}
</button> */}


<button
  type="button"
  className="success"
  disabled={
    breakLoading ||
    loading ||
    !activeSession ||
    !!activeSession.breaks?.some((item) => item.endedAt === null)
  }
  onClick={() => void handleBreakAction("start")}
>
  {breakLoading ? "Please wait..." : "Start Break"}
</button>

<button
  type="button"
  className="warning"
  disabled={
    breakLoading ||
    loading ||
    !activeSession ||
    !activeSession.breaks?.some((item) => item.endedAt === null)
  }
  onClick={() => void handleBreakAction("end")}
>
  {breakLoading ? "Please wait..." : "End Break"}
</button>


                </div>

                <p className="notice">
                  {activeSession
                    ? "You are currently clocked in."
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
                onClick={() => setCurrentPage("history")}
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
              All your recorded attendance sessions in Sri Lankan time.
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
                    <small>
                      Net: {formatDuration(session.netMinutes)}
                    </small>
                    <br />
                    <small>
                      Break: {formatDuration(session.breakMinutes)}
                    </small>
                  </span>
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
          <section className="panel">
            <h2>Correction Requests</h2>
            <p className="muted">
              Correction request functionality will be connected here next.
            </p>
          </section>
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
