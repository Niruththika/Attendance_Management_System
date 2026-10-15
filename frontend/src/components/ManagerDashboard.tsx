
// import { useCallback, useEffect, useState } from "react";
// import { api } from "../api/client";
// import "./ManagerDashboard.css";

// type BreakRecord = {
//   id: string;
//   startedAt: string;
//   endedAt: string | null;
//   breakType: "PAID" | "UNPAID";
// };

// type AttendanceRecord = {
//   sessionId: string | null;
//   employee: {
//     id: string;
//     employeeCode: string;
//     name: string;
//     email: string;
//     status: string;
//     team: { name: string } | null;
//   };
//   clockInAt: string | null;
//   clockOutAt: string | null;
//   status: string;
//   isCurrentlyWorking: boolean;
//   isOnBreak?: boolean;
//   grossMinutes: number;
//   breakMinutes: number;
//   netMinutes: number;
//   breaks: BreakRecord[];
// };

// type DashboardResponse = {
//   date: string;
//   timezone: string;
//   totalEmployees?: number;
//   totalRecords: number;
//   currentlyWorking: number;
//   onBreak?: number;
//   completed: number;
//   notClockedIn?: number;
//   totalNetMinutes?: number;
//   records: AttendanceRecord[];
// };

// const getToday = () => {
//   const parts = new Intl.DateTimeFormat("en-CA", {
//     timeZone: "Asia/Colombo",
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }).formatToParts(new Date());

//   const values: Record<string, string> = {};

//   for (const part of parts) {
//     if (part.type !== "literal") values[part.type] = part.value;
//   }

//   return `${values.year}-${values.month}-${values.day}`;
// };

// const formatTime = (value: string | null) => {
//   if (!value) return "--:--";

//   return new Intl.DateTimeFormat("en-LK", {
//     timeZone: "Asia/Colombo",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   }).format(new Date(value));
// };

// const formatDuration = (minutes: number) => {
//   const safeMinutes = Math.max(0, minutes || 0);
//   const hours = Math.floor(safeMinutes / 60);
//   const remainingMinutes = safeMinutes % 60;

//   return `${String(hours).padStart(2, "0")}:${String(
//     remainingMinutes,
//   ).padStart(2, "0")}`;
// };

// const getErrorMessage = (error: unknown): string => {
//   const err = error as {
//     response?: {
//       status?: number;
//       data?: { message?: string | string[] };
//     };
//     message?: string;
//   };

//   const status = err.response?.status;
//   const serverMessage = err.response?.data?.message;

//   if (Array.isArray(serverMessage)) return serverMessage.join(", ");
//   if (serverMessage) return serverMessage;

//   if (status === 401) {
//     return "Your session has expired. Please log in again.";
//   }

//   if (status === 403) {
//     return "You are not authorized to view this dashboard.";
//   }

//   if (status === 404) {
//     return "Manager attendance API not found. Check the backend route.";
//   }

//   if (status && status >= 500) {
//     return "The backend encountered an error. Check the NestJS terminal.";
//   }

//   return err.message || "Unable to load attendance.";
// };

// const getStatus = (record: AttendanceRecord) => {
//   if (!record.sessionId || !record.clockInAt) {
//     return "Not Clocked In";
//   }

//   if (record.clockOutAt) {
//     return record.status === "INCOMPLETE" ? "Incomplete" : "Completed";
//   }

//   if (
//     record.isOnBreak ||
//     record.breaks?.some((item) => item.endedAt === null)
//   ) {
//     return "On Break";
//   }

//   return "Working";
// };

// const statusClass = (status: string) => {
//   switch (status) {
//     case "Working":
//       return "manager-status manager-status-working";
//     case "On Break":
//       return "manager-status manager-status-break";
//     case "Completed":
//       return "manager-status manager-status-completed";
//     case "Incomplete":
//       return "manager-status manager-status-incomplete";
//     default:
//       return "manager-status manager-status-absent";
//   }
// };

// export default function ManagerDashboard() {
//   const [selectedDate, setSelectedDate] = useState(getToday);
//   const [report, setReport] = useState<DashboardResponse | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [lastUpdated, setLastUpdated] = useState("");

//   const loadDashboard = useCallback(async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await api.get<DashboardResponse>(
//         "/attendance/manager/daily",
//         { params: { date: selectedDate } },
//       );

//       setReport(response.data);
//       setLastUpdated(
//         new Intl.DateTimeFormat("en-LK", {
//           timeZone: "Asia/Colombo",
//           hour: "2-digit",
//           minute: "2-digit",
//           second: "2-digit",
//         }).format(new Date()),
//       );
//     } catch (err: unknown) {
//       setError(getErrorMessage(err));
//       setReport(null);
//       console.error("Manager dashboard request failed:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [selectedDate]);

