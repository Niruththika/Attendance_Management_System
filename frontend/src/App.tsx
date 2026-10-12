
import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>AttendEase</h2>
        <p className="sidebar-label">WORKSPACE</p>

        <nav>
          <a className="active" href="#dashboard">Dashboard</a>
          <a href="#history">Attendance History</a>
          <a href="#corrections">Correction Requests</a>
          <a href="#reports">Reports</a>
        </nav>

        <div className="sidebar-bottom">
          <p>Attendance Management</p>
          <small>Version 1.0</small>
        </div>
      </aside>

      <main className="main-content" id="dashboard">
        <header className="topbar">
          <div>
            <p className="eyebrow">EMPLOYEE WORKSPACE</p>
            <h1>Attendance Dashboard</h1>
          </div>

          <div className="profile">
            <div className="avatar">E</div>
            <div>
              <strong>Employee</strong>
              <p>Team Member</p>
            </div>
          </div>
        </header>

        <section className="welcome">
          <div>
            <p>YOUR DAILY OVERVIEW</p>
            <h2>Welcome to your workspace</h2>
            <span>Manage your working hours and attendance.</span>
          </div>
          <div className="date">
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>
        </section>

        <section className="stats">
          <article className="stat-card">
            <span>Today's Status</span>
            <h2>Not Clocked In</h2>
            <small>Waiting for attendance action</small>
          </article>

          <article className="stat-card">
            <span>Clock In</span>
            <h2>--:--</h2>
            <small>Today's recorded start time</small>
          </article>

          <article className="stat-card">
            <span>Worked Hours</span>
            <h2>00:00</h2>
            <small>Net working duration</small>
          </article>

          <article className="stat-card">
            <span>Break Duration</span>
            <h2>00:00</h2>
            <small>Today's break time</small>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel">
            <h3>Attendance Actions</h3>
            <p className="muted">
              Your attendance actions will be connected to the backend next.
            </p>

            <div className="actions">
              <button className="primary" disabled>
                Clock In
              </button>
              <button disabled>Start Break</button>
              <button disabled>End Break</button>
              <button className="danger" disabled>
                Clock Out
              </button>
            </div>

            <p className="notice">
              Demo interface: attendance is not being recorded yet.
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

        <section className="panel history-panel" id="history">
          <h3>Recent Attendance</h3>
          <div className="empty-state">
            <div className="empty-icon">◷</div>
            <strong>No attendance records yet</strong>
            <p>Records will appear here after connecting the API.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
