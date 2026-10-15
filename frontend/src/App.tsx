
// import "./App.css";
// import { useCallback, useEffect, useRef, useState } from "react";
// import Login from "./components/Login";
// import { api } from "./api/client";
// import ReportsPage from "./components/ReportsPage";
// import Register from "./components/Register";
// import AdminRegister from "./components/AdminRegister";
// import LandingPage from "./components/LandingPage";

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

// type AdminAttendanceRecord = {
//   sessionId: string;
//   employee: {
//     id: string;
//     employeeCode: string;
//     name: string;
//     email: string;
//     status: string;
//     team: { name: string } | null;
//   };
//   clockInAt: string;
//   clockOutAt: string | null;
//   status: "IN_PROGRESS" | "COMPLETED" | "INCOMPLETE";
//   isCurrentlyWorking: boolean;
//   grossMinutes: number;
//   breakMinutes: number;
//   netMinutes: number;
//   breaks: BreakRecord[];
// };

// type AdminDailyAttendance = {
//   date: string;
//   timezone: string;
//   totalRecords: number;
//   currentlyWorking: number;
//   completed: number;
//   records: AdminAttendanceRecord[];
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
//   reviewedBy?: {
//     id: string;
//     email: string;
//     role: string;
//   } | null;
// };

// type Page = "dashboard" | "history" | "corrections" | "reports" | "adminRegister";
// type RequestStatus = "PENDING" | "APPROVED" | "REJECTED";

// function getSriLankaToday() {
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
// }

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
//   if (minutes === null || !Number.isFinite(minutes)) return "00:00";
//   const safeMinutes = Math.max(0, Math.floor(minutes));
//   const hours = Math.floor(safeMinutes / 60);
//   const remainingMinutes = safeMinutes % 60;
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

// function getRoleFromToken(token: string | null): string {
//   if (!token) return "";
//   try {
//     const payload = token.split(".")[1];
//     if (!payload) return "";
//     const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
//     const decoded = JSON.parse(atob(base64)) as { role?: string };
//     return decoded.role ?? "";
//   } catch {
//     return "";
//   }
// }

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
//   const [showRegister, setShowRegister] = useState(false);
// const [showLanding, setShowLanding] = useState(true);
//   // Admin/manager daily attendance report state.
//   const [adminDate, setAdminDate] = useState(getSriLankaToday);
//   const [adminReport, setAdminReport] =
//     useState<AdminDailyAttendance | null>(null);
//   const [adminReportLoading, setAdminReportLoading] = useState(false);
//   const [adminReportError, setAdminReportError] = useState("");

//   // Correction request state.
//   const [myRequests, setMyRequests] = useState<CorrectionRequest[]>([]);
//   const [pendingRequests, setPendingRequests] = useState<CorrectionRequest[]>([]);
//   const [allRequests, setAllRequests] = useState<CorrectionRequest[]>([]);
//   const [requestFilter, setRequestFilter] = useState<RequestStatus>("PENDING");
//   const [notification, setNotification] = useState("");
//   const previousRequestStatuses = useRef<Record<string, string>>({});
//   const hasLoadedRequestStatuses = useRef(false);
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
//       const response = await api.get<AttendanceSession[]>("/attendance/history");
//       setAttendance(response.data);
//     } catch (err: unknown) {
//       console.error("Failed to load attendance:", err);
//       setError(
//         getErrorMessage(
//           err,
//           "Could not load attendance records. Please try again.",
//         ),
//       );
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const loadAdminDailyAttendance = useCallback(
//     async (date: string) => {
//       if (!canReview || !date) return;
//       setAdminReportLoading(true);
//       setAdminReportError("");
//       try {
//         const response = await api.get<AdminDailyAttendance>(
//           "/attendance/admin/daily",
//           { params: { date } },
//         );
//         setAdminReport(response.data);
//       } catch (err: unknown) {
//         console.error("Failed to load company daily attendance:", err);
//         setAdminReportError(
//           getErrorMessage(
//             err,
//             "Could not load company attendance. Check that the backend endpoint is configured.",
//           ),
//         );
//         setAdminReport(null);
//       } finally {
//         setAdminReportLoading(false);
//       }
//     },
//     [canReview],
//   );

//   const loadMyRequests = useCallback(async () => {
//     try {
//       const response = await api.get<CorrectionRequest[]>(
//         "/corrections/my-requests",
//       );
//       const requests = response.data;

//       if (!canReview) {
//         const nextStatuses: Record<string, string> = {};
//         for (const request of requests) {
//           nextStatuses[request.id] = request.status;
//           const previousStatus = previousRequestStatuses.current[request.id];

//           if (
//             hasLoadedRequestStatuses.current &&
//             previousStatus === "PENDING" &&
//             (request.status === "APPROVED" || request.status === "REJECTED")
//           ) {
//             setNotification(
//               `Your correction request was ${request.status.toLowerCase()}.${
//                 request.reviewNote ? ` Note: ${request.reviewNote}` : ""
//               }`,
//             );
//           }
//         }
//         previousRequestStatuses.current = nextStatuses;
//         hasLoadedRequestStatuses.current = true;
//       }

//       setMyRequests(requests);
//     } catch (err: unknown) {
//       console.error("Failed to load correction requests:", err);
//       setError(
//         getErrorMessage(err, "Could not load your correction requests."),
//       );
//     }
//   }, [canReview]);

//   const loadPendingRequests = useCallback(async () => {
//     if (!canReview) return;
//     try {
//       const response = await api.get<CorrectionRequest[]>("/corrections/pending");
//       setPendingRequests(response.data);
//     } catch (err: unknown) {
//       console.error("Failed to load pending corrections:", err);
//       setError(
//         getErrorMessage(err, "Could not load pending correction requests."),
//       );
//     }
//   }, [canReview]);

//   const loadAllRequests = useCallback(async () => {
//     if (!canReview) return;
//     try {
//       const response = await api.get<CorrectionRequest[]>("/corrections/all");
//       setAllRequests(response.data);
//     } catch (err: unknown) {
//       console.error("Failed to load all correction requests:", err);
//       setError(getErrorMessage(err, "Could not load all correction requests."));
//     }
//   }, [canReview]);

//   useEffect(() => {
//     if (token && !canReview) {
//       void loadAttendance();
//     }
//   }, [token, canReview, loadAttendance]);

//   useEffect(() => {
//     if (!token || currentPage !== "dashboard" || !canReview) return;
//     void loadAdminDailyAttendance(adminDate);
//   }, [token, currentPage, canReview, adminDate, loadAdminDailyAttendance]);

//   useEffect(() => {
//     if (token && currentPage === "corrections") {
//       setError("");
//       setCorrectionLoading(true);
//       const loadCorrectionPage = async () => {
//         try {
//           if (canReview) {
//             await Promise.all([loadPendingRequests(), loadAllRequests()]);
//           } else {
//             await loadMyRequests();
//           }
//         } finally {
//           setCorrectionLoading(false);
//         }
//       };
//       void loadCorrectionPage();
//     }
//   }, [
//     token,
//     currentPage,
//     canReview,
//     loadMyRequests,
//     loadPendingRequests,
//     loadAllRequests,
//   ]);

//   useEffect(() => {
//     if (!token || canReview) return;
//     void loadMyRequests();
//     const intervalId = window.setInterval(() => {
//       void loadMyRequests();
//     }, 15000);
//     return () => window.clearInterval(intervalId);
//   }, [token, canReview, loadMyRequests]);

 
// // if (!token) {
// //   if (showRegister) {
// //     return (
// //       <Register
// //         onBackToLogin={() => setShowRegister(false)}
// //       />
// //     );
// //   }

// //   return (
// //     <Login
// //       onLogin={setToken}
// //       onRegister={() => setShowRegister(true)}
// //     />
// //   );
// // }

// if (!token) {
//   // Show the landing page first.
//   if (showLanding) {
//     return (
//       <LandingPage
//         onLogin={() => setShowLanding(false)}
//         onSignUp={() => {
//           setShowLanding(false);
//           setShowRegister(true);
//         }}
//       />
//     );
//   }

//   // Show employee registration.
//   if (showRegister) {
//     return (
//       <Register
//         onBackToLogin={() => setShowRegister(false)}
//       />
//     );
//   }

//   // Show login.
//   return (
//     <Login
//       onLogin={setToken}
//       onRegister={() => setShowRegister(true)}
//     />
//   );
// }

//   const today = getSriLankaToday();
//   const todaySessions = attendance.filter((session) => {
//     const parts = new Intl.DateTimeFormat("en-CA", {
//       timeZone: "Asia/Colombo",
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }).formatToParts(new Date(session.clockInAt));
//     const values: Record<string, string> = {};
//     for (const part of parts) {
//       if (part.type !== "literal") values[part.type] = part.value;
//     }
//     return `${values.year}-${values.month}-${values.day}` === today;
//   });

//   const activeSession = todaySessions.find(
//     (session) =>
//       session.status === "IN_PROGRESS" && session.clockOutAt === null,
//   );
//   const latestSession = todaySessions[0];
//   const activeBreak =
//     activeSession?.breaks?.some((item) => item.endedAt === null) ?? false;
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
//         await api.post("/attendance/break/start", { breakType: "UNPAID" });
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

//   async function handleCreateCorrection(
//     event: React.FormEvent<HTMLFormElement>,
//   ) {
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
//       if (canReview) {
//         await Promise.all([loadPendingRequests(), loadAllRequests()]);
//         if (currentPage === "dashboard") {
//           await loadAdminDailyAttendance(adminDate);
//         }
//       } else {
//         await Promise.all([loadMyRequests(), loadAttendance()]);
//       }
//     } catch (err: unknown) {
//       console.error("Failed to review correction:", err);
//       setError(
//         getErrorMessage(err, "Could not review the correction request."),
//       );
//     } finally {
//       setReviewingId(null);
//     }
//   }

