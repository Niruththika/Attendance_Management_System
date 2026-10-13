
import { useState, type FormEvent } from "react";
import "./Register.css";

type RegisterProps = {
  onBackToLogin: () => void;
};

export default function Register({ onBackToLogin }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password,
            role: "EMPLOYEE",
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          Array.isArray(data.message)
            ? data.message.join(", ")
            : data.message || "Registration failed.",
        );
      }

      setSuccess(
        "Your account has been created successfully. You can now sign in.",
      );

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to register. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-page">
      <div className="register-decoration">
        <div className="register-brand">
          <div className="register-brand-icon">A</div>
          <span>AttendEase</span>
        </div>

        <div className="register-welcome">
          <span className="register-eyebrow">SMART ATTENDANCE</span>
          <h1>Every workday, made easier.</h1>
          <p>
            Manage your attendance, track working hours, and
            keep your workday organized in one place.
          </p>

          <div className="register-feature">
            <span>✓</span>
            Simple clock-in and clock-out
          </div>
          <div className="register-feature">
            <span>✓</span>
            Attendance history and reports
          </div>
          <div className="register-feature">
            <span>✓</span>
            Secure employee accounts
          </div>
        </div>

        <p className="register-footer">
          © {new Date().getFullYear()} AttendEase
        </p>
      </div>

      <div className="register-form-area">
        <div className="register-form-card">
          <div className="register-mobile-brand">
            <div className="register-brand-icon">A</div>
            <span>AttendEase</span>
          </div>

          <div className="register-heading">
            <span className="register-step">CREATE YOUR ACCOUNT</span>
            <h2>Join AttendEase</h2>
            <p>Enter your details to create an employee account.</p>
          </div>

          {error && (
            <div className="register-message register-error" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div
              className="register-message register-success"
              role="status"
            >
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="register-field">
              <label htmlFor="register-name">Full name</label>
              <input
                id="register-name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
                minLength={1}
                maxLength={100}
              />
            </div>

            <div className="register-field">
              <label htmlFor="register-email">Email address</label>
              <input
                id="register-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="register-field">
              <label htmlFor="register-password">Password</label>
              <input
                id="register-password"
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            <div className="register-field">
              <label htmlFor="register-confirm-password">
                Confirm password
              </label>
              <input
                id="register-confirm-password"
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            <button
              className="register-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="register-login-link">
            Already have an account?{" "}
            <button type="button" onClick={onBackToLogin}>
              Sign in
            </button>
          </div>

          <p className="register-security-note">
            Your account details are transmitted to the AttendEase
            backend for registration.
          </p>
        </div>
      </div>
    </div>
  );
}
