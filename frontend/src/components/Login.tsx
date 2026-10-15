
import { useState } from "react";
import { api } from "../api/client";
import axios from "axios";
import "./Login.css";

type LoginProps = {
  onLogin: (token: string) => void;
  onRegister: () => void;
  
};

export default function Login({ onLogin ,  onRegister,}: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
  email: email.trim(),
  password,
});

      const token = response.data.accessToken;

      if (!token) {
        throw new Error("The server did not return an access token.");
      }

      localStorage.setItem("accessToken", token);
      onLogin(token);
    } catch (err: unknown) {
  if (axios.isAxiosError(err)) {
    console.error("Login response status:", err.response?.status);
    console.error("Login response data:", err.response?.data);
  } else {
    console.error("Login failed:", err);
  }

  setError("Login failed. Check your email and password.");
}finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>AttendEase</h1>
        <p>Sign in to your attendance workspace</p>

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="username"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
        <div className="login-register-link">
  Don't have an account?{" "}
  <button
    type="button"
    onClick={onRegister}
  >
    Create account
  </button>
</div>
      </form>
    </main>
  );
}