//   // function handleLogout() {
//   //   localStorage.removeItem("accessToken");
//   //   setToken(null);
//   //   setAttendance([]);
//   //   setMyRequests([]);
//   //   setPendingRequests([]);
//   //   setAllRequests([]);
//   //   setAdminReport(null);
//   //   setNotification("");
//   //   previousRequestStatuses.current = {};
//   //   hasLoadedRequestStatuses.current = false;
//   //   setCurrentPage("dashboard");
//   //   setMessage("");
//   //   setError("");
//   // }

  
// function handleLogout() {
//   // Remove the saved login token
//   localStorage.removeItem("accessToken");

//   // Clear the authenticated user state
//   setToken(null);

//   // Return to the landing page
//   setShowLanding(true);
//   setShowRegister(false);

//   // Reset the application page
//   setCurrentPage("dashboard");

//   // Clear attendance and correction data
//   setAttendance([]);
//   setMyRequests([]);
//   setPendingRequests([]);
//   setAllRequests([]);
//   setAdminReport(null);
//   setNotification("");

//   // Reset correction tracking
//   previousRequestStatuses.current = {};
//   hasLoadedRequestStatuses.current = false;

//   // Clear messages
//   setMessage("");
//   setError("");
// }


//   function goToPage(page: Page) {
//     setCurrentPage(page);
//     setError("");
//     setMessage("");
//   }

//   function renderCorrectionCard(request: CorrectionRequest) {
//     return (
//       <article className="correction-card" key={request.id}>
//         <div className="section-heading">
//           <strong>{request.requestedBy?.email ?? "Employee"}</strong>
//           <span className={`status-badge status-${request.status.toLowerCase()}`}>
//             {request.status}
//           </span>
//         </div>
//         <p>
//           <strong>Submitted:</strong> {formatSriLankaDate(request.createdAt)}
//         </p>
//         <p>
//           <strong>Reason:</strong> {request.reason}
//         </p>
//         <p>
//           <strong>Original clock-in:</strong>{" "}
//           {request.originalClockInAt
//             ? `${formatSriLankaDate(request.originalClockInAt)} ${formatSriLankaTime(request.originalClockInAt)}`
//             : "--"}
//         </p>
//         <p>
//           <strong>Original clock-out:</strong>{" "}
//           {request.originalClockOutAt
//             ? `${formatSriLankaDate(request.originalClockOutAt)} ${formatSriLankaTime(request.originalClockOutAt)}`
//             : "--"}
//         </p>
//         <p>
//           <strong>Proposed clock-in:</strong>{" "}
//           {request.proposedIn
//             ? `${formatSriLankaDate(request.proposedIn)} ${formatSriLankaTime(request.proposedIn)}`
//             : "No change"}
//         </p>
//         <p>
//           <strong>Proposed clock-out:</strong>{" "}
//           {request.proposedOut
//             ? `${formatSriLankaDate(request.proposedOut)} ${formatSriLankaTime(request.proposedOut)}`
//             : "No change"}
//         </p>
//         {request.reviewedBy && (
//           <p>
//             <strong>Reviewed by:</strong> {request.reviewedBy.email}
//           </p>
//         )}
//         {request.reviewedAt && (
//           <p>
//             <strong>Reviewed on:</strong>{" "}
//             {formatSriLankaDate(request.reviewedAt)}{" "}
//             {formatSriLankaTime(request.reviewedAt)}
//           </p>
//         )}
//         {request.reviewNote && (
//           <p>
//             <strong>Review note:</strong> {request.reviewNote}
//           </p>
//         )}
//         {request.status === "PENDING" && (
//           <>
//             <div className="form-group">
//               <label htmlFor={`admin-note-${request.id}`}>
//                 Review Note (optional)
//               </label>
//               <textarea
//                 id={`admin-note-${request.id}`}
//                 rows={2}
//                 value={reviewNotes[request.id] ?? ""}
//                 onChange={(event) =>
//                   setReviewNotes((previous) => ({
//                     ...previous,
//                     [request.id]: event.target.value,
//                   }))
//                 }
//                 placeholder="Explain your decision..."
//               />
//             </div>
//             <div className="actions">
//               <button
//                 type="button"
//                 className="success"
//                 disabled={reviewingId === request.id}
//                 onClick={() =>
//                   void handleReviewCorrection(request.id, "APPROVED")
//                 }
//               >
//                 {reviewingId === request.id ? "Please wait..." : "Approve"}
//               </button>
//               <button
//                 type="button"
//                 className="danger"
//                 disabled={reviewingId === request.id}
//                 onClick={() =>
//                   void handleReviewCorrection(request.id, "REJECTED")
//                 }
//               >
//                 {reviewingId === request.id ? "Please wait..." : "Reject"}
//               </button>
//             </div>
//           </>
//         )}
//       </article>
//     );
//   }

//   function renderAdminDashboard() {
//     const report = adminReport;
//     const totalGrossMinutes =
//       report?.records.reduce((sum, record) => sum + record.grossMinutes, 0) ?? 0;
//     const totalBreakMinutes =
//       report?.records.reduce((sum, record) => sum + record.breakMinutes, 0) ?? 0;
//     const totalNetMinutes =
//       report?.records.reduce((sum, record) => sum + record.netMinutes, 0) ?? 0;

//     return (
//       <>
//         <section className="welcome">
//           <div>
//             <p>ADMINISTRATION WORKSPACE</p>
//             <h2>Company Attendance Overview</h2>
//             <span>
//               Review each employee's daily attendance, breaks, and working hours.
//             </span>
//           </div>
//           <div className="date">
//             {new Intl.DateTimeFormat("en-LK", {
//               timeZone: "Asia/Colombo",
//               day: "2-digit",
//               month: "short",
//               year: "numeric",
//             }).format(new Date(`${adminDate}T12:00:00+05:30`))}
//           </div>
//         </section>

//         <section className="panel">
//           <div className="admin-report-toolbar">
//             <div>
//               <h2>Daily Employee Attendance</h2>
//               <p className="muted">
//                 Select today or a previous date to view employee records.
//               </p>
//             </div>
//             <div className="form-group admin-date-field">
//               <label htmlFor="admin-attendance-date">Attendance date</label>
//               <input
//                 id="admin-attendance-date"
//                 type="date"
//                 value={adminDate}
//                 max={today}
//                 onChange={(event) => setAdminDate(event.target.value)}
//               />
//             </div>
//             <button
//               type="button"
//               disabled={adminReportLoading}
//               onClick={() => void loadAdminDailyAttendance(adminDate)}
//             >
//               {adminReportLoading ? "Loading..." : "Refresh"}
//             </button>
//           </div>

//           {adminReportError && (
//             <p className="notice" role="alert">{adminReportError}</p>
//           )}

//           <section className="stats admin-report-stats">
//             <article className="stat-card">
//               <span>Employees With Records</span>
//               <h2>{report?.totalRecords ?? 0}</h2>
//             </article>
//             <article className="stat-card">
//               <span>Currently Working</span>
//               <h2>{report?.currentlyWorking ?? 0}</h2>
//             </article>
//             <article className="stat-card">
//               <span>Clocked Out</span>
//               <h2>{report?.completed ?? 0}</h2>
//             </article>
//             <article className="stat-card">
//               <span>Total Net Working Time</span>
//               <h2>{formatDuration(totalNetMinutes)}</h2>
//             </article>
//           </section>

//           {adminReportLoading && !report ? (
//             <p className="muted">Loading attendance records...</p>
//           ) : !report || report.records.length === 0 ? (
//             <div className="empty-state">
//               <div className="empty-icon">◷</div>
//               <strong>No attendance records for {adminDate}</strong>
//               <p>
//                 Choose another date to view records. Employees without a
//                 clock-in record are not included in this table.
//               </p>
//             </div>
//           ) : (
//             <>
//               <div className="attendance-table-wrapper">
//                 <table className="attendance-table">
//                   <thead>
//                     <tr>
//                       <th>Employee Code</th>
//                       <th>Employee Name</th>
//                       <th>Email</th>
//                       <th>Team</th>
//                       <th>Clock In</th>
//                       <th>Clock Out</th>
//                       <th>Gross Time</th>
//                       <th>Break Time</th>
//                       <th>Net Working Time</th>
//                       <th>Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {report.records.map((record) => (
//                       <tr key={record.sessionId}>
//                         <td>{record.employee.employeeCode}</td>
//                         <td>
//                           <strong>{record.employee.name}</strong>
//                         </td>
//                         <td>{record.employee.email}</td>
//                         <td>{record.employee.team?.name ?? "Unassigned"}</td>
//                         <td>{formatSriLankaTime(record.clockInAt)}</td>
//                         <td>{formatSriLankaTime(record.clockOutAt)}</td>
//                         <td>{formatDuration(record.grossMinutes)}</td>
//                         <td>{formatDuration(record.breakMinutes)}</td>
//                         <td>
//                           <strong>{formatDuration(record.netMinutes)}</strong>
//                         </td>
//                         <td>
//                           <span
//                             className={`status-badge ${
//                               record.isCurrentlyWorking
//                                 ? "status-pending"
//                                 : `status-${record.status.toLowerCase()}`
//                             }`}
//                           >
//                             {record.isCurrentlyWorking
//                               ? "Working"
//                               : record.status === "COMPLETED"
//                                 ? "Completed"
//                                 : record.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                   <tfoot>
//                     <tr>
//                       <th colSpan={6}>Daily totals</th>
//                       <th>{formatDuration(totalGrossMinutes)}</th>
//                       <th>{formatDuration(totalBreakMinutes)}</th>
//                       <th>{formatDuration(totalNetMinutes)}</th>
//                       <th />
//                     </tr>
//                   </tfoot>
//                 </table>
//               </div>
//               <p className="muted admin-report-footnote">
//                 Times are shown in Sri Lanka time. Gross time is elapsed time
//                 from clock-in to clock-out (or now for an active session).
//                 Break time includes unpaid breaks only. Net time is gross time
//                 minus unpaid breaks.
//               </p>
//             </>
//           )}
//         </section>
//       </>
//     );
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
//           {!canReview && (
//             <a
//               href="#history"
//               className={currentPage === "history" ? "active" : ""}
//               onClick={(event) => {
//                 event.preventDefault();
//                 goToPage("history");
//               }}
//             >
//               Attendance History
//             </a>
//           )}
//           <a
//             href="#corrections"
//             className={currentPage === "corrections" ? "active" : ""}
//             onClick={(event) => {
//               event.preventDefault();
//               goToPage("corrections");
//             }}
//           >
//             {canReview ? "Correction Management" : "Correction Requests"}
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
//           {role === "ADMIN" && (
//   <button onClick={() => goToPage("adminRegister")}>
//     Register Admin
//   </button>
// )}
//         </nav>
//         <div className="sidebar-bottom">
//           <p>Attendance Management</p>
//           <small>Version 1.0</small>
//         </div>
//       {/* {role === "ADMIN" && (
//   <a
//     href="#adminRegister"
//     className={currentPage === "adminRegister" ? "active" : ""}
//     onClick={(event) => {
//       event.preventDefault();
//       goToPage("adminRegister");
//     }}
//   >
//     Register Administrator
//   </a>
// )} */}