//   useEffect(() => {
//     void loadDashboard();
//   }, [loadDashboard]);

//   const records = report?.records ?? [];

//   const assignedEmployees =
//     report?.totalEmployees ?? records.length;

//   const working =
//     report?.currentlyWorking ??
//     records.filter((record) => getStatus(record) === "Working").length;

//   const onBreak =
//     report?.onBreak ??
//     records.filter((record) => getStatus(record) === "On Break").length;

//   const notClockedIn =
//     report?.notClockedIn ??
//     records.filter((record) => getStatus(record) === "Not Clocked In").length;

//   const totalGrossMinutes = records.reduce(
//   (total, record) => total + (record.grossMinutes ?? 0),
//   0,
// );

// const totalBreakMinutes = records.reduce(
//   (total, record) => total + (record.breakMinutes ?? 0),
//   0,
// );

// const totalNetMinutes =
//   report?.totalNetMinutes ??
//   records.reduce(
//     (total, record) => total + (record.netMinutes ?? 0),
//     0,
//   );
//   return (
//     <div className="manager-dashboard">
//       <header className="manager-dashboard-header">
//         <div>
//           <p className="manager-eyebrow">MANAGER WORKSPACE</p>
//           <h1>Team Attendance Overview</h1>
//           <p>
//             Review attendance, breaks, and working hours for your assigned team.
//           </p>
//         </div>
//       </header>

//       <section className="manager-panel">
//         <div className="manager-panel-heading">
//           <div>
//             <h2>Daily Employee Attendance</h2>
//             <p>View attendance for employees assigned to you.</p>
//           </div>
//         </div>

//         <div className="manager-toolbar">
//           <label className="manager-date-field">
//             <span>Attendance date</span>
//             <input
//               type="date"
//               value={selectedDate}
//               max={getToday()}
//               onChange={(event) => setSelectedDate(event.target.value)}
//             />
//           </label>

//           <button
//             type="button"
//             className="manager-refresh-button"
//             onClick={() => void loadDashboard()}
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Refresh"}
//           </button>
//         </div>

//         {error && (
//           <div className="manager-error" role="alert">
//             <strong>Unable to load dashboard</strong>
//             <p>{error}</p>
//             <button
//               type="button"
//               onClick={() => void loadDashboard()}
//               disabled={loading}
//             >
//               Try again
//             </button>
//           </div>
//         )}

//         <div className="manager-stats">
//           <article className="manager-stat-card">
//             <span>Assigned Employees</span>
//             <strong>{loading && !report ? "—" : assignedEmployees}</strong>
//           </article>

//           <article className="manager-stat-card">
//             <span>Currently Working</span>
//             <strong>{loading && !report ? "—" : working}</strong>
//           </article>

//           <article className="manager-stat-card">
//             <span>On Break</span>
//             <strong>{loading && !report ? "—" : onBreak}</strong>
//           </article>

//           <article className="manager-stat-card">
//             <span>Not Clocked In</span>
//             <strong>{loading && !report ? "—" : notClockedIn}</strong>
//           </article>
//         </div>

       
// <div className="manager-summary">
//   <div>
//     <span>Total Gross Working Time</span>
//     <strong>{formatDuration(totalGrossMinutes)}</strong>
//   </div>

//   <div>
//     <span>Total Break Time</span>
//     <strong>{formatDuration(totalBreakMinutes)}</strong>
//   </div>

//   <div>
//     <span>Total Net Working Time</span>
//     <strong>{formatDuration(totalNetMinutes)}</strong>
//   </div>

//   <div>
//     <span>Completed Sessions</span>
//     <strong>{report?.completed ?? 0}</strong>
//   </div>

//   <div>
//     <span>Last Updated</span>
//     <strong>{lastUpdated || "—"}</strong>
//   </div>
// </div>


//         <div className="manager-table-heading">
//           <h3>Employee Records</h3>
//           <span>{records.length} record(s)</span>
//         </div>

//         {loading && (
//           <p className="manager-loading" role="status">
//             Loading team attendance...
//           </p>
//         )}

//         {!loading && !error && assignedEmployees === 0 && (
//           <div className="manager-empty">
//             <h3>No employees are assigned to your account.</h3>
//             <p>
//               Ask an administrator to assign employees to your manager account
//               in Employee Management.
//             </p>
//           </div>
//         )}

//         {!loading && !error && assignedEmployees > 0 && records.length === 0 && (
//           <div className="manager-empty">
//             <h3>No attendance records found.</h3>
//             <p>
//               There are no attendance records for the selected date.
//             </p>
//           </div>
//         )}

