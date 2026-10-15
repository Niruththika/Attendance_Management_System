import { useEffect, useMemo, useState } from "react";
import { api } from "../api/client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const CHART_COLORS = {
  present: "#22C55E",   // Green
  absent: "#EF4444",    // Red
  incomplete: "#F59E0B", // Orange
  primary: "#3B82F6",   // Blue
  secondary: "#8B5CF6", // Purple
  grid: "#E5E7EB",
  text: "#64748B",
};

const ATTENDANCE_COLORS = [
  CHART_COLORS.absent,
  CHART_COLORS.incomplete,
  CHART_COLORS.present,
];

type DailyTrend = { date: string; present: number; absent: number; incomplete: number };
type EmployeeReport = {
  employeeId: string; employeeCode: string; name: string; email: string; team: string;
  presentDays: number; absentDays: number; incompleteDays: number;
  grossMinutes: number; breakMinutes: number; netMinutes: number;
};
type MonthlyReport = {
  month: string; timezone: string; workingDays: number; employeeCount: number;
  totals: { presentDays: number; absentDays: number; incompleteDays: number; netMinutes: number };
  dailyTrend: DailyTrend[];
  teamSummary: { team: string; presentDays: number; absentDays: number; netMinutes: number }[];
  employees: EmployeeReport[];
  note: string;
};