//       </aside>

//       <main className="main-content">
//         <header className="topbar">
//           <div>
//             <p className="eyebrow">
//               {canReview ? "ADMINISTRATION WORKSPACE" : "EMPLOYEE WORKSPACE"}
//             </p>
//             <h1>
//               {currentPage === "dashboard" &&
//                 (canReview ? "Admin Attendance Dashboard" : "Attendance Dashboard")}
//               {currentPage === "history" && "Attendance History"}
//               {currentPage === "corrections" &&
//                 (canReview ? "Correction Management" : "Correction Requests")}
//               {currentPage === "reports" && "Attendance Reports"}
//               {/* {currentPage === "adminRegister" && role === "ADMIN" && (
//   <AdminRegister
//     onBack={() => goToPage("dashboard")}
//   />
// )} */}
//  {currentPage === "adminRegister" && "Register Administrator"}
//             </h1>
//           </div>
//           <div className="profile">
//             <div className="avatar">
//               {role === "ADMIN" ? "A" : role === "MANAGER" ? "M" : "E"}
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
//             <button type="button" onClick={handleLogout}>Log Out</button>
//           </div>
//         </header>

//         {error && <p className="notice">{error}</p>}
//         {message && <p className="notice">{message}</p>}

//         {notification && !canReview && (
//           <div className="correction-notification" role="status">
//             <span>{notification}</span>
//             <button type="button" onClick={() => setNotification("")}>
//               Dismiss
//             </button>
//           </div>
//         )}
//         {currentPage === "adminRegister" && role === "ADMIN" && (
//   <AdminRegister
//     onBack={() => goToPage("dashboard")}
//   />
// )}

//         {currentPage === "dashboard" && (
//           canReview ? (
//             renderAdminDashboard()
//           ) : (
//             <>
//               <section className="welcome">
//                 <div>
//                   <p>YOUR DAILY OVERVIEW</p>
//                   <h2>Welcome to your workspace</h2>
//                   <span>Manage your working hours and attendance.</span>
//                 </div>
//                 <div className="date">
//                   {new Intl.DateTimeFormat("en-LK", {
//                     timeZone: "Asia/Colombo",
//                     day: "2-digit",
//                     month: "short",
//                     year: "numeric",
//                   }).format(new Date())}
//                 </div>
//               </section>

//               <section className="stats">
//                 <article className="stat-card">
//                   <span>Today's Status</span>
//                   <h2>
//                     {activeSession
//                       ? "Clocked In"
//                       : latestSession?.status === "COMPLETED"
//                         ? "Completed"
//                         : "Not Clocked In"}
//                   </h2>
//                   <small>
//                     {loading ? "Loading attendance..." : "Sri Lanka local time"}
//                   </small>
//                 </article>
//                 <article className="stat-card">
//                   <span>Clock In</span>
//                   <h2>
//                     {latestSession
//                       ? formatSriLankaTime(latestSession.clockInAt)
//                       : "--:--"}
//                   </h2>
//                   <small>Today's recorded start time</small>
//                 </article>
//                 <article className="stat-card">
//                   <span>Worked Hours</span>
//                   <h2>{formatDuration(workedMinutes)}</h2>
//                   <small>Working duration (HH:MM)</small>
//                 </article>
//                 <article className="stat-card">
//                   <span>Break Duration</span>
//                   <h2>
//                     {formatDuration(
//                       activeSession?.breakMinutes ??
//                         latestSession?.breakMinutes ??
//                         0,
//                     )}
//                   </h2>
//                   <small>Recorded break time</small>
//                 </article>
//               </section>

//               <section className="content-grid">
//                 <article className="panel">
//                   <h3>Attendance Actions</h3>
//                   <p className="muted">
//                     Record your attendance using the connected backend.
//                   </p>
//                   <div className="actions">
//                     <button
//                       type="button"
//                       className="primary"
//                       disabled={actionLoading || loading || !!activeSession}
//                       onClick={() => void handleAttendanceAction("clock-in")}
//                     >
//                       {actionLoading ? "Please wait..." : "Clock In"}
//                     </button>
//                     <button
//                       type="button"
//                       className="danger"
//                       disabled={actionLoading || loading || !activeSession}
//                       onClick={() => void handleAttendanceAction("clock-out")}
//                     >
//                       {actionLoading ? "Please wait..." : "Clock Out"}
//                     </button>
//                     <button
//                       type="button"
//                       className="success"
//                       disabled={
//                         breakLoading || loading || !activeSession || activeBreak
//                       }
//                       onClick={() => void handleBreakAction("start")}
//                     >
//                       {breakLoading ? "Please wait..." : "Start Break"}
//                     </button>
//                     <button
//                       type="button"
//                       className="warning"
//                       disabled={
//                         breakLoading || loading || !activeSession || !activeBreak
//                       }
//                       onClick={() => void handleBreakAction("end")}
//                     >
//                       {breakLoading ? "Please wait..." : "End Break"}
//                     </button>
//                   </div>
//                   <p className="notice">
//                     {activeSession
//                       ? activeBreak
//                         ? "You are currently on a break."
//                         : "You are currently clocked in."
//                       : "Clock in to start recording your work time."}
//                   </p>
//                 </article>

//                 <article className="panel">
//                   <h3>Today's Schedule</h3>
//                   <div className="schedule-row">
//                     <span>Shift Start</span>
//                     <strong>08:30 AM</strong>
//                   </div>
//                   <div className="schedule-row">
//                     <span>Shift End</span>
//                     <strong>05:00 PM</strong>
//                   </div>
//                   <div className="schedule-row">
//                     <span>Expected Hours</span>
//                     <strong>8 hours</strong>
//                   </div>
//                   <p className="muted">
//                     Example schedule. Actual shifts will come from the database.
//                   </p>
//                 </article>
//               </section>

//               <section className="panel">
//                 <h3>Recent Attendance</h3>
//                 <p className="muted">
//                   Your latest attendance sessions are shown here.
//                 </p>
//                 {loading ? (
//                   <p className="muted">Loading attendance...</p>
//                 ) : todaySessions.length === 0 ? (
//                   <div className="empty-state">
//                     <div className="empty-icon">◷</div>
//                     <strong>No attendance records today</strong>
//                     <p>Clock in to create today's attendance record.</p>
//                   </div>
//                 ) : (
//                   todaySessions.slice(0, 3).map((session) => (
//                     <div className="schedule-row" key={session.id}>
//                       <span>
//                         {formatSriLankaDate(session.clockInAt)}
//                         <br />
//                         <small>
//                           {formatSriLankaTime(session.clockInAt)} –{" "}
//                           {formatSriLankaTime(session.clockOutAt)}
//                         </small>
//                       </span>
//                       <strong>
//                         {session.status === "IN_PROGRESS"
//                           ? "In Progress"
//                           : session.status === "COMPLETED"
//                             ? formatDuration(session.netMinutes)
//                             : "Incomplete"}
//                       </strong>
//                     </div>
//                   ))
//                 )}
//                 <button type="button" onClick={() => goToPage("history")}>
//                   View Full Attendance History
//                 </button>
//               </section>
//             </>
//           )
//         )}

//         {currentPage === "history" && !canReview && (
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
//                     <small>Clock In: {formatSriLankaTime(session.clockInAt)}</small>
//                     <br />
//                     <small>Clock Out: {formatSriLankaTime(session.clockOutAt)}</small>
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
//             {!canReview && (
//               <>
//                 <section className="panel">
//                   <h2>Submit a Correction Request</h2>
//                   <p className="muted">
//                     Select an attendance session and explain what needs to be
//                     corrected. Proposed times are optional. Times entered here
//                     are interpreted as Sri Lanka local time.
//                   </p>
//                   <form onSubmit={handleCreateCorrection}>
//                     <div className="form-group">
//                       <label htmlFor="correction-session">Attendance Session</label>
//                       <select
//                         id="correction-session"
//                         value={selectedSessionId}
//                         onChange={(event) => setSelectedSessionId(event.target.value)}
//                         required
//                       >
//                         <option value="">Select an attendance session</option>
//                         {attendance.map((session) => (
//                           <option key={session.id} value={session.id}>
//                             {formatSriLankaDate(session.clockInAt)} —{" "}
//                             {formatSriLankaTime(session.clockInAt)} to{" "}
//                             {formatSriLankaTime(session.clockOutAt)} ({session.status})
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="proposed-in">Proposed Clock-In (optional)</label>
//                       <input
//                         id="proposed-in"
//                         type="datetime-local"
//                         value={proposedIn}
//                         onChange={(event) => setProposedIn(event.target.value)}
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="proposed-out">Proposed Clock-Out (optional)</label>
//                       <input
//                         id="proposed-out"
//                         type="datetime-local"
//                         value={proposedOut}
//                         onChange={(event) => setProposedOut(event.target.value)}
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="correction-reason">Reason</label>
//                       <textarea
//                         id="correction-reason"
//                         value={correctionReason}
//                         onChange={(event) => setCorrectionReason(event.target.value)}
//                         placeholder="Explain why your attendance needs correction..."
//                         rows={4}
//                         required
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       disabled={correctionSubmitting || attendance.length === 0}
//                     >
//                       {correctionSubmitting
//                         ? "Submitting..."
//                         : "Submit Correction Request"}
//                     </button>
//                     {attendance.length === 0 && (
//                       <p className="muted">No attendance sessions are available to correct.</p>
//                     )}
//                   </form>
//                 </section>