//         {!error && records.length > 0 && (
//           <div className="manager-table-wrapper">
//             <table className="manager-table">
//               <thead>
//                 <tr>
//                   <th>Employee</th>
//                   <th>Code</th>
//                   <th>Team</th>
//                   <th>Clock In</th>
//                   <th>Clock Out</th>
//                   <th>Gross</th>
//                   <th>Break</th>
//                   <th>Net</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {records.map((record) => {
//                   const status = getStatus(record);

//                   return (
//                     <tr key={record.employee.id}>
//                       <td>
//                         <div className="manager-employee-name">
//                           {record.employee.name}
//                         </div>
//                         <div className="manager-employee-email">
//                           {record.employee.email}
//                         </div>
//                       </td>

//                       <td>{record.employee.employeeCode}</td>
//                       <td>{record.employee.team?.name ?? "No team"}</td>
//                       <td>{formatTime(record.clockInAt)}</td>
//                       <td>{formatTime(record.clockOutAt)}</td>
//                       <td>{formatDuration(record.grossMinutes)}</td>
//                       <td>{formatDuration(record.breakMinutes)}</td>
//                       <td className="manager-net-time">
//                         {formatDuration(record.netMinutes)}
//                       </td>
//                       <td>
//                         <span className={statusClass(status)}>{status}</span>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}

//         <p className="manager-footnote">
//           Times are displayed in Sri Lanka time. Net working time is gross
//           time minus unpaid breaks.
//         </p>
//       </section>
//     </div>
//   );
// }

import { useCallback, useEffect, useState } from "react";
import { api } from "../api/client";

type BreakRecord = {
  id: string;
  startedAt: string;
  endedAt: string | null;
  breakType: "PAID" | "UNPAID";
};

type AttendanceRecord = {
  sessionId: string | null;
  employee: {
    id: string;
    employeeCode: string;
    name: string;
    email: string;
    status: string;
    team: { name: string } | null;
  };
  clockInAt: string | null;
  clockOutAt: string | null;
  status: string;
  isCurrentlyWorking: boolean;
  isOnBreak?: boolean;
  grossMinutes: number;
  breakMinutes: number;
  netMinutes: number;
  breaks: BreakRecord[];
};

type DashboardResponse = {
  date: string;
  timezone: string;
  totalEmployees?: number;
  totalRecords: number;
  currentlyWorking: number;
  onBreak?: number;
  completed: number;
  notClockedIn?: number;
  totalNetMinutes?: number;
  records: AttendanceRecord[];
};

function getToday(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const result: Record<string, string> = {};
  parts.forEach((part) => {
    if (part.type !== "literal") result[part.type] = part.value;
  });

  return `${result.year}-${result.month}-${result.day}`;
}

