
import { useCallback, useEffect, useState } from "react";
import { api } from "../api/client";

type Employee = {
  id: string;
  employeeCode: string;
  name: string;
  email: string;
  status: string;
};

type ShiftAssignment = {
  id: string;
  employeeId: string;
  shiftId: string;
  effectiveFrom: string;
  effectiveTo: string | null;
  employee: Employee;
};

type Shift = {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  timezone: string;
  workingDays: number[];
  graceMinutes: number;
  status: "ACTIVE" | "INACTIVE";
  assignments?: ShiftAssignment[];
};

const WEEKDAYS = [
  { label: "Sunday", value: 0 },
  { label: "Monday", value: 1 },
  { label: "Tuesday", value: 2 },
  { label: "Wednesday", value: 3 },
  { label: "Thursday", value: 4 },
  { label: "Friday", value: 5 },
  { label: "Saturday", value: 6 },
];

function getErrorMessage(error: unknown, fallback: string): string {
  if (typeof error === "object" && error !== null && "isAxiosError" in error) {
    const axiosError = error as {
      response?: { data?: { message?: string | string[] } };
    };
    const message = axiosError.response?.data?.message;

    if (Array.isArray(message)) return message.join(", ");
    if (message) return message;
  }

  return fallback;
}

function formatDate(value: string): string {
  return value.slice(0, 10);
}