//                 <section className="panel">
//                   <div className="section-heading">
//                     <div>
//                       <h2>My Correction Requests</h2>
//                       <p className="muted">Track the status of your submitted requests.</p>
//                     </div>
//                     <button
//                       type="button"
//                       disabled={correctionLoading}
//                       onClick={async () => {
//                         setCorrectionLoading(true);
//                         await loadMyRequests();
//                         setCorrectionLoading(false);
//                       }}
//                     >
//                       {correctionLoading ? "Refreshing..." : "Refresh"}
//                     </button>
//                   </div>
//                   {correctionLoading ? (
//                     <p className="muted">Loading requests...</p>
//                   ) : myRequests.length === 0 ? (
//                     <div className="empty-state">
//                       <strong>No correction requests yet</strong>
//                       <p>Your submitted requests will appear here.</p>
//                     </div>
//                   ) : (
//                     myRequests.map(renderCorrectionCard)
//                   )}
//                 </section>
//               </>
//             )}

//             {canReview && (
//               <section className="panel">
//                 <h2>Correction Request Management</h2>
//                 <p className="muted">
//                   Review pending requests and view approved and rejected decisions.
//                 </p>
//                 <div className="actions">
//                   <button
//                     type="button"
//                     className="primary"
//                     onClick={() => setRequestFilter("PENDING")}
//                   >
//                     Pending ({allRequests.filter((r) => r.status === "PENDING").length})
//                   </button>
//                   <button
//                     type="button"
//                     className="success"
//                     onClick={() => setRequestFilter("APPROVED")}
//                   >
//                     Approved ({allRequests.filter((r) => r.status === "APPROVED").length})
//                   </button>
//                   <button
//                     type="button"
//                     className="danger"
//                     onClick={() => setRequestFilter("REJECTED")}
//                   >
//                     Rejected ({allRequests.filter((r) => r.status === "REJECTED").length})
//                   </button>
//                   <button
//                     type="button"
//                     disabled={correctionLoading}
//                     onClick={async () => {
//                       setCorrectionLoading(true);
//                       await Promise.all([loadAllRequests(), loadPendingRequests()]);
//                       setCorrectionLoading(false);
//                     }}
//                   >
//                     {correctionLoading ? "Refreshing..." : "Refresh All"}
//                   </button>
//                 </div>
//                 <h3>{requestFilter} Requests</h3>
//                 {allRequests.filter((r) => r.status === requestFilter).length === 0 ? (
//                   <div className="empty-state">
//                     <strong>No {requestFilter.toLowerCase()} requests</strong>
//                     <p>Requests in this category will appear here.</p>
//                   </div>
//                 ) : (
//                   allRequests
//                     .filter((r) => r.status === requestFilter)
//                     .map(renderCorrectionCard)
//                 )}
//               </section>
//             )}
//           </>
//         )}

//   
// {currentPage === "reports" && canReview && <ReportsPage />}
// ```
//       </main>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Login from "./components/Login";
import { api } from "./api/client";
import ReportsPage from "./components/ReportsPage";
import Register from "./components/Register";
import AdminRegister from "./components/AdminRegister";
import LandingPage from "./components/LandingPage";
import ShiftManagement from "./components/ShiftManagement";
import ManagerRegister from "./components/ManagerRegister";
import EmployeeManagement from "./components/EmployeeManagement";
import TeamManagement from "./components/TeamManagement";
import ManagerDashboard from "./components/ManagerDashboard";

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
type AssignedShift = {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  timezone: string;
  workingDays: number[];
  graceMinutes: number;
  status: "ACTIVE" | "INACTIVE";
};

type AdminAttendanceRecord = {
  sessionId: string;
  employee: {
    id: string;
    employeeCode: string;
    name: string;
    email: string;
    status: string;
    team: { name: string } | null;
  };
  clockInAt: string;
  clockOutAt: string | null;
  status: "IN_PROGRESS" | "COMPLETED" | "INCOMPLETE";
  isCurrentlyWorking: boolean;
  grossMinutes: number;
  breakMinutes: number;
  netMinutes: number;
  breaks: BreakRecord[];
};

type AdminDailyAttendance = {
  date: string;
  timezone: string;
  totalRecords: number;
  currentlyWorking: number;
  completed: number;
  records: AdminAttendanceRecord[];
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

type Page = "dashboard" | "history" | "corrections" | "reports" | "adminRegister" | "shifts" |"managerRegister" | "employees" |"teams";
type RequestStatus = "PENDING" | "APPROVED" | "REJECTED";

function getSriLankaToday() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const values: Record<string, string> = {};
  for (const part of parts) {
    if (part.type !== "literal") values[part.type] = part.value;
  }
  return `${values.year}-${values.month}-${values.day}`;
}

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
  if (minutes === null || !Number.isFinite(minutes)) return "00:00";
  const safeMinutes = Math.max(0, Math.floor(minutes));
  const hours = Math.floor(safeMinutes / 60);
  const remainingMinutes = safeMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(
    remainingMinutes,
  ).padStart(2, "0")}`;
}

function formatShiftTime(value: string): string {
  const match = value.match(/^(\d{1,2}):(\d{2})/);

  if (!match) return value;

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  return `${displayHours}:${String(minutes).padStart(2, "0")} ${period}`;
}

function getShiftDurationMinutes(
  startTime: string,
  endTime: string,
): number | null {
  const startMatch = startTime.match(/^(\d{1,2}):(\d{2})/);
  const endMatch = endTime.match(/^(\d{1,2}):(\d{2})/);

  if (!startMatch || !endMatch) return null;

  const startHours = Number(startMatch[1]);
  const startMinutes = Number(startMatch[2]);
  const endHours = Number(endMatch[1]);
  const endMinutes = Number(endMatch[2]);

  if (
    startHours > 23 ||
    endHours > 23 ||
    startMinutes > 59 ||
    endMinutes > 59
  ) {
    return null;
  }

  const start = startHours * 60 + startMinutes;
  let end = endHours * 60 + endMinutes;

  // Support overnight shifts, such as 10:00 PM–06:00 AM.
  if (end <= start) {
    end += 24 * 60;
  }

  return end - start;
}

function formatShiftDuration(minutes: number | null): string {
  if (minutes === null) return "--";

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"}`;
  }

  if (hours === 0) {
    return `${remainingMinutes} minutes`;
  }

  return `${hours}h ${remainingMinutes}m`;
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
  
const [historyFromDate, setHistoryFromDate] = useState("");
const [historyToDate, setHistoryToDate] = useState("");
const [historyStatus, setHistoryStatus] = useState("ALL");
const [historySort, setHistorySort] = useState("NEWEST");
const [historyPage, setHistoryPage] = useState(1);
const [historyPageSize, setHistoryPageSize] = useState(10);
const [expandedSessionId, setExpandedSessionId] = useState<string | null>(null);

  const [assignedShift, setAssignedShift] =
  useState<AssignedShift | null>(null);

const [shiftLoading, setShiftLoading] = useState(false);
const [shiftError, setShiftError] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [breakLoading, setBreakLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showRegister, setShowRegister] = useState(false);
const [showLanding, setShowLanding] = useState(true);
  // Admin/manager daily attendance report state.
  const [adminDate, setAdminDate] = useState(getSriLankaToday);
  const [adminReport, setAdminReport] =
    useState<AdminDailyAttendance | null>(null);
  const [adminReportLoading, setAdminReportLoading] = useState(false);
  const [adminReportError, setAdminReportError] = useState("");

  // Correction request state.
  const [myRequests, setMyRequests] = useState<CorrectionRequest[]>([]);
  const [pendingRequests, setPendingRequests] = useState<CorrectionRequest[]>([]);
  const [allRequests, setAllRequests] = useState<CorrectionRequest[]>([]);
  const [requestFilter, setRequestFilter] = useState<RequestStatus>("PENDING");
  const [notification, setNotification] = useState("");
  const previousRequestStatuses = useRef<Record<string, string>>({});
  const hasLoadedRequestStatuses = useRef(false);
  const [correctionLoading, setCorrectionLoading] = useState(false);
  const [correctionSubmitting, setCorrectionSubmitting] = useState(false);
  const [reviewingId, setReviewingId] = useState<string | null>(null);
  const [selectedSessionId, setSelectedSessionId] = useState("");
  const [correctionReason, setCorrectionReason] = useState("");
  const [proposedIn, setProposedIn] = useState("");
  const [proposedOut, setProposedOut] = useState("");
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});

 
const role = getRoleFromToken(token);

const isAdmin = role === "ADMIN";
const isManager = role === "MANAGER";
const isEmployee = role === "EMPLOYEE";

