
import { useState, type FormEvent } from "react";
import axios from "axios";
import { api } from "../api/client";
import "./AdminRegister.css";

type AdminRegisterProps = {
  onBack: () => void;
};

export default function AdminRegister({ onBack }: AdminRegisterProps) {
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
      await api.post("/auth/admins", {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
        role: "ADMIN",
      });

      setSuccess(
        "Administrator registered successfully. They can now sign in."
      );
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
            : "Could not register administrator. Check your access and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
  <main className="admin-register-page">
      <form className="admin-register-card" onSubmit={handleSubmit}>
        <h2>Register Administrator</h2>
        <p>Create an additional administrator account.</p>

        {error && <p className="admin-register-error">{error}</p>}
        {success && <p className="admin-register-success">{success}</p>}

        <label htmlFor="admin-name">Full name</label>
        <input
          id="admin-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={100}
          placeholder="Administrator name"
        />

        <label htmlFor="admin-email">Email address</label>
        <input
          id="admin-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="admin@company.com"
        />

        <label htmlFor="admin-password">Password</label>
        <input
          id="admin-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          autoComplete="new-password"
          placeholder="At least 8 characters"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Create Administrator"}
        </button>

        <button type="button" onClick={onBack}>
          Back to Dashboard
        </button>
      </form>
    </main>
  );
}
