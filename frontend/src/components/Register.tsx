
// import { useState, type FormEvent } from "react";
// import "./Register.css";

// type RegisterProps = {
//   onBackToLogin: () => void;
// };

// export default function Register({ onBackToLogin }: RegisterProps) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setError("");
//     setSuccess("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     if (password.length < 8) {
//       setError("Password must contain at least 8 characters.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         "http://localhost:3000/api/auth/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: name.trim(),
//             email: email.trim().toLowerCase(),
//             password,
//             role: "EMPLOYEE",
//           }),
//         },
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           Array.isArray(data.message)
//             ? data.message.join(", ")
//             : data.message || "Registration failed.",
//         );
//       }

//       setSuccess(
//         "Your account has been created successfully. You can now sign in.",
//       );

//       setName("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//     } catch (err) {
//       setError(
//         err instanceof Error
//           ? err.message
//           : "Unable to register. Please try again.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="register-page">
//       <div className="register-decoration">
//         <div className="register-brand">
//           <div className="register-brand-icon">A</div>
//           <span>AttendEase</span>
//         </div>

//         <div className="register-welcome">
//           <span className="register-eyebrow">SMART ATTENDANCE</span>
//           <h1>Every workday, made easier.</h1>
//           <p>
//             Manage your attendance, track working hours, and
//             keep your workday organized in one place.
//           </p>

//           <div className="register-feature">
//             <span>✓</span>
//             Simple clock-in and clock-out
//           </div>
//           <div className="register-feature">
//             <span>✓</span>
//             Attendance history and reports
//           </div>
//           <div className="register-feature">
//             <span>✓</span>
//             Secure employee accounts
//           </div>
//         </div>

//         <p className="register-footer">
//           © {new Date().getFullYear()} AttendEase
//         </p>
//       </div>

//       <div className="register-form-area">
//         <div className="register-form-card">
//           <div className="register-mobile-brand">
//             <div className="register-brand-icon">A</div>
//             <span>AttendEase</span>
//           </div>

//           <div className="register-heading">
//             <span className="register-step">CREATE YOUR ACCOUNT</span>
//             <h2>Join AttendEase</h2>
//             <p>Enter your details to create an employee account.</p>
//           </div>

//           {error && (
//             <div className="register-message register-error" role="alert">
//               {error}
//             </div>
//           )}

//           {success && (
//             <div
//               className="register-message register-success"
//               role="status"
//             >
//               {success}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="register-field">
//               <label htmlFor="register-name">Full name</label>
//               <input
//                 id="register-name"
//                 type="text"
//                 placeholder="Enter your full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 autoComplete="name"
//                 required
//                 minLength={1}
//                 maxLength={100}
//               />
//             </div>

//             <div className="register-field">
//               <label htmlFor="register-email">Email address</label>
//               <input
//                 id="register-email"
//                 type="email"
//                 placeholder="you@company.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="email"
//                 required
//               />
//             </div>

//             <div className="register-field">
//               <label htmlFor="register-password">Password</label>
//               <input
//                 id="register-password"
//                 type="password"
//                 placeholder="At least 8 characters"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 autoComplete="new-password"
//                 minLength={8}
//                 required
//               />
//             </div>

//             <div className="register-field">
//               <label htmlFor="register-confirm-password">
//                 Confirm password
//               </label>
//               <input
//                 id="register-confirm-password"
//                 type="password"
//                 placeholder="Re-enter your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 autoComplete="new-password"
//                 minLength={8}
//                 required
//               />
//             </div>

//             <button
//               className="register-submit"
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? "Creating account..." : "Create account"}
//             </button>
//           </form>

//           <div className="register-login-link">
//             Already have an account?{" "}
//             <button type="button" onClick={onBackToLogin}>
//               Sign in
//             </button>
//           </div>

//           <p className="register-security-note">
//             Your account details are transmitted to the AttendEase
//             backend for registration.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, type FormEvent } from "react";
import "./Register.css";

type RegisterProps = {
  onBackToLogin: () => void;
};

type SignupRole = "EMPLOYEE" | "ADMIN";

export default function Register({ onBackToLogin }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<SignupRole>("EMPLOYEE");
  const [setupKey, setSetupKey] = useState("");
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

    if (role === "ADMIN" && !setupKey.trim()) {
      setError("Enter the administrator setup key.");
      return;
    }

    setLoading(true);

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (role === "ADMIN") {
        headers["x-admin-setup-key"] = setupKey;
      }

      const response = await fetch(
        "http://localhost:3000/api/auth/register",
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password,
            role,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          Array.isArray(data.message)
            ? data.message.join(", ")
            : data.message || "Registration failed."
        );
      }

      setSuccess(
        role === "ADMIN"
          ? "Administrator account created successfully. You can now sign in."
          : "Employee account created successfully. You can now sign in."
      );

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSetupKey("");
      setRole("EMPLOYEE");
      // Redirect to the Sign In page after successful registration.
setTimeout(() => {
  onBackToLogin();
}, 1000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to register. Please try again."
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
            Manage attendance, track working hours, and keep
            your workday organized in one place.
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
            Secure account registration
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
            <h2>{role === "ADMIN" ? "First Admin Setup" : "Join AttendEase"}</h2>
            <p>
              {role === "ADMIN"
                ? "Create the initial administrator account."
                : "Enter your details to create an employee account."}
            </p>
          </div>

          <div className="register-field">
            <label htmlFor="signup-role">Account type</label>
            <select
              id="signup-role"
              value={role}
              onChange={(event) =>
                setRole(event.target.value as SignupRole)
              }
              disabled={loading}
            >
              <option value="EMPLOYEE">Employee Signup</option>
              <option value="ADMIN">First Admin Setup</option>
            </select>
          </div>

          {role === "ADMIN" && (
            <div className="register-message">
              First-admin setup works only when no administrator account
              exists and the setup key matches the backend configuration.
            </div>
          )}

          {error && (
            <div className="register-message register-error" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="register-message register-success" role="status">
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
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                required
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
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </div>

            {role === "ADMIN" && (
              <div className="register-field">
                <label htmlFor="admin-setup-key">
                  Administrator setup key
                </label>
                <input
                  id="admin-setup-key"
                  type="password"
                  placeholder="Enter the key configured in backend/.env"
                  value={setupKey}
                  onChange={(event) => setSetupKey(event.target.value)}
                  autoComplete="off"
                  required
                />
              </div>
            )}

            <div className="register-field">
              <label htmlFor="register-password">Password</label>
              <input
                id="register-password"
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
                onChange={(event) => setConfirmPassword(event.target.value)}
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
              {loading
                ? "Creating account..."
                : role === "ADMIN"
                  ? "Create First Admin"
                  : "Create Employee Account"}
            </button>
          </form>

          <div className="register-login-link">
            Already have an account?{" "}
            <button type="button" onClick={onBackToLogin}>
              Sign in
            </button>
          </div>

          <p className="register-security-note">
            Your account details are transmitted to the AttendEase backend
            for registration.
          </p>
        </div>
      </div>
    </div>
  );
}