const canReview = isAdmin || isManager;


  const loadAttendance = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.get<AttendanceSession[]>("/attendance/history");
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

  
const filteredHistory = attendance
  .filter((session) => {
    // Filter by date using Sri Lanka local dates.
    const sessionDate = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Colombo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
      .formatToParts(new Date(session.clockInAt))
      .filter((part) => part.type !== "literal")
      .reduce((values, part) => {
        values[part.type] = part.value;
        return values;
      }, {} as Record<string, string>);

    const date = `${sessionDate.year}-${sessionDate.month}-${sessionDate.day}`;

    const matchesFrom = !historyFromDate || date >= historyFromDate;
    const matchesTo = !historyToDate || date <= historyToDate;
    const matchesStatus =
      historyStatus === "ALL" || session.status === historyStatus;

    return matchesFrom && matchesTo && matchesStatus;
  })
  .sort((a, b) => {
    const difference =
      new Date(a.clockInAt).getTime() -
      new Date(b.clockInAt).getTime();

    return historySort === "NEWEST" ? -difference : difference;
  });

const historyTotalPages = Math.max(
  1,
  Math.ceil(filteredHistory.length / historyPageSize),
);

const paginatedHistory = filteredHistory.slice(
  (historyPage - 1) * historyPageSize,
  historyPage * historyPageSize,
);

  const loadMyShift = useCallback(async () => {
  setShiftLoading(true);
  setShiftError("");

  try {
    const response = await api.get<AssignedShift | null>("/shifts/my");

    setAssignedShift(response.data ?? null);
  } catch (err: unknown) {
    console.error("Failed to load assigned shift:", err);

    setAssignedShift(null);
    setShiftError(
      getErrorMessage(err, "Could not load your assigned shift."),
    );
  } finally {
    setShiftLoading(false);
  }
}, []);

  // const loadAdminDailyAttendance = useCallback(
  //   async (date: string) => {
  //     if (!canReview || !date) return;
  //     setAdminReportLoading(true);
  //     setAdminReportError("");
  //     try {
  //       const response = await api.get<AdminDailyAttendance>(
  //         "/attendance/admin/daily",
  //         { params: { date } },
  //       );
  //       setAdminReport(response.data);
  //     } catch (err: unknown) {
  //       console.error("Failed to load company daily attendance:", err);
  //       setAdminReportError(
  //         getErrorMessage(
  //           err,
  //           "Could not load company attendance. Check that the backend endpoint is configured.",
  //         ),
  //       );
  //       setAdminReport(null);
  //     } finally {
  //       setAdminReportLoading(false);
  //     }
  //   },
  //   [canReview],
  // );

  
const loadAdminDailyAttendance = useCallback(
  async (date: string) => {
    if (!canReview || !date) return;

    setAdminReportLoading(true);
    setAdminReportError("");

    try {
      const endpoint = isAdmin
        ? "/attendance/admin/daily"
        : "/attendance/manager/daily";

      const response = await api.get<AdminDailyAttendance>(
        endpoint,
        { params: { date } },
      );

      setAdminReport(response.data);
    } catch (err: unknown) {
      console.error("Failed to load daily attendance:", err);

      setAdminReportError(
        getErrorMessage(
          err,
          "Could not load attendance. Please try again.",
        ),
      );

      setAdminReport(null);
    } finally {
      setAdminReportLoading(false);
    }
  },
  [canReview, isAdmin],
);

  const loadMyRequests = useCallback(async () => {
    try {
      const response = await api.get<CorrectionRequest[]>(
        "/corrections/my-requests",
      );
      const requests = response.data;

      if (!canReview) {
        const nextStatuses: Record<string, string> = {};
        for (const request of requests) {
          nextStatuses[request.id] = request.status;
          const previousStatus = previousRequestStatuses.current[request.id];

          if (
            hasLoadedRequestStatuses.current &&
            previousStatus === "PENDING" &&
            (request.status === "APPROVED" || request.status === "REJECTED")
          ) {
            setNotification(
              `Your correction request was ${request.status.toLowerCase()}.${
                request.reviewNote ? ` Note: ${request.reviewNote}` : ""
              }`,
            );
          }
        }
        previousRequestStatuses.current = nextStatuses;
        hasLoadedRequestStatuses.current = true;
      }

      setMyRequests(requests);
    } catch (err: unknown) {
      console.error("Failed to load correction requests:", err);
      setError(
        getErrorMessage(err, "Could not load your correction requests."),
      );
    }
  }, [canReview]);

  const loadPendingRequests = useCallback(async () => {
    if (!canReview) return;
    try {
      const response = await api.get<CorrectionRequest[]>("/corrections/pending");
      setPendingRequests(response.data);
    } catch (err: unknown) {
      console.error("Failed to load pending corrections:", err);
      setError(
        getErrorMessage(err, "Could not load pending correction requests."),
      );
    }
  }, [canReview]);

  const loadAllRequests = useCallback(async () => {
    if (!canReview) return;
    try {
      const response = await api.get<CorrectionRequest[]>("/corrections/all");
      setAllRequests(response.data);
    } catch (err: unknown) {
      console.error("Failed to load all correction requests:", err);
      setError(getErrorMessage(err, "Could not load all correction requests."));
    }
  }, [canReview]);

  useEffect(() => {
    if (token && !canReview) {
      void loadAttendance();
    }
  }, [token, canReview, loadAttendance]);

  useEffect(() => {
  if (token && !canReview) {
    void loadMyShift();
  } else {
    setAssignedShift(null);
    setShiftError("");
  }
}, [token, canReview, loadMyShift]);

  useEffect(() => {
    if (!token || currentPage !== "dashboard" || !canReview) return;
    void loadAdminDailyAttendance(adminDate);
  }, [token, currentPage, canReview, adminDate, loadAdminDailyAttendance]);

  useEffect(() => {
    if (token && currentPage === "corrections") {
      setError("");
      setCorrectionLoading(true);
      const loadCorrectionPage = async () => {
        try {
          if (canReview) {
            await Promise.all([loadPendingRequests(), loadAllRequests()]);
          } else {
            await loadMyRequests();
          }
        } finally {
          setCorrectionLoading(false);
        }
      };
      void loadCorrectionPage();
    }
  }, [
    token,
    currentPage,
    canReview,
    loadMyRequests,
    loadPendingRequests,
    loadAllRequests,
  ]);

  useEffect(() => {
    if (!token || canReview) return;
    void loadMyRequests();
    const intervalId = window.setInterval(() => {
      void loadMyRequests();
    }, 15000);
    return () => window.clearInterval(intervalId);
  }, [token, canReview, loadMyRequests]);

 
// if (!token) {
//   if (showRegister) {
//     return (
//       <Register
//         onBackToLogin={() => setShowRegister(false)}
//       />
//     );
//   }

//   return (
//     <Login
//       onLogin={setToken}
//       onRegister={() => setShowRegister(true)}
//     />
//   );
// }

if (!token) {
  // Show the landing page first.
  if (showLanding) {
    return (
      <LandingPage
        onLogin={() => setShowLanding(false)}
        onSignUp={() => {
          setShowLanding(false);
          setShowRegister(true);
        }}
      />
    );
  }

  // Show employee registration.
  if (showRegister) {
    return (
      <Register
        onBackToLogin={() => setShowRegister(false)}
      />
    );
  }

  // Show login.
  return (
    <Login
      onLogin={setToken}
      onRegister={() => setShowRegister(true)}
    />
  );
}

  const today = getSriLankaToday();
  const todaySessions = attendance.filter((session) => {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Colombo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(new Date(session.clockInAt));
    const values: Record<string, string> = {};
    for (const part of parts) {
      if (part.type !== "literal") values[part.type] = part.value;
    }
    return `${values.year}-${values.month}-${values.day}` === today;
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
        await api.post("/attendance/break/start", { breakType: "UNPAID" });
        setMessage("Break started successfully.");
      } else {
        await api.post("/attendance/break/end");
        setMessage("Break ended successfully.");
      }
      await loadAttendance();
    } catch (err: unknown) {
      console.error("Break action failed:", err);
      setError(getErrorMessage(err, "Break action failed. Please try again."));
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
          ? "Correction request approved."
          : "Correction request rejected.",
      );
      if (canReview) {
        await Promise.all([loadPendingRequests(), loadAllRequests()]);
        if (currentPage === "dashboard") {
          await loadAdminDailyAttendance(adminDate);
        }
      } else {
        await Promise.all([loadMyRequests(), loadAttendance()]);
      }
    } catch (err: unknown) {
      console.error("Failed to review correction:", err);
      setError(
        getErrorMessage(err, "Could not review the correction request."),
      );
    } finally {
      setReviewingId(null);
    }
  }

  // function handleLogout() {
  //   localStorage.removeItem("accessToken");
  //   setToken(null);
  //   setAttendance([]);
  //   setMyRequests([]);
  //   setPendingRequests([]);
  //   setAllRequests([]);
  //   setAdminReport(null);
  //   setNotification("");
  //   previousRequestStatuses.current = {};
  //   hasLoadedRequestStatuses.current = false;
  //   setCurrentPage("dashboard");
  //   setMessage("");
  //   setError("");
  // }

  
function handleLogout() {
  // Remove the saved login token
  localStorage.removeItem("accessToken");

  // Clear the authenticated user state
  setToken(null);

  // Return to the landing page
  setShowLanding(true);
  setShowRegister(false);

  // Reset the application page
  setCurrentPage("dashboard");

  // Clear attendance and correction data
  setAttendance([]);
  setAssignedShift(null);
setShiftError("");
setShiftLoading(false);
  setMyRequests([]);
  setPendingRequests([]);
  setAllRequests([]);
  setAdminReport(null);
  setNotification("");

  // Reset correction tracking
  previousRequestStatuses.current = {};
  hasLoadedRequestStatuses.current = false;

  // Clear messages
  setMessage("");
  setError("");
}


  function goToPage(page: Page) {
    setCurrentPage(page);
    setError("");
    setMessage("");
  }


  
