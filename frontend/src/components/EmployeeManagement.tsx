
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { api } from "../api/client";
import "./EmployeeManagement.css";

type EmployeeStatus = "ACTIVE" | "INACTIVE";

type Employee = {
  id: string;
  employeeCode: string;
  name: string;
  email: string;
  status: EmployeeStatus;
  teamId: string | null;
  managerId: string | null;
   hasLoginAccount: boolean;
};

type Manager = {
  id: string;
  employeeCode: string;
  name: string;
  email: string;
};

type Team = {
  id: string;
  name: string;
};

const emptyForm = {
  employeeCode: "",
  name: "",
  email: "",
  status: "ACTIVE" as EmployeeStatus,
  teamId: "",
  managerId: "",
};

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [managers, setManagers] = useState<Manager[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [teamFilter, setTeamFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
const [loginEmployeeId, setLoginEmployeeId] = useState<string | null>(null);
const [loginPassword, setLoginPassword] = useState("");
const [loginSaving, setLoginSaving] = useState(false);
  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const [employeeResponse, managerResponse, teamResponse] =
        await Promise.all([
          api.get<Employee[]>("/employees"),
          api.get<Manager[]>("/employees/managers"),
          api.get<Team[]>("/teams"),
        ]);

      setEmployees(employeeResponse.data);
      setManagers(managerResponse.data);
      setTeams(teamResponse.data);
    } catch (err: unknown) {
      const message =
        typeof err === "object" && err !== null && "response" in err
          ? (
              err as {
                response?: { data?: { message?: string | string[] } };
              }
            ).response?.data?.message
          : undefined;

      setError(
        Array.isArray(message)
          ? message.join(", ")
          : typeof message === "string"
            ? message
            : "Could not load employees, managers, or teams. Check the API endpoints.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  // function startEdit(employee: Employee) {
  //   setEditingId(employee.id);
  //   setForm({
  //     employeeCode: employee.employeeCode,
  //     name: employee.name,
  //     email: employee.email,
  //     status: employee.status,
  //     teamId: employee.teamId ?? "",
  //     managerId: employee.managerId ?? "",
  //   });
  //   setError("");
  //   setMessage("");
  // }
  
function startEdit(employee: Employee) {
  setEditingId(employee.id);

  setForm({
    employeeCode: employee.employeeCode,
    name: employee.name,
    email: employee.email,
    status: employee.status,
    teamId: employee.teamId ?? "",
    managerId: employee.managerId ?? "",
  });

  setError("");
  setMessage("");

  // Scroll to the edit form
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    const payload = {
      employeeCode: form.employeeCode.trim(),
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      status: form.status,
      teamId: form.teamId || null,
      managerId: form.managerId || null,
    };

    try {
      if (editingId) {
        await api.patch(`/employees/${editingId}`, payload);
        setMessage("Employee updated successfully.");
      } else {
        await api.post("/employees", payload);
        setMessage("Employee created successfully.");
      }

      resetForm();
      await loadData();
    } catch (err: unknown) {
      const serverMessage =
        typeof err === "object" && err !== null && "response" in err
          ? (
              err as {
                response?: { data?: { message?: string | string[] } };
              }
            ).response?.data?.message
          : undefined;

      setError(
        Array.isArray(serverMessage)
          ? serverMessage.join(", ")
          : typeof serverMessage === "string"
            ? serverMessage
            : "Could not save the employee.",
      );
    } finally {
      setSaving(false);
    }
  }

  
async function handleCreateLoginAccount(
  event: FormEvent<HTMLFormElement>,
  employee: Employee,
) {
  event.preventDefault();
  setError("");
  setMessage("");

  if (loginPassword.length < 8) {
    setError("Password must contain at least 8 characters.");
    return;
  }

  setLoginSaving(true);

  try {
    await api.post(
      `/employees/${employee.id}/login-account`,
      { password: loginPassword },
    );

    setMessage(`Login account created for ${employee.name}.`);
    setLoginEmployeeId(null);
    setLoginPassword("");

    await loadData();
  } catch (err: unknown) {
    const serverMessage =
      typeof err === "object" && err !== null && "response" in err
        ? (
            err as {
              response?: {
                data?: { message?: string | string[] };
              };
            }
          ).response?.data?.message
        : undefined;

    setError(
      Array.isArray(serverMessage)
        ? serverMessage.join(", ")
        : typeof serverMessage === "string"
          ? serverMessage
          : "Could not create the login account.",
    );
  } finally {
    setLoginSaving(false);
  }
}

  async function toggleStatus(employee: Employee) {
    const nextStatus =
      employee.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";

    if (
      !window.confirm(
        `${nextStatus === "INACTIVE" ? "Deactivate" : "Activate"} ${employee.name}?`,
      )
    ) {
      return;
    }

    setError("");
    setMessage("");

    try {
      await api.patch(`/employees/${employee.id}/status`, {
        status: nextStatus,
      });

      setMessage(`${employee.name} is now ${nextStatus.toLowerCase()}.`);
      await loadData();
    } catch {
      setError("Could not update employee status.");
    }
  }

  // const filteredEmployees = employees.filter((employee) => {
  //   const query = search.trim().toLowerCase();

  //   const matchesSearch = [
  //     employee.employeeCode,
  //     employee.name,
  //     employee.email,
  //   ].some((value) => value.toLowerCase().includes(query));

  //   const matchesStatus =
  //     statusFilter === "ALL" || employee.status === statusFilter;

  //   return matchesSearch && matchesStatus;
  // });

  
const filteredEmployees = employees.filter((employee) => {
  const query = search.trim().toLowerCase();

  const matchesSearch = [
    employee.employeeCode,
    employee.name,
    employee.email,
  ].some((value) => value.toLowerCase().includes(query));

  const matchesStatus =
    statusFilter === "ALL" || employee.status === statusFilter;

  const matchesTeam =
    teamFilter === "ALL" || employee.teamId === teamFilter;

  return matchesSearch && matchesStatus && matchesTeam;
});

  const activeCount = employees.filter(
    (employee) => employee.status === "ACTIVE",
  ).length;

  function teamName(teamId: string | null) {
    if (!teamId) return "Unassigned";
    return teams.find((team) => team.id === teamId)?.name ?? teamId;
  }

  function managerName(managerId: string | null) {
    if (!managerId) return "Unassigned";
    return managers.find((manager) => manager.id === managerId)?.name
      ?? managerId;
  }

  return (
    <section className="panel employee-management">
      <div className="section-heading">
        <div>
          <h2>Employee Management</h2>
          <p className="muted">
            Create employee records and manage team assignments.
          </p>
        </div>

        <button type="button" onClick={() => void loadData()} disabled={loading}>
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      {error && <p className="notice" role="alert">{error}</p>}
      {message && <p className="notice" role="status">{message}</p>}

      <section className="stats">
        <article className="stat-card">
          <span>Total Employees</span>
          <h2>{employees.length}</h2>
        </article>
        <article className="stat-card">
          <span>Active Employees</span>
          <h2>{activeCount}</h2>
        </article>
        <article className="stat-card">
          <span>Inactive Employees</span>
          <h2>{employees.length - activeCount}</h2>
        </article>
      </section>

      <form onSubmit={handleSubmit} className="panel">
        <h3>{editingId ? "Edit Employee" : "Add Employee"}</h3>

        <div className="form-group">
          <label htmlFor="employee-code">Employee Code</label>
          <input
            id="employee-code"
            value={form.employeeCode}
            onChange={(e) =>
              setForm({ ...form, employeeCode: e.target.value })
            }
            maxLength={50}
            required
            placeholder="EMP-001"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employee-name">Full Name</label>
          <input
            id="employee-name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
            required
            placeholder="Employee name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employee-email">Email</label>
          <input
            id="employee-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            placeholder="employee@company.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employee-status">Status</label>
          <select
            id="employee-status"
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value as EmployeeStatus,
              })
            }
          >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="employee-team">Department / Team</label>
          <select
            id="employee-team"
            value={form.teamId}
            onChange={(e) => setForm({ ...form, teamId: e.target.value })}
          >
            <option value="">No team assigned</option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="employee-manager">Assigned Manager (optional)</label>
          <select
            id="employee-manager"
            value={form.managerId}
            onChange={(e) =>
              setForm({ ...form, managerId: e.target.value })
            }
          >
            <option value="">No manager assigned</option>
            {managers.map((manager) => (
              <option key={manager.id} value={manager.id}>
                {manager.name} ({manager.employeeCode})
              </option>
            ))}
          </select>
        </div>

        <div className="actions">
          <button type="submit" disabled={saving}>
            {saving
              ? "Saving..."
              : editingId
                ? "Save Changes"
                : "Create Employee"}
          </button>

          {editingId && (
            <button type="button" onClick={resetForm}>
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      <div className="admin-report-toolbar">
        <div className="form-group">
          <label htmlFor="employee-search">Search employees</label>
          <input
            id="employee-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Name, code, or email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employee-filter">Filter by status</label>
          <select
            id="employee-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ALL">All statuses</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>
     
     
<div className="form-group">
  <label htmlFor="employee-team-filter">Filter by Team</label>
  <select
    id="employee-team-filter"
    value={teamFilter}
    onChange={(e) => setTeamFilter(e.target.value)}
  >
    <option value="ALL">All Teams</option>
    {teams.map((team) => (
      <option key={team.id} value={team.id}>
        {team.name}
      </option>
    ))}
  </select>
</div>

      </div>

      {loading ? (
        <p className="muted">Loading employees...</p>
      ) : filteredEmployees.length === 0 ? (
        <div className="empty-state">
          <strong>No employees found</strong>
          <p>Try changing your search or create an employee.</p>
        </div>
      ) : (
        <div className="attendance-table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Employee Code</th>
                <th>Name / Email</th>
                <th>Team</th>
                <th>Manager</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Login Account</th>
              </tr>
            </thead>
            {/* <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.employeeCode}</td>
                  <td>
                    <strong>{employee.name}</strong>
                    <br />
                    <small>{employee.email}</small>
                  </td>
                  <td>{teamName(employee.teamId)}</td>
                  <td>{managerName(employee.managerId)}</td>
                  <td>
                    <span
                      className={`status-badge status-${employee.status.toLowerCase()}`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td>
                    <div className="actions">
                      <button
                        type="button"
                        onClick={() => startEdit(employee)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className={
                          employee.status === "ACTIVE" ? "danger" : "success"
                        }
                        onClick={() => void toggleStatus(employee)}
                      >
                        {employee.status === "ACTIVE"
                          ? "Deactivate"
                          : "Activate"}
                      </button>
                    </div>
                  </td>
                  
                </tr>
                
              ))}
              
            </tbody> */}

            
<tbody>
  {filteredEmployees.map((employee) => (
    <tr key={employee.id}>
      <td>{employee.employeeCode}</td>

      <td>
        <strong>{employee.name}</strong>
        <br />
        <small>{employee.email}</small>
      </td>

      <td>{teamName(employee.teamId)}</td>

      <td>{managerName(employee.managerId)}</td>

      <td>
        <span
          className={`status-badge status-${employee.status.toLowerCase()}`}
        >
          {employee.status}
        </span>
      </td>

      {/* Actions column */}
      <td>
        <div className="actions">
          <button
            type="button"
            onClick={() => startEdit(employee)}
          >
            Edit
          </button>

          <button
            type="button"
            className={
              employee.status === "ACTIVE" ? "danger" : "success"
            }
            onClick={() => void toggleStatus(employee)}
          >
            {employee.status === "ACTIVE"
              ? "Deactivate"
              : "Activate"}
          </button>
        </div>
      </td>

      {/* Login Account column */}
      <td>
        {employee.hasLoginAccount ? (
          <span className="status-badge status-active">
            Account Created
          </span>
        ) : loginEmployeeId === employee.id ? (
          <form
            onSubmit={(event) =>
              void handleCreateLoginAccount(event, employee)
            }
            className="actions"
          >
            <input
              type="password"
              value={loginPassword}
              onChange={(event) =>
                setLoginPassword(event.target.value)
              }
              placeholder="Initial password"
              minLength={8}
              autoComplete="new-password"
              required
              aria-label={`Initial password for ${employee.name}`}
            />

            <button type="submit" disabled={loginSaving}>
              {loginSaving ? "Creating..." : "Save Login"}
            </button>

            <button
              type="button"
              onClick={() => {
                setLoginEmployeeId(null);
                setLoginPassword("");
              }}
              disabled={loginSaving}
            >
              Cancel
            </button>
          </form>
        ) : (
          <button
            type="button"
            disabled={employee.status !== "ACTIVE"}
            onClick={() => {
              setError("");
              setMessage("");
              setLoginPassword("");
              setLoginEmployeeId(employee.id);
            }}
          >
            Create Login Account
          </button>
        )}
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      )}
    </section>
  );

}
