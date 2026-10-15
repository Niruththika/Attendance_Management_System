import { useState, type FormEvent } from "react";
import axios from "axios";
import { api } from "../api/client";
import "./AdminRegister.css";

type ManagerRegisterProps = {
  onBack: () => void;
};

export default function ManagerRegister({ onBack }: ManagerRegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
    await api.post("/auth/managers", {
  name: name.trim(),
  email: email.trim().toLowerCase(),
  password,
  role: "MANAGER",
});
      setSuccess("Manager registered successfully. They can now sign in.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err: unknown) {
      const message = axios.isAxiosError(err)
        ? err.response?.data?.message
        : undefined;

      setError(
        Array.isArray(message)
          ? message.join(", ")
          : typeof message === "string"
            ? message
            : "Could not register manager. Check your access and try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-register-page">
      <form className="admin-register-card" onSubmit={handleSubmit}>
        <h2>Register Manager</h2>
        <p>Create a manager account for team attendance management.</p>

        {error && <p className="admin-register-error" role="alert">{error}</p>}
        {success && <p className="admin-register-success" role="status">{success}</p>}

        <label htmlFor="manager-name">Full name</label>
        <input
          id="manager-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          maxLength={100}
          placeholder="Manager name"
        />

        <label htmlFor="manager-email">Email address</label>
        <input
          id="manager-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="manager@company.com"
        />

        <label htmlFor="manager-password">Password</label>
        <input
          id="manager-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={8}
          autoComplete="new-password"
          placeholder="At least 8 characters"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Create Manager"}
        </button>

        <button type="button" onClick={onBack}>
          Back to Dashboard
        </button>
      </form>
    </main>
  );
}