
import { useEffect, useState, type FormEvent } from "react";
import { api } from "../api/client";

type Team = {
  id: string;
  name: string;
};

export default function TeamManagement() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function loadTeams() {
    setLoading(true);
    setError("");

    try {
      const response = await api.get<Team[]>("/teams");
      setTeams(response.data);
    } catch {
      setError("Could not load teams.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadTeams();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      await api.post("/teams", { name: name.trim() });
      setName("");
      setMessage("Team created successfully.");
      await loadTeams();
    } catch (err: unknown) {
      const responseMessage =
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
        Array.isArray(responseMessage)
          ? responseMessage.join(", ")
          : typeof responseMessage === "string"
            ? responseMessage
            : "Could not create the team.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="panel employee-management">
      <div className="section-heading">
        <div>
          <h2>Team Management</h2>
          <p className="muted">
            Create teams and organize your employees.
          </p>
        </div>

        <button type="button" onClick={() => void loadTeams()}>
          Refresh
        </button>
      </div>

      {error && <p className="notice" role="alert">{error}</p>}
      {message && <p className="notice" role="status">{message}</p>}

      <form className="panel" onSubmit={handleSubmit}>
        <h3>Create New Team</h3>

        <div className="form-group">
          <label htmlFor="team-name">Team Name</label>
          <input
            id="team-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Engineering"
            maxLength={100}
            required
          />
        </div>

        <div className="actions">
          <button type="submit" disabled={saving}>
            {saving ? "Creating..." : "Create Team"}
          </button>
        </div>
      </form>

      <h3>Existing Teams ({teams.length})</h3>

      {loading ? (
        <p className="muted">Loading teams...</p>
      ) : teams.length === 0 ? (
        <div className="empty-state">
          <strong>No teams yet</strong>
          <p>Create your first team using the form above.</p>
        </div>
      ) : (
        <div className="attendance-table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Team ID</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id}>
                  <td><strong>{team.name}</strong></td>
                  <td>{team.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