function downloadCsv(
  filename: string,
  rows: Record<string, string | number | null>[]
) {
  if (rows.length === 0) {
    alert("No report data available to export.");
    return;
  }

  const headers = Object.keys(rows[0]);

  const escapeCsv = (value: unknown) => {
    let text = value == null ? "" : String(value);

    // Prevent spreadsheet formula injection.
    if (/^[\t\r ]*[=+\-@]/.test(text)) {
      text = "'" + text;
    }

    return `"${text.replace(/"/g, '""')}"`;
  };

  const csvContent = [
    headers.map(escapeCsv).join(","),
    ...rows.map((row) =>
      headers.map((header) => escapeCsv(row[header])).join(",")
    ),
  ].join("\r\n");

  // BOM helps Excel display UTF-8 text correctly.
  const blob = new Blob(["\uFEFF", csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

  function renderCorrectionCard(request: CorrectionRequest) {
    return (
      <article className="correction-card" key={request.id}>
        <div className="section-heading">
          <strong>{request.requestedBy?.email ?? "Employee"}</strong>
          <span className={`status-badge status-${request.status.toLowerCase()}`}>
            {request.status}
          </span>
        </div>
        <p>
          <strong>Submitted:</strong> {formatSriLankaDate(request.createdAt)}
        </p>
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
        {request.status === "PENDING" && (
          <>
            <div className="form-group">
              <label htmlFor={`admin-note-${request.id}`}>
                Review Note (optional)
              </label>
              <textarea
                id={`admin-note-${request.id}`}
                rows={2}
                value={reviewNotes[request.id] ?? ""}
                onChange={(event) =>
                  setReviewNotes((previous) => ({
                    ...previous,
                    [request.id]: event.target.value,
                  }))
                }
                placeholder="Explain your decision..."
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

//   function renderAdminDashboard() {
//     const report = adminReport;
//     const totalGrossMinutes =
//       report?.records.reduce((sum, record) => sum + record.grossMinutes, 0) ?? 0;
//     const totalBreakMinutes =
//       report?.records.reduce((sum, record) => sum + record.breakMinutes, 0) ?? 0;
//     const totalNetMinutes =
//       report?.records.reduce((sum, record) => sum + record.netMinutes, 0) ?? 0;

//     return (
//       <>
//         <section className="welcome">
//           <div>
//            <p>
//   {isAdmin ? "ADMINISTRATION WORKSPACE" : "MANAGER WORKSPACE"}
// </p>

// <h2>
//   {isAdmin
//     ? "Company Attendance Overview"
//     : "Team Attendance Overview"}
// </h2>

// <span>
//   {isAdmin
//     ? "Review company-wide attendance, breaks, and working hours."
//     : "Review attendance, breaks, and working hours for your assigned team."}
// </span>
//           </div>
//           <div className="date">
//             {new Intl.DateTimeFormat("en-LK", {
//               timeZone: "Asia/Colombo",
//               day: "2-digit",
//               month: "short",
//               year: "numeric",
//             }).format(new Date(`${adminDate}T12:00:00+05:30`))}
//           </div>
//         </section>

//         <section className="panel">
//           <div className="admin-report-toolbar">
//             <div>
//               <h2>Daily Employee Attendance</h2>
//               <p className="muted">
//                 Select today or a previous date to view employee records.
//               </p>
//             </div>
//             <div className="form-group admin-date-field">
//               <label htmlFor="admin-attendance-date">Attendance date</label>
//               <input
//                 id="admin-attendance-date"
//                 type="date"
//                 value={adminDate}
//                 max={today}
//                 onChange={(event) => setAdminDate(event.target.value)}
//               />
//             </div>
//             <button
//               type="button"
//               disabled={adminReportLoading}
//               onClick={() => void loadAdminDailyAttendance(adminDate)}
//             >
//               {adminReportLoading ? "Loading..." : "Refresh"}
//             </button>
//           </div>

//           {adminReportError && (
//             <p className="notice" role="alert">{adminReportError}</p>
//           )}

//           <section className="stats admin-report-stats">
//             <article className="stat-card">
//               <span>Employees With Records</span>
//               <h2>{report?.totalRecords ?? 0}</h2>
//             </article>
//             <article className="stat-card">
//               <span>Currently Working</span>
//               <h2>{report?.currentlyWorking ?? 0}</h2>
//             </article>
//             <article className="stat-card">
//               <span>Clocked Out</span>
//               <h2>{report?.completed ?? 0}</h2>
//             </article>
//             <article className="stat-card">
//               <span>Total Net Working Time</span>
//               <h2>{formatDuration(totalNetMinutes)}</h2>
//             </article>
//           </section>

//           {adminReportLoading && !report ? (
//             <p className="muted">Loading attendance records...</p>
//           ) : !report || report.records.length === 0 ? (
//             <div className="empty-state">
//               <div className="empty-icon">◷</div>
//               <strong>No attendance records for {adminDate}</strong>
//               <p>
//                 Choose another date to view records. Employees without a
//                 clock-in record are not included in this table.
//               </p>
//             </div>
//           ) : (
//             <>
//               <div className="attendance-table-wrapper">
//                 <table className="attendance-table">
//                   <thead>
//                     <tr>
//                       <th>Employee Code</th>
//                       <th>Employee Name</th>
//                       <th>Email</th>
//                       <th>Team</th>
//                       <th>Clock In</th>
//                       <th>Clock Out</th>
//                       <th>Gross Time</th>
//                       <th>Break Time</th>
//                       <th>Net Working Time</th>
//                       <th>Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {report.records.map((record) => (
//                       <tr key={record.sessionId}>
//                         <td>{record.employee.employeeCode}</td>
//                         <td>
//                           <strong>{record.employee.name}</strong>
//                         </td>
//                         <td>{record.employee.email}</td>
//                         <td>{record.employee.team?.name ?? "Unassigned"}</td>
//                         <td>{formatSriLankaTime(record.clockInAt)}</td>
//                         <td>{formatSriLankaTime(record.clockOutAt)}</td>
//                         <td>{formatDuration(record.grossMinutes)}</td>
//                         <td>{formatDuration(record.breakMinutes)}</td>
//                         <td>
//                           <strong>{formatDuration(record.netMinutes)}</strong>
//                         </td>
//                         <td>
//                           {/* <span
//                             className={`status-badge ${
//                               record.isCurrentlyWorking
//                                 ? "status-pending"
//                                 : `status-${record.status.toLowerCase()}`
//                             }`}
//                           >
//                             {record.isCurrentlyWorking
//                               ? "Working"
//                               : record.status === "COMPLETED"
//                                 ? "Completed"
//                                 : record.status}
//                           </span> */}
                          
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                   <tfoot>
//                     <tr>
//                       <th colSpan={6}>Daily totals</th>
//                       <th>{formatDuration(totalGrossMinutes)}</th>
//                       <th>{formatDuration(totalBreakMinutes)}</th>
//                       <th>{formatDuration(totalNetMinutes)}</th>
//                       <th />
//                     </tr>
//                   </tfoot>
//                 </table>
//               </div>
//               <p className="muted admin-report-footnote">
//                 Times are shown in Sri Lanka time. Gross time is elapsed time
//                 from clock-in to clock-out (or now for an active session).
//                 Break time includes unpaid breaks only. Net time is gross time
//                 minus unpaid breaks.
//               </p>
//             </>
//           )}
//         </section>
//       </>
//     );
//   }


function renderAdminDashboard() {
  const report = adminReport;

  const totalGrossMinutes =
    report?.records.reduce(
      (sum, record) => sum + (record.grossMinutes ?? 0),
      0,
    ) ?? 0;

  const totalBreakMinutes =
    report?.records.reduce(
      (sum, record) => sum + (record.breakMinutes ?? 0),
      0,
    ) ?? 0;

  const totalNetMinutes =
    report?.records.reduce(
      (sum, record) => sum + (record.netMinutes ?? 0),
      0,
    ) ?? 0;

  const getAttendanceStatus = (record: AdminAttendanceRecord) => {
    const isOnBreak = record.breaks?.some(
      (item) => item.endedAt === null,
    ) ?? false;

    if (record.isCurrentlyWorking) {
      return isOnBreak ? "On Break" : "Working";
    }

    if (record.status === "COMPLETED") {
      return "Completed";
    }

    return "Incomplete";
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Working":
        return "status-badge status-approved";
      case "On Break":
        return "status-badge status-pending";
      case "Completed":
        return "status-badge status-approved";
      default:
        return "status-badge status-rejected";
    }
  };

  return (
    <>
      <section className="welcome">
        <div>
          <p>ADMINISTRATION WORKSPACE</p>
          <h2>Company Attendance Overview</h2>
          <span>
            Review company-wide attendance, breaks, and working hours.
          </span>
        </div>

        <div className="date">
          {new Intl.DateTimeFormat("en-LK", {
            timeZone: "Asia/Colombo",
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(new Date(`${adminDate}T12:00:00+05:30`))}
        </div>
      </section>

      <section className="panel">
        <div className="admin-report-toolbar">
          <div>
            <h2>Daily Employee Attendance</h2>
            <p className="muted">
              Select today or a previous date to view employee records.
            </p>
          </div>

          <div className="form-group admin-date-field">
            <label htmlFor="admin-attendance-date">
              Attendance date
            </label>
            <input
              id="admin-attendance-date"
              type="date"
              value={adminDate}
              max={today}
              onChange={(event) => setAdminDate(event.target.value)}
            />
          </div>

          <button
            type="button"
            disabled={adminReportLoading}
            onClick={() => void loadAdminDailyAttendance(adminDate)}
          >
            {adminReportLoading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {adminReportError && (
          <p className="notice" role="alert">
            {adminReportError}
          </p>
        )}

        {adminReportLoading && !report ? (
          <p className="muted">Loading attendance records...</p>
        ) : (
          <>
            <section className="stats admin-report-stats">
              <article className="stat-card">
                <span>Employees With Records</span>
                <h2>{report?.totalRecords ?? 0}</h2>
              </article>

              <article className="stat-card">
                <span>Currently Working</span>
                <h2>{report?.currentlyWorking ?? 0}</h2>
              </article>

              <article className="stat-card">
                <span>Clocked Out</span>
                <h2>{report?.completed ?? 0}</h2>
              </article>

              <article className="stat-card">
                <span>Total Net Working Time</span>
                <h2>{formatDuration(totalNetMinutes)}</h2>
              </article>
            </section>

            <section className="stats admin-report-stats">
              <article className="stat-card">
                <span>Total Gross Working Time</span>
                <h2>{formatDuration(totalGrossMinutes)}</h2>
              </article>

              <article className="stat-card">
                <span>Total Unpaid Break Time</span>
                <h2>{formatDuration(totalBreakMinutes)}</h2>
              </article>

              <article className="stat-card">
                <span>Total Net Working Time</span>
                <h2>{formatDuration(totalNetMinutes)}</h2>
              </article>

              <article className="stat-card">
                <span>On Break</span>
                <h2>
                  {report?.records.filter(
                    (record) =>
                      record.isCurrentlyWorking &&
                      record.breaks?.some(
                        (item) => item.endedAt === null,
                      ),
                  ).length ?? 0}
                </h2>
              </article>
            </section>

            {!report || report.records.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">◷</div>
                <strong>No attendance records for {adminDate}</strong>
                <p>
                  Choose another date to view attendance records.
                  Employees without an attendance session are not included
                  in this report.
                </p>
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
                      {report.records.map((record) => {
                        const status = getAttendanceStatus(record);

                        return (
                          <tr key={record.sessionId}>
                            <td>{record.employee.employeeCode}</td>

                            <td>
                              <strong>{record.employee.name}</strong>
                            </td>

                            <td>{record.employee.email}</td>

                            <td>
                              {record.employee.team?.name ?? "Unassigned"}
                            </td>

                            <td>
                              {formatSriLankaTime(record.clockInAt)}
                            </td>

                            <td>
                              {formatSriLankaTime(record.clockOutAt)}
                            </td>

                            <td>
                              {formatDuration(record.grossMinutes)}
                            </td>

                            <td>
                              {formatDuration(record.breakMinutes)}
                            </td>

                            <td>
                              <strong>
                                {formatDuration(record.netMinutes)}
                              </strong>
                            </td>

                            <td>
                              <span className={getStatusClass(status)}>
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
                  Times are displayed in Sri Lanka time. Gross time is
                  elapsed time from clock-in to clock-out, or now for an
                  active session. Break time includes unpaid breaks only.
                  Net time is gross time minus unpaid breaks.
                </p>
              </>
            )}
          </>
        )}
      </section>
    </>
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
          {!canReview && (
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
          )}
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

          
{canReview && (
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
)}
          {/* <a
            href="#reports"
            className={currentPage === "reports" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              goToPage("reports");
            }}
          >
            Reports
          </a> */}
          {/* {role === "ADMIN" && (
  <button onClick={() => goToPage("adminRegister")}>
    Register Admin
  </button>
)} */}

{isAdmin && (
  <>
    <a
      href="#adminRegister"
      className={currentPage === "adminRegister" ? "active" : ""}
      onClick={(event) => {
        event.preventDefault();
        goToPage("adminRegister");
      }}
    >
      Register Admin
    </a>
{isAdmin && (
  <a
    href="#employees"
    className={currentPage === "employees" ? "active" : ""}
    onClick={(event) => {
      event.preventDefault();
      goToPage("employees");
    }}
  >
    Employee Management
  </a>
)}
    <a
      href="#managerRegister"
      className={currentPage === "managerRegister" ? "active" : ""}
      onClick={(event) => {
        event.preventDefault();
        goToPage("managerRegister");
      }}
    >
      Register Manager
    </a>
  </>
)}
{isAdmin && (
  <button
    type="button"
    onClick={() => goToPage("teams")}
    className={currentPage === "teams" ? "active" : ""}
  >
    Team Management
  </button>
)}
{role === "ADMIN" && (
  <a
    href="#shifts"
    className={currentPage === "shifts" ? "active" : ""}
    onClick={(event) => {
      event.preventDefault();
      goToPage("shifts");
    }}
  >
    Shift Management
  </a>
)}
        </nav>
        <div className="sidebar-bottom">
          <p>Attendance Management</p>
         
        </div>
      {/* {role === "ADMIN" && (
  <a
    href="#adminRegister"
    className={currentPage === "adminRegister" ? "active" : ""}
    onClick={(event) => {
      event.preventDefault();
      goToPage("adminRegister");
    }}
  >
    Register Administrator
  </a>
)} */}


      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">
             {isAdmin
  ? "ADMINISTRATION WORKSPACE"
  : isManager
    ? "MANAGER WORKSPACE"
    : "EMPLOYEE WORKSPACE"}
            </p>
            <h1>
             {currentPage === "dashboard" &&
  (isAdmin
    ? "Admin Attendance Dashboard"
    : isManager
      ? "Manager Attendance Dashboard"
      : "Attendance Dashboard")}
              {currentPage === "history" && "Attendance History"}
              {currentPage === "corrections" &&
                (canReview ? "Correction Management" : "Correction Requests")}
              {currentPage === "reports" && "Attendance Reports"}
              {currentPage === "employees" && "Employee Management"}
              {/* {currentPage === "adminRegister" && role === "ADMIN" && (
  <AdminRegister
    onBack={() => goToPage("dashboard")}
  />
)} */}

 {currentPage === "adminRegister" && "Register Administrator"}
 {currentPage === "managerRegister" && "Register Manager"}
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
            <button type="button" onClick={handleLogout}>Log Out</button>
          </div>
        </header>

        {error && <p className="notice">{error}</p>}
        {message && <p className="notice">{message}</p>}

        {notification && !canReview && (
          <div className="correction-notification" role="status">
            <span>{notification}</span>
            <button type="button" onClick={() => setNotification("")}>
              Dismiss
            </button>
          </div>
        )}
        {currentPage === "adminRegister" && role === "ADMIN" && (
  <AdminRegister
    onBack={() => goToPage("dashboard")}
  />
)}
{currentPage === "teams" && isAdmin && <TeamManagement />}

{currentPage === "employees" && isAdmin && (
  <EmployeeManagement />
)}
{currentPage === "managerRegister" && isAdmin && (
  <ManagerRegister onBack={() => goToPage("dashboard")} />
)}
{currentPage === "shifts" && role === "ADMIN" && (
  <ShiftManagement />
)}
{currentPage === "dashboard" && (
  isManager ? (
    <ManagerDashboard />
  ) : isAdmin ? (
            renderAdminDashboard()
          ) : (
            <>
              <section className="welcome">
                <div>
                  <p>YOUR DAILY OVERVIEW</p>
                  <h2>Welcome to your workspace</h2>
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

                {/* <article className="panel">
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
                </article> */}

                <article className="panel">
  <div className="section-heading">
    <h3>Today's Schedule</h3>

    <button
      type="button"
      disabled={shiftLoading}
      onClick={() => void loadMyShift()}
    >
      {shiftLoading ? "Loading..." : "Refresh"}
    </button>
  </div>

  {shiftLoading && !assignedShift ? (
    <p className="muted">Loading your assigned shift...</p>
  ) : shiftError ? (
    <>
      <p className="notice" role="alert">{shiftError}</p>
      <button
        type="button"
        onClick={() => void loadMyShift()}
        disabled={shiftLoading}
      >
        Try Again
      </button>
    </>
  ) : !assignedShift ? (
    <div className="empty-state">
      <div className="empty-icon">◷</div>
      <strong>No shift assigned for today</strong>
      <p>
        Please contact your administrator to assign a shift
        that is effective today.
      </p>
    </div>
  ) : (
    <>
      <div className="schedule-row">
        <span>Shift Name</span>
        <strong>{assignedShift.name}</strong>
      </div>

      <div className="schedule-row">
        <span>Shift Start</span>
        <strong>{formatShiftTime(assignedShift.startTime)}</strong>
      </div>

      <div className="schedule-row">
        <span>Shift End</span>
        <strong>{formatShiftTime(assignedShift.endTime)}</strong>
      </div>

      <div className="schedule-row">
        <span>Scheduled Duration</span>
        <strong>
          {formatShiftDuration(
            getShiftDurationMinutes(
              assignedShift.startTime,
              assignedShift.endTime,
            ),
          )}
        </strong>
      </div>

      <div className="schedule-row">
        <span>Grace Period</span>
        <strong>{assignedShift.graceMinutes} minutes</strong>
      </div>

      <div className="schedule-row">
        <span>Working Days</span>
        <strong>
          {assignedShift.workingDays
            .slice()
            .sort((a, b) => a - b)
            .map((day) =>
              ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day] ??
              "?",
            )
            .join(", ")}
        </strong>
      </div>

      <div className="schedule-row">
        <span>Timezone</span>
        <strong>{assignedShift.timezone}</strong>
      </div>

      <p className="muted">
        This schedule is loaded from your assigned shift in the database.
        Scheduled duration does not deduct break time.
      </p>
    </>
  )}
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
                <button type="button" onClick={() => goToPage("history")}>
                  View Full Attendance History
                </button>
              </section>
            </>
          )
        )}

        {/* {currentPage === "history" && !canReview && (
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
                    <small>Clock In: {formatSriLankaTime(session.clockInAt)}</small>
                    <br />
                    <small>Clock Out: {formatSriLankaTime(session.clockOutAt)}</small>
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
        )} */}

        
{currentPage === "history" && !canReview && (
  <section className="panel history-panel">
    <h2>Attendance History</h2>
    <p className="muted">
      Review your attendance sessions and recorded break timelines.
      All times are displayed in Sri Lanka time.
    </p>

    {/* Filters */}
    <div className="admin-report-toolbar">
      <div className="form-group">
        <label htmlFor="history-from">From date</label>
        <input
          id="history-from"
          type="date"
          value={historyFromDate}
          max={historyToDate || undefined}
          onChange={(event) => {
            setHistoryFromDate(event.target.value);
            setHistoryPage(1);
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="history-to">To date</label>
        <input
          id="history-to"
          type="date"
          value={historyToDate}
          min={historyFromDate || undefined}
          onChange={(event) => {
            setHistoryToDate(event.target.value);
            setHistoryPage(1);
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="history-status">Session status</label>
        <select
          id="history-status"
          value={historyStatus}
          onChange={(event) => {
            setHistoryStatus(event.target.value);
            setHistoryPage(1);
          }}
        >
          <option value="ALL">All sessions</option>
          <option value="COMPLETED">Completed</option>
          <option value="IN_PROGRESS">In progress</option>
          <option value="INCOMPLETE">Incomplete</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="history-sort">Sort by date</label>
        <select
          id="history-sort"
          value={historySort}
          onChange={(event) => {
            setHistorySort(event.target.value);
            setHistoryPage(1);
          }}
        >
          <option value="NEWEST">Newest first</option>
          <option value="OLDEST">Oldest first</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="history-page-size">Records per page</label>
        <select
          id="history-page-size"
          value={historyPageSize}
          onChange={(event) => {
            setHistoryPageSize(Number(event.target.value));
            setHistoryPage(1);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <button
        type="button"
        onClick={() => {
          setHistoryFromDate("");
          setHistoryToDate("");
          setHistoryStatus("ALL");
          setHistorySort("NEWEST");
          setHistoryPage(1);
        }}
      >
        Clear filters
      </button>
    </div>

    {loading ? (
      <p className="muted">Loading attendance records...</p>
    ) : filteredHistory.length === 0 ? (
      <div className="empty-state">
        <strong>No attendance records found</strong>
        <p>Try changing your dates or status filter.</p>
      </div>
    ) : (
      <>
        <p className="muted">
          Showing {((historyPage - 1) * historyPageSize) + 1}–
          {Math.min(historyPage * historyPageSize, filteredHistory.length)}
          {" "}of {filteredHistory.length} sessions
        </p>

        <div className="attendance-table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Clock in</th>
                <th>Clock out</th>
                <th>Gross time</th>
                <th>Break time</th>
                <th>Net time</th>
                <th>Status</th>
                <th>Details</th>
                <th>Correction</th>
              </tr>
            </thead>

            <tbody>
              {paginatedHistory.map((session) => {
                const incomplete =
                  session.status === "INCOMPLETE" ||
                  (session.status === "COMPLETED" &&
                    session.clockOutAt === null);

                return (
                  <>
                    <tr key={session.id}>
                      <td>{formatSriLankaDate(session.clockInAt)}</td>

                      <td>{formatSriLankaTime(session.clockInAt)}</td>

                      <td>
                        {session.clockOutAt
                          ? formatSriLankaTime(session.clockOutAt)
                          : "Not recorded"}
                      </td>

                      <td>{formatDuration(session.grossMinutes)}</td>

                      <td>{formatDuration(session.breakMinutes)}</td>

                      <td>{formatDuration(session.netMinutes)}</td>

                      <td>
                        <span
                          className={`status-badge ${
                            incomplete
                              ? "status-rejected"
                              : session.status === "IN_PROGRESS"
                                ? "status-pending"
                                : "status-approved"
                          }`}
                        >
                          {incomplete
                            ? "Incomplete"
                            : session.status === "IN_PROGRESS"
                              ? "In progress"
                              : "Completed"}
                        </span>
                      </td>

                      <td>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedSessionId(
                              expandedSessionId === session.id
                                ? null
                                : session.id,
                            )
                          }
                        >
                          {expandedSessionId === session.id
                            ? "Hide timeline"
                            : "View timeline"}
                        </button>
                      </td>

                      <td>
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
                          Request
                        </button>
                      </td>
                    </tr>

                    {expandedSessionId === session.id && (
                      <tr key={`${session.id}-timeline`}>
                        <td colSpan={9}>
                          <div className="panel">
                            <h3>Session timeline</h3>

                            <div className="schedule-row">
                              <span>Clock in</span>
                              <strong>
                                {formatSriLankaDate(session.clockInAt)}{" "}
                                {formatSriLankaTime(session.clockInAt)}
                              </strong>
                            </div>

                            {session.breaks?.map((item) => (
                              <div
                                className="schedule-row"
                                key={item.id}
                              >
                                <span>
                                  {item.breakType} break — Start
                                </span>
                                <strong>
                                  {formatSriLankaTime(item.startedAt)}
                                </strong>

                                <span>Break end</span>
                                <strong>
                                  {item.endedAt
                                    ? formatSriLankaTime(item.endedAt)
                                    : "Not recorded — break may still be open"}
                                </strong>
                              </div>
                            ))}

                            <div className="schedule-row">
                              <span>Clock out</span>
                              <strong>
                                {session.clockOutAt
                                  ? `${formatSriLankaDate(session.clockOutAt)} ${formatSriLankaTime(session.clockOutAt)}`
                                  : "Not recorded"}
                              </strong>
                            </div>

                            {!session.clockOutAt && (
                              <p className="notice" role="status">
                                {session.status === "IN_PROGRESS"
                                  ? "This session is still open. No clock-out time has been recorded."
                                  : "Incomplete session: the clock-out time is missing. A correction may be required."}
                              </p>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="section-heading">
          <button
            type="button"
            disabled={historyPage <= 1}
            onClick={() =>
              setHistoryPage((page) => Math.max(1, page - 1))
            }
          >
            Previous
          </button>

          <span>
            Page {historyPage} of {historyTotalPages}
          </span>

          <button
            type="button"
            disabled={historyPage >= historyTotalPages}
            onClick={() =>
              setHistoryPage((page) =>
                Math.min(historyTotalPages, page + 1),
              )
            }
          >
            Next
          </button>
        </div>
      </>
    )}

    <button
      type="button"
      onClick={() => void loadAttendance()}
      disabled={loading}
    >
      {loading ? "Refreshing..." : "Refresh history"}
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
                    corrected. Proposed times are optional. Times entered here
                    are interpreted as Sri Lanka local time.
                  </p>
                  <form onSubmit={handleCreateCorrection}>
                    <div className="form-group">
                      <label htmlFor="correction-session">Attendance Session</label>
                      <select
                        id="correction-session"
                        value={selectedSessionId}
                        onChange={(event) => setSelectedSessionId(event.target.value)}
                        required
                      >
                        <option value="">Select an attendance session</option>
                        {attendance.map((session) => (
                          <option key={session.id} value={session.id}>
                            {formatSriLankaDate(session.clockInAt)} —{" "}
                            {formatSriLankaTime(session.clockInAt)} to{" "}
                            {formatSriLankaTime(session.clockOutAt)} ({session.status})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="proposed-in">Proposed Clock-In (optional)</label>
                      <input
                        id="proposed-in"
                        type="datetime-local"
                        value={proposedIn}
                        onChange={(event) => setProposedIn(event.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="proposed-out">Proposed Clock-Out (optional)</label>
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
                        onChange={(event) => setCorrectionReason(event.target.value)}
                        placeholder="Explain why your attendance needs correction..."
                        rows={4}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={correctionSubmitting || attendance.length === 0}
                    >
                      {correctionSubmitting
                        ? "Submitting..."
                        : "Submit Correction Request"}
                    </button>
                    {attendance.length === 0 && (
                      <p className="muted">No attendance sessions are available to correct.</p>
                    )}
                  </form>
                </section>

                <section className="panel">
                  <div className="section-heading">
                    <div>
                      <h2>My Correction Requests</h2>
                      <p className="muted">Track the status of your submitted requests.</p>
                    </div>
                    <button
                      type="button"
                      disabled={correctionLoading}
                      onClick={async () => {
                        setCorrectionLoading(true);
                        await loadMyRequests();
                        setCorrectionLoading(false);
                      }}
                    >
                      {correctionLoading ? "Refreshing..." : "Refresh"}
                    </button>
                  </div>
                  {correctionLoading ? (
                    <p className="muted">Loading requests...</p>
                  ) : myRequests.length === 0 ? (
                    <div className="empty-state">
                      <strong>No correction requests yet</strong>
                      <p>Your submitted requests will appear here.</p>
                    </div>
                  ) : (
                    myRequests.map(renderCorrectionCard)
                  )}
                </section>
              </>
            )}

            {canReview && (
              <section className="panel">
                <h2>Correction Request Management</h2>
                <p className="muted">
                  Review pending requests and view approved and rejected decisions.
                </p>
                <div className="actions">
                  <button
                    type="button"
                    className="primary"
                    onClick={() => setRequestFilter("PENDING")}
                  >
                    Pending ({allRequests.filter((r) => r.status === "PENDING").length})
                  </button>
                  <button
                    type="button"
                    className="success"
                    onClick={() => setRequestFilter("APPROVED")}
                  >
                    Approved ({allRequests.filter((r) => r.status === "APPROVED").length})
                  </button>
                  <button
                    type="button"
                    className="danger"
                    onClick={() => setRequestFilter("REJECTED")}
                  >
                    Rejected ({allRequests.filter((r) => r.status === "REJECTED").length})
                  </button>
                  <button
                    type="button"
                    disabled={correctionLoading}
                    onClick={async () => {
                      setCorrectionLoading(true);
                      await Promise.all([loadAllRequests(), loadPendingRequests()]);
                      setCorrectionLoading(false);
                    }}
                  >
                    {correctionLoading ? "Refreshing..." : "Refresh All"}
                  </button>
                </div>
                <h3>{requestFilter} Requests</h3>
                {allRequests.filter((r) => r.status === requestFilter).length === 0 ? (
                  <div className="empty-state">
                    <strong>No {requestFilter.toLowerCase()} requests</strong>
                    <p>Requests in this category will appear here.</p>
                  </div>
                ) : (
                  allRequests
                    .filter((r) => r.status === requestFilter)
                    .map(renderCorrectionCard)
                )}
              </section>
            )}
          </>
        )}

     



{currentPage === "reports" && canReview && <ReportsPage />}
      </main>
    </div>
  );
}

export default App;