function formatTime(value: string | null): string {
  if (!value) return "--:--";

  return new Intl.DateTimeFormat("en-LK", {
    timeZone: "Asia/Colombo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(value));
}

function formatDuration(minutes: number): string {
  const safeMinutes = Math.max(0, minutes || 0);
  const hours = Math.floor(safeMinutes / 60);
  const mins = safeMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

function getRecordStatus(record: AttendanceRecord): string {
  if (!record.sessionId || !record.clockInAt) return "Not Clocked In";
  if (record.clockOutAt) {
    return record.status === "INCOMPLETE" ? "Incomplete" : "Completed";
  }

  if (
    record.isOnBreak ||
    record.breaks?.some((item) => item.endedAt === null)
  ) {
    return "On Break";
  }

  return "Working";
}

export default function ManagerDashboard() {
  const today = getToday();
  const [selectedDate, setSelectedDate] = useState(today);
  const [report, setReport] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await api.get<DashboardResponse>(
        "/attendance/manager/daily",
        { params: { date: selectedDate } },
      );
      setReport(response.data);
    } catch (err: unknown) {
      const errorResponse = err as {
        response?: { data?: { message?: string | string[] } };
        message?: string;
      };

      const message = errorResponse.response?.data?.message;
      setError(
        Array.isArray(message)
          ? message.join(", ")
          : message || errorResponse.message || "Unable to load attendance.",
      );
    } finally {
      setLoading(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    void loadDashboard();
  }, [loadDashboard]);

  const records = report?.records ?? [];

  const totalEmployees = report?.totalEmployees ?? records.length;

  const currentlyWorking =
    report?.currentlyWorking ??
    records.filter((record) => getRecordStatus(record) === "Working").length;

  const onBreak =
    report?.onBreak ??
    records.filter((record) => getRecordStatus(record) === "On Break").length;

  const notClockedIn =
    report?.notClockedIn ??
    records.filter(
      (record) => getRecordStatus(record) === "Not Clocked In",
    ).length;

  const totalGrossMinutes = records.reduce(
    (sum, record) => sum + (record.grossMinutes ?? 0),
    0,
  );

  const totalBreakMinutes = records.reduce(
    (sum, record) => sum + (record.breakMinutes ?? 0),
    0,
  );

  const totalNetMinutes =
    report?.totalNetMinutes ??
    records.reduce((sum, record) => sum + (record.netMinutes ?? 0), 0);

  const completed = report?.completed ?? 0;

  return (
    <>
      <section className="welcome">
        <div>
          <p>MANAGER WORKSPACE</p>
          <h2>Team Attendance Overview</h2>
          <span>
            Review attendance, breaks, and working hours for your assigned team.
          </span>
        </div>

        <div className="date">
          {new Intl.DateTimeFormat("en-LK", {
            timeZone: "Asia/Colombo",
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(new Date(`${selectedDate}T12:00:00+05:30`))}
        </div>
      </section>

      <section className="panel">
        <div className="admin-report-toolbar">
          <div>
            <h2>Daily Employee Attendance</h2>
            <p className="muted">
              View attendance for employees assigned to you.
            </p>
          </div>

          <div className="form-group admin-date-field">
            <label htmlFor="manager-attendance-date">Attendance date</label>
            <input
              id="manager-attendance-date"
              type="date"
              value={selectedDate}
              max={today}
              onChange={(event) => setSelectedDate(event.target.value)}
            />
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={() => void loadDashboard()}
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {error && (
          <p className="notice" role="alert">
            {error}
          </p>
        )}

        <section className="stats admin-report-stats">
          <article className="stat-card">
            <span>Assigned Employees</span>
            <h2>{totalEmployees}</h2>
          </article>

          <article className="stat-card">
            <span>Currently Working</span>
            <h2>{currentlyWorking}</h2>
          </article>

          <article className="stat-card">
            <span>On Break</span>
            <h2>{onBreak}</h2>
          </article>

          <article className="stat-card">
            <span>Not Clocked In</span>
            <h2>{notClockedIn}</h2>
          </article>
        </section>

        <section className="stats admin-report-stats">
          <article className="stat-card">
            <span>Total Gross Working Time</span>
            <h2>{formatDuration(totalGrossMinutes)}</h2>
          </article>

          <article className="stat-card">
            <span>Total Break Time</span>
            <h2>{formatDuration(totalBreakMinutes)}</h2>
          </article>

          <article className="stat-card">
            <span>Total Net Working Time</span>
            <h2>{formatDuration(totalNetMinutes)}</h2>
          </article>

          <article className="stat-card">
            <span>Completed Sessions</span>
            <h2>{completed}</h2>
          </article>
        </section>

        {loading && !report ? (
          <p className="muted">Loading attendance records...</p>
        ) : error ? null : totalEmployees === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">◷</div>
            <strong>No employees are assigned to your account.</strong>
            <p>
              Ask an administrator to assign employees to your manager account.
            </p>
          </div>
        ) : records.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">◷</div>
            <strong>No attendance records for {selectedDate}</strong>
            <p>No attendance records were returned for this date.</p>
          </div>
        ) : (
          <>
            <div className="attendance-table-wrapper">
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>Employee Code</th>
                    <th>Employee Name</th>
                    <th>Email</th>
                    <th>Team</th>
                    <th>Clock In</th>
                    <th>Clock Out</th>
                    <th>Gross Time</th>
                    <th>Break Time</th>
                    <th>Net Working Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {records.map((record) => {
                    const status = getRecordStatus(record);

                    return (
                      <tr
                        key={record.sessionId ?? record.employee.id}
                      >
                        <td>{record.employee.employeeCode}</td>
                        <td>
                          <strong>{record.employee.name}</strong>
                        </td>
                        <td>{record.employee.email}</td>
                        <td>{record.employee.team?.name ?? "Unassigned"}</td>
                        <td>{formatTime(record.clockInAt)}</td>
                        <td>{formatTime(record.clockOutAt)}</td>
                        <td>{formatDuration(record.grossMinutes)}</td>
                        <td>{formatDuration(record.breakMinutes)}</td>
                        <td>
                          <strong>{formatDuration(record.netMinutes)}</strong>
                        </td>
                        <td>
                          <span
                            className={`status-badge status-${status
                              .toLowerCase()
                              .replaceAll(" ", "-")}`}
                          >
                            {status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                <tfoot>
                  <tr>
                    <th colSpan={6}>Daily totals</th>
                    <th>{formatDuration(totalGrossMinutes)}</th>
                    <th>{formatDuration(totalBreakMinutes)}</th>
                    <th>{formatDuration(totalNetMinutes)}</th>
                    <th />
                  </tr>
                </tfoot>
              </table>
            </div>

            <p className="muted admin-report-footnote">
              Times are shown in Sri Lanka time. Gross time is elapsed time
              from clock-in to clock-out, or now for an active session.
              Break time includes unpaid breaks only. Net time is gross time
              minus unpaid breaks.
            </p>
          </>
        )}
      </section>
    </>
  );
}