function currentMonth() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Colombo", year: "numeric", month: "2-digit",
  }).formatToParts(new Date());
  const map: Record<string, string> = {};
  parts.forEach((p) => { if (p.type !== "literal") map[p.type] = p.value; });
  return `${map.year}-${map.month}`;
}
function duration(minutes: number) {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

export default function ReportsPage() {
  const [month, setMonth] = useState(currentMonth);
  const [report, setReport] = useState<MonthlyReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [teamId, setTeamId] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  async function loadReport() {
    setLoading(true); setError("");
    try {
      const response = await api.get<MonthlyReport>("/reports/monthly", {
        params: { month, ...(teamId ? { teamId } : {}), ...(employeeId ? { employeeId } : {}) },
      });
      setReport(response.data);
    } catch (e: any) {
      setError(e?.response?.data?.message || "Could not load monthly report. Check that the ReportsModule is registered.");
      setReport(null);
    } finally { setLoading(false); }
  }

  useEffect(() => { void loadReport(); }, [month, teamId, employeeId]);

  const pieData = useMemo(() => report ? [
    { name: "Present days", value: report.totals.presentDays },
    { name: "Absent days", value: report.totals.absentDays },
    { name: "Incomplete days", value: report.totals.incompleteDays },
  ].filter((x) => x.value > 0) : [], [report]);

  async function exportExcel() {
    setError("");
    try {
      const response = await api.get("/reports/monthly/export", {
        params: { month, ...(teamId ? { teamId } : {}), ...(employeeId ? { employeeId } : {}) },
        responseType: "blob",
      });
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `attendease-${month}.xlsx`;
      document.body.appendChild(link); link.click(); link.remove();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      setError(e?.response?.data?.message || "Excel export failed.");
    }
  }

  
  async function exportCsv() {
    setError("");

    try {
      const response = await api.get("/reports/monthly/export-csv", {
        params: {
          month,
          ...(teamId ? { teamId } : {}),
          ...(employeeId ? { employeeId } : {}),
        },
        responseType: "blob",
      });

      const blob = new Blob(["\uFEFF", response.data], {
        type: "text/csv;charset=utf-8;",
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `attendease-${month}.csv`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);
    } catch (e: any) {
      setError(e?.response?.data?.message || "CSV export failed.");
    }
  }

  return <section className="panel report-page">
    <div className="report-toolbar">
      <div><h2>Monthly Attendance Report</h2><p className="muted">Absence tracking, work duration, and team analytics.</p></div>
      <label className="report-month">Month
        <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} />
      </label>
      <button type="button" onClick={() => void loadReport()} disabled={loading}>{loading ? "Loading..." : "Refresh"}</button>
      <button type="button" className="primary" onClick={() => void exportExcel()} disabled={!report}>Export Excel</button>
      
<button
  type="button"
  onClick={() => void exportCsv()}
  disabled={!report || loading}
>
  Export CSV
</button>

    </div>
    {error && <p className="notice" role="alert">{error}</p>}
    {loading && !report && <p className="muted">Loading monthly report...</p>}
    {report && <>
      <div className="stats report-stats">
        <article className="stat-card"><span>Active Employees</span><h2>{report.employeeCount}</h2></article>
        <article className="stat-card"><span>Present Days</span><h2>{report.totals.presentDays}</h2></article>
        <article className="stat-card"><span>Absent Days</span><h2>{report.totals.absentDays}</h2></article>
        <article className="stat-card"><span>Incomplete Days</span><h2>{report.totals.incompleteDays}</h2></article>
        <article className="stat-card"><span>Total Net Hours</span><h2>{duration(report.totals.netMinutes)}</h2></article>
      </div>

      <div className="report-chart-grid">
        <article className="report-chart-card">
          <h3>Daily Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={report.dailyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 10 }} interval="preserveStartEnd" />
              <YAxis allowDecimals={false} />
              <Tooltip /><Legend />
              <Bar dataKey="absent" name="Absent" fill={CHART_COLORS.absent} />
<Bar dataKey="incomplete" name="Incomplete" fill={CHART_COLORS.incomplete} />
<Bar dataKey="present" name="Present" fill={CHART_COLORS.present} />
            </BarChart>
          </ResponsiveContainer>
        </article>
        <article className="report-chart-card">
          <h3>Attendance Breakdown</h3>
          {pieData.length ? <ResponsiveContainer width="100%" height={280}>
            <PieChart>
  <Pie
    data={pieData}
    dataKey="value"
    nameKey="name"
    outerRadius={90}
    label
  >
    {pieData.map((entry, index) => {
      const colorMap: Record<string, string> = {
        "Present days": "#22C55E",
        "Absent days": "#EF4444",
        "Incomplete days": "#F59E0B",
      };

      return (
        <Cell
          key={`cell-${index}`}
          fill={colorMap[entry.name] ?? "#3B82F6"}
        />
      );
    })}
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>
          </ResponsiveContainer> : <p className="muted">No attendance data for this period.</p>}
        </article>
        <article className="report-chart-card report-chart-wide">
          <h3>Team Comparison</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={report.teamSummary}>
              <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="team" /><YAxis allowDecimals={false} />
              <Tooltip /><Legend />
              <Bar dataKey="absentDays" name="Absent days" fill={CHART_COLORS.absent} />
<Bar dataKey="presentDays" name="Present days" fill={CHART_COLORS.present} />
            </BarChart>
          </ResponsiveContainer>
        </article>
      </div>

      <h3>Employee Monthly Summary</h3>
      <div className="attendance-table-wrapper">
        <table className="attendance-table">
          <thead><tr>
            <th>Code</th><th>Name</th><th>Team</th><th>Present Days</th><th>Absent Days</th>
            <th>Incomplete</th><th>Gross</th><th>Breaks</th><th>Net Working Time</th>
          </tr></thead>
          <tbody>{report.employees.map((e) => <tr key={e.employeeId}>
            <td>{e.employeeCode}</td><td><strong>{e.name}</strong></td><td>{e.team}</td>
            <td>{e.presentDays}</td><td>{e.absentDays}</td><td>{e.incompleteDays}</td>
            <td>{duration(e.grossMinutes)}</td><td>{duration(e.breakMinutes)}</td><td><strong>{duration(e.netMinutes)}</strong></td>
          </tr>)}</tbody>
        </table>
      </div>
      <p className="muted report-note">{report.note}</p>
    </>}
  </section>;
}