export default function ShiftManagement() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(false);
  const [savingShift, setSavingShift] = useState(false);
  const [assigning, setAssigning] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [shiftName, setShiftName] = useState("Morning Shift");
  const [startTime, setStartTime] = useState("08:30");
  const [endTime, setEndTime] = useState("17:00");
  const [timezone, setTimezone] = useState("Asia/Colombo");
  const [workingDays, setWorkingDays] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);
  const [graceMinutes, setGraceMinutes] = useState(10);

  const [employeeId, setEmployeeId] = useState("");
  const [shiftId, setShiftId] = useState("");
  const [effectiveFrom, setEffectiveFrom] = useState("2026-10-15");
  const [effectiveTo, setEffectiveTo] = useState("2026-12-31");

  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const [employeeResponse, shiftResponse] = await Promise.all([
        api.get<Employee[]>("/employees"),
        api.get<Shift[]>("/shifts"),
      ]);

      setEmployees(employeeResponse.data);
      setShifts(shiftResponse.data);

      setEmployeeId((current) =>
        employeeResponse.data.some((employee) => employee.id === current)
          ? current
          : employeeResponse.data[0]?.id ?? "",
      );

      setShiftId((current) =>
        shiftResponse.data.some(
          (shift) => shift.id === current && shift.status === "ACTIVE",
        )
          ? current
          : shiftResponse.data.find((shift) => shift.status === "ACTIVE")
              ?.id ?? "",
      );
    } catch (err: unknown) {
      setError(
        getErrorMessage(
          err,
          "Could not load employees and shifts. Check your administrator login.",
        ),
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  async function createShift(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (workingDays.length === 0) {
      setError("Select at least one working day.");
      return;
    }

    setSavingShift(true);

    try {
      const response = await api.post<Shift>("/shifts", {
        name: shiftName.trim(),
        startTime,
        endTime,
        timezone,
        workingDays,
        graceMinutes,
      });

      setMessage(`Shift "${response.data.name}" created successfully.`);
      setShiftId(response.data.id);
      await loadData();
    } catch (err: unknown) {
      setError(getErrorMessage(err, "Could not create the shift."));
    } finally {
      setSavingShift(false);
    }
  }

  async function assignShift(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!employeeId || !shiftId) {
      setError("Select both an employee and a shift.");
      return;
    }

    if (effectiveTo && effectiveTo < effectiveFrom) {
      setError("The end date must be on or after the start date.");
      return;
    }

    setAssigning(true);

    try {
      await api.post("/shifts/assign", {
        employeeId,
        shiftId,
        effectiveFrom,
        ...(effectiveTo ? { effectiveTo } : {}),
      });

      setMessage("Shift assigned successfully.");
      await loadData();
    } catch (err: unknown) {
      setError(getErrorMessage(err, "Could not assign the shift."));
    } finally {
      setAssigning(false);
    }
  }

  function toggleWorkingDay(day: number) {
    setWorkingDays((current) =>
      current.includes(day)
        ? current.filter((value) => value !== day)
        : [...current, day].sort((a, b) => a - b),
    );
  }

  return (
    <div className="shift-management">
      <section className="welcome">
        <div>
          <p>ADMINISTRATION WORKSPACE</p>
          <h2>Shift Management</h2>
          <span>Create work schedules and assign them to employees.</span>
        </div>
      </section>

      {error && (
        <p className="notice" role="alert">
          {error}
        </p>
      )}

      {message && (
        <p className="notice" role="status">
          {message}
        </p>
      )}

      <section className="panel">
        <h2>Create a Shift</h2>
        <p className="muted">
          Define the working hours, timezone, working days, and grace period.
        </p>

        <form onSubmit={createShift}>
          <div className="form-group">
            <label htmlFor="shift-name">Shift Name</label>
            <input
              id="shift-name"
              value={shiftName}
              onChange={(event) => setShiftName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="shift-start">Start Time</label>
            <input
              id="shift-start"
              type="time"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="shift-end">End Time</label>
            <input
              id="shift-end"
              type="time"
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="shift-timezone">Timezone</label>
            <select
              id="shift-timezone"
              value={timezone}
              onChange={(event) => setTimezone(event.target.value)}
            >
              <option value="Asia/Colombo">Asia/Colombo</option>
              <option value="Asia/Seoul">Asia/Seoul</option>
              <option value="UTC">UTC</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="shift-grace">Grace Period (minutes)</label>
            <input
              id="shift-grace"
              type="number"
              min="0"
              max="1440"
              value={graceMinutes}
              onChange={(event) =>
                setGraceMinutes(Number(event.target.value))
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Working Days</label>
            <div className="actions">
              {WEEKDAYS.map((day) => (
                <label key={day.value}>
                  <input
                    type="checkbox"
                    checked={workingDays.includes(day.value)}
                    onChange={() => toggleWorkingDay(day.value)}
                  />
                  {day.label}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" disabled={savingShift}>
            {savingShift ? "Creating..." : "Create Shift"}
          </button>
        </form>
      </section>

      <section className="panel">
        <h2>Assign a Shift</h2>
        <p className="muted">
          Choose an active employee and an active shift, then set the assignment
          period.
        </p>

        <form onSubmit={assignShift}>
          <div className="form-group">
            <label htmlFor="assign-employee">Employee</label>
            <select
              id="assign-employee"
              value={employeeId}
              onChange={(event) => setEmployeeId(event.target.value)}
              required
              disabled={employees.length === 0}
            >
              <option value="">Select an employee</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name} — {employee.employeeCode} ({employee.email})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="assign-shift">Shift</label>
            <select
              id="assign-shift"
              value={shiftId}
              onChange={(event) => setShiftId(event.target.value)}
              required
              disabled={!shifts.some((shift) => shift.status === "ACTIVE")}
            >
              <option value="">Select a shift</option>
              {shifts
                .filter((shift) => shift.status === "ACTIVE")
                .map((shift) => (
                  <option key={shift.id} value={shift.id}>
                    {shift.name} ({shift.startTime}–{shift.endTime})
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="effective-from">Effective From</label>
            <input
              id="effective-from"
              type="date"
              value={effectiveFrom}
              onChange={(event) => setEffectiveFrom(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="effective-to">Effective To (optional)</label>
            <input
              id="effective-to"
              type="date"
              value={effectiveTo}
              min={effectiveFrom}
              onChange={(event) => setEffectiveTo(event.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={
              assigning ||
              loading ||
              employees.length === 0 ||
              !shifts.some(
                (shift) => shift.id === shiftId && shift.status === "ACTIVE",
              )
            }
          >
            {assigning ? "Assigning..." : "Assign Shift"}
          </button>

          {employees.length === 0 && (
            <p className="muted">
              No active employees were returned by the API.
            </p>
          )}

          {!shifts.some((shift) => shift.status === "ACTIVE") && (
            <p className="muted">
              Create an active shift before assigning one.
            </p>
          )}
        </form>
      </section>

      <section className="panel">
        <div className="section-heading">
          <h2>Existing Shifts and Assignments</h2>
          <button
            type="button"
            onClick={() => void loadData()}
            disabled={loading}
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {loading ? (
          <p className="muted">Loading shifts...</p>
        ) : shifts.length === 0 ? (
          <p className="muted">No shifts have been created yet.</p>
        ) : (
          shifts.map((shift) => (
            <article className="correction-card" key={shift.id}>
              <div className="section-heading">
                <strong>{shift.name}</strong>
                <span
                  className={`status-badge status-${shift.status.toLowerCase()}`}
                >
                  {shift.status}
                </span>
              </div>

              <p>
                <strong>Hours:</strong> {shift.startTime}–{shift.endTime}
              </p>
              <p>
                <strong>Timezone:</strong> {shift.timezone}
              </p>
              <p>
                <strong>Grace period:</strong> {shift.graceMinutes} minutes
              </p>
              <p>
                <strong>Working days:</strong>{" "}
                {shift.workingDays
                  .slice()
                  .sort((a, b) => a - b)
                  .map(
                    (day) =>
                      WEEKDAYS.find((item) => item.value === day)?.label ??
                      "Unknown",
                  )
                  .join(", ")}
              </p>

              <h3>Assignments</h3>

              {!shift.assignments?.length ? (
                <p className="muted">No assignments recorded for this shift.</p>
              ) : (
                shift.assignments.map((assignment) => (
                  <div className="schedule-row" key={assignment.id}>
                    <span>
                      <strong>
                        {assignment.employee?.name ?? "Employee"}
                      </strong>
                      <br />
                      <small>
                        {assignment.employee?.employeeCode ?? ""}
                      </small>
                      <br />
                      <small>
                        {formatDate(assignment.effectiveFrom)} to{" "}
                        {assignment.effectiveTo
                          ? formatDate(assignment.effectiveTo)
                          : "No end date"}
                      </small>
                    </span>
                    <span>{assignment.employee?.email ?? ""}</span>
                  </div>
                ))
              )}
            </article>
          ))
        )}
      </section>
    </div>
  );
}
