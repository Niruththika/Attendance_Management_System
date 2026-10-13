
// import "./LandingPage.css";

// type LandingPageProps = {
//   onLogin: () => void;
//   onSignUp: () => void;
// };

// export default function LandingPage({
//   onLogin,
//   onSignUp,
// }: LandingPageProps) {
//   return (
//     <main className="landing-page" id="home">
//       <header className="landing-navbar">
//         <a className="landing-brand" href="#home">
//           <span className="landing-brand-icon">A</span>
//           <span>AttendEase</span>
//         </a>

//         <nav className="landing-nav-links">
//           <a href="#home">Home</a>
//           <a href="#features">Features</a>
//           <a href="#about">About Us</a>
//           <a href="#contact">Contact</a>
//         </nav>

//         <div className="landing-nav-actions">
//           <button
//             className="landing-signin"
//             onClick={onLogin}
//           >
//             Sign In
//           </button>
//           <button
//             className="landing-signup"
//             onClick={onSignUp}
//           >
//             Sign Up <span aria-hidden="true">→</span>
//           </button>
//         </div>
//       </header>

//       <section className="landing-hero">
//         <div className="landing-hero-content">
//           <div className="landing-eyebrow">
//             <span className="landing-status-dot" />
//             SMART WORKFORCE MANAGEMENT
//           </div>

//           <h1>
//             Every workday,
//             <br />
//             <span>made simpler.</span>
//           </h1>

//           <p className="landing-description">
//             Take control of attendance, working hours, and workforce
//             productivity with one intelligent platform built for
//             modern teams.
//           </p>

//           <div className="landing-hero-actions">
//             <button
//               className="landing-primary-button"
//               onClick={onSignUp}
//             >
//               Get Started <span aria-hidden="true">→</span>
//             </button>
//             <a className="landing-secondary-button" href="#features">
//               Explore Features
//             </a>
//           </div>

//           <div className="landing-trust">
//             <span className="landing-trust-icon">✓</span>
//             Simple attendance tracking
//             <span className="landing-trust-separator">·</span>
//             <span className="landing-trust-icon">✓</span>
//             Secure access
//           </div>
//         </div>

//         <div className="landing-visual" aria-label="Attendance dashboard preview">
//           <div className="landing-orbit landing-orbit-one" />
//           <div className="landing-orbit landing-orbit-two" />

//           <div className="preview-card">
//             <div className="preview-topbar">
//               <div>
//                 <span className="preview-label">ATTENDEASE OVERVIEW</span>
//                 <h3>Attendance dashboard</h3>
//               </div>
//               <span className="preview-avatar">AE</span>
//             </div>

//             <div className="preview-welcome">
//               <div>
//                 <span className="preview-muted">Welcome back</span>
//                 <h4>Your team at a glance</h4>
//               </div>
//               <span className="preview-live">
//                 <span /> Live overview
//               </span>
//             </div>

//             <div className="preview-stats">
//               <div className="preview-stat">
//                 <span className="preview-stat-icon blue">↗</span>
//                 <span className="preview-muted">Attendance</span>
//                 <strong>Track</strong>
//                 <small>Daily attendance</small>
//               </div>
//               <div className="preview-stat">
//                 <span className="preview-stat-icon green">✓</span>
//                 <span className="preview-muted">Work hours</span>
//                 <strong>Monitor</strong>
//                 <small>Time and breaks</small>
//               </div>
//             </div>

//             <div className="preview-activity">
//               <div className="preview-activity-heading">
//                 <strong>Workforce insights</strong>
//                 <span>Overview</span>
//               </div>
//               <div className="preview-chart">
//                 {[42, 67, 50, 84, 61, 94, 73, 57, 80, 66, 88, 72].map(
//                   (height, index) => (
//                     <div
//                       key={index}
//                       className={`preview-bar ${index === 5 ? "highlight" : ""}`}
//                       style={{ height: `${height}%` }}
//                     />
//                   )
//                 )}
//               </div>
//               <div className="preview-chart-labels">
//                 <span>Mon</span>
//                 <span>Tue</span>
//                 <span>Wed</span>
//                 <span>Thu</span>
//                 <span>Fri</span>
//                 <span>Sat</span>
//               </div>
//             </div>
//           </div>

//           <div className="landing-floating-card">
//             <span className="floating-check">✓</span>
//             <div>
//               <strong>Stay organized</strong>
//               <p>Everything in one place</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="landing-features" id="features">
//         <div className="landing-section-heading">
//           <span className="landing-section-eyebrow">BUILT FOR YOUR TEAM</span>
//           <h2>Everything you need to manage time better.</h2>
//           <p>
//             Bring your attendance processes together with a clear,
//             consistent, and easy-to-use workspace.
//           </p>
//         </div>

//         <div className="landing-feature-grid">
//           <article className="landing-feature-card">
//             <div className="landing-feature-icon">◷</div>
//             <h3>Attendance Tracking</h3>
//             <p>
//               Record check-in and check-out times and keep daily
//               attendance organized.
//             </p>
//           </article>

//           <article className="landing-feature-card">
//             <div className="landing-feature-icon">▤</div>
//             <h3>Time & Break Management</h3>
//             <p>
//               Keep track of working hours, breaks, and completed
//               attendance sessions.
//             </p>
//           </article>

//           <article className="landing-feature-card">
//             <div className="landing-feature-icon">↗</div>
//             <h3>Reports & Insights</h3>
//             <p>
//               Help managers understand attendance records and review
//               workforce activity.
//             </p>
//           </article>
//         </div>
//       </section>

//       <section className="landing-about" id="about">
//         <div className="landing-about-mark">A</div>
//         <div>
//           <span className="landing-section-eyebrow">ABOUT ATTENDEASE</span>
//           <h2>Less administrative work. More focus on people.</h2>
//           <p>
//             AttendEase is designed to make everyday attendance
//             management simpler for employees, managers, and
//             administrators. Our goal is to bring essential workforce
//             time-tracking tasks into one accessible workspace.
//           </p>
//           <button className="landing-about-button" onClick={onSignUp}>
//             Join AttendEase <span aria-hidden="true">→</span>
//           </button>
//         </div>
//       </section>

//       <section className="landing-cta" id="contact">
//         <span>READY TO GET STARTED?</span>
//         <h2>A better way to manage every workday.</h2>
//         <p>Sign in to your workspace or create an employee account.</p>
//         <button onClick={onSignUp}>
//           Create Your Account <span aria-hidden="true">→</span>
//         </button>
//       </section>

//       <footer className="landing-footer">
//         <a className="landing-brand" href="#home">
//           <span className="landing-brand-icon">A</span>
//           <span>AttendEase</span>
//         </a>
//         <p>Smarter attendance. Simpler workdays.</p>
//         <span>© {new Date().getFullYear()} AttendEase. All rights reserved.</span>
//       </footer>
//     </main>
//   );
// }



import "./LandingPage.css";

type LandingPageProps = {
  onLogin: () => void;
  onSignUp: () => void;
};

const features = [
  {
    number: "01",
    icon: "◷",
    title: "Smart attendance",
    description:
      "Record clock-in, clock-out, and breaks with a clear overview of every working day.",
    tag: "TIME TRACKING",
  },
  {
    number: "02",
    icon: "▦",
    title: "Workforce management",
    description:
      "Give employees, managers, and administrators the right tools for their responsibilities.",
    tag: "TEAM MANAGEMENT",
  },
  {
    number: "03",
    icon: "↗",
    title: "Actionable reports",
    description:
      "Review attendance records, working hours, and team activity from one workspace.",
    tag: "REPORTING",
  },
];

export default function LandingPage({
  onLogin,
  onSignUp,
}: LandingPageProps) {
  return (
    <main className="landing-page" id="home">
      <header className="landing-navbar">
        <a className="landing-brand" href="#home" aria-label="AttendEase home">
          <span className="landing-brand-icon">A</span>
          <span>
            Attend<span className="brand-light">Ease</span>
          </span>
        </a>

        <nav className="landing-nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#features">Solutions</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="landing-nav-actions">
          <button className="landing-signin" onClick={onLogin}>
            Sign In
          </button>
          <button className="landing-signup" onClick={onSignUp}>
            Get Started <span>↗</span>
          </button>
        </div>
      </header>

      <section className="landing-hero">
        <div className="hero-copy">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            WORKFORCE MANAGEMENT, REIMAGINED
          </div>

          <h1>
            Better time
            <br />
            management.
            <br />
            <span>Better workdays.</span>
          </h1>

          <p className="hero-description">
            Bring attendance, working hours, and team oversight
            together in one intuitive workspace. Less administrative
            complexity. More time for the work that matters.
          </p>

          <div className="hero-actions">
            <button className="hero-primary" onClick={onSignUp}>
              Get Started <span>→</span>
            </button>
            <button
              className="hero-secondary"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Discover AttendEase <span>↓</span>
            </button>
          </div>

          <div className="hero-proof">
            <div className="proof-icon">✓</div>
            <div>
              <strong>One connected workspace</strong>
              <span>For employees, managers, and administrators</span>
            </div>
          </div>
        </div>

        <div className="hero-product">
          <div className="product-glow" />

          <div className="product-window">
            <div className="product-window-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="window-address">app.attendease.com</span>
              <span className="window-lock">◆</span>
            </div>

            <div className="product-layout">
              <aside className="product-sidebar">
                <div className="product-mini-brand">
                  <span>A</span>
                </div>
                <div className="mini-nav active">▦</div>
                <div className="mini-nav">◷</div>
                <div className="mini-nav">▤</div>
                <div className="mini-nav">♧</div>
                <div className="mini-nav">⚙</div>
              </aside>

              <div className="product-main">
                <div className="product-heading">
                  <div>
                    <span className="product-overline">YOUR WORKSPACE</span>
                    <h3>Attendance overview</h3>
                    <p>A clearer view of your workday.</p>
                  </div>
                  <div className="product-user">AE</div>
                </div>

                <div className="product-date-row">
                  <span>Daily overview</span>
                  <span className="product-date">Today ▾</span>
                </div>

                <div className="product-metrics">
                  <div className="metric-card">
                    <div className="metric-top">
                      <span>Attendance</span>
                      <span className="metric-icon blue">✓</span>
                    </div>
                    <strong>Tracking</strong>
                    <span className="metric-foot">Daily records</span>
                  </div>

                  <div className="metric-card">
                    <div className="metric-top">
                      <span>Working time</span>
                      <span className="metric-icon purple">◷</span>
                    </div>
                    <strong>In focus</strong>
                    <span className="metric-foot">Hours and breaks</span>
                  </div>
                </div>

                <div className="product-chart-card">
                  <div className="chart-heading">
                    <div>
                      <strong>Workforce activity</strong>
                      <span>Illustrative weekly overview</span>
                    </div>
                    <span className="chart-menu">···</span>
                  </div>

                  <div className="chart-area">
                    <div className="chart-guides">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="chart-bars">
                      {[48, 68, 54, 82, 63, 91, 73].map((height, index) => (
                        <div className="chart-bar-column" key={index}>
                          <div
                            className={`chart-bar ${
                              index === 5 ? "chart-bar-active" : ""
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="chart-days">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>

                <div className="product-bottom-row">
                  <span className="bottom-indicator" />
                  <span>Everything organized in one place</span>
                  <span className="bottom-arrow">↗</span>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-insight insight-top">
            <span className="insight-icon">✓</span>
            <div>
              <strong>Stay in control</strong>
              <span>Attendance at a glance</span>
            </div>
          </div>

          <div className="floating-insight insight-bottom">
            <span className="insight-icon insight-purple">↗</span>
            <div>
              <strong>Clearer insights</strong>
              <span>Make informed decisions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="value-strip">
        <div>
          <span className="value-number">01</span>
          <div>
            <strong>Track time</strong>
            <span>Record working hours</span>
          </div>
        </div>
        <div>
          <span className="value-number">02</span>
          <div>
            <strong>Manage teams</strong>
            <span>Organize responsibilities</span>
          </div>
        </div>
        <div>
          <span className="value-number">03</span>
          <div>
            <strong>Review activity</strong>
            <span>Understand attendance</span>
          </div>
        </div>
        <div>
          <span className="value-number">04</span>
          <div>
            <strong>Work smarter</strong>
            <span>Simplify daily processes</span>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-intro">
          <span className="section-kicker">ONE PLATFORM. CLEARER WORKDAYS.</span>
          <h2>
            Everything your team needs.
            <br />
            <span>Nothing it doesn't.</span>
          </h2>
          <p>
            Practical workforce tools designed to make everyday
            attendance management more organized and transparent.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-card-top">
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-number">{feature.number}</span>
              </div>
              <span className="feature-tag">{feature.tag}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button
                className="feature-link"
                onClick={onSignUp}
                aria-label={`Get started with ${feature.title}`}
              >
                Explore workspace <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-decoration">
          <div className="about-big-letter">A</div>
          <div className="about-small-card">
            <span>✓</span>
            Built around your workflow
          </div>
        </div>

        <div className="about-copy">
          <span className="section-kicker">A BETTER WAY TO WORK</span>
          <h2>
            Make time management
            <br />
            <span>work for everyone.</span>
          </h2>
          <p>
            AttendEase brings essential attendance tasks into one
            accessible workspace. Employees can manage their attendance,
            while managers and administrators can review records,
            oversee requests, and gain a clearer view of daily activity.
          </p>

          <div className="about-points">
            <div>
              <span>✓</span>
              Straightforward employee workflows
            </div>
            <div>
              <span>✓</span>
              Role-based workspace access
            </div>
            <div>
              <span>✓</span>
              Centralized attendance information
            </div>
          </div>

          <button className="about-cta" onClick={onSignUp}>
            Get started with AttendEase <span>→</span>
          </button>
        </div>
      </section>

      {/* <section className="final-cta" id="contact">
        <div className="cta-decoration" />
        <div className="cta-content">
          <span className="cta-kicker">YOUR WORKDAY, BETTER ORGANIZED</span>
          <h2>
            Ready to make attendance
            <br />
            management simpler?
          </h2>
          <p>
            Bring your team into one organized workspace with AttendEase.
          </p>
          <div className="cta-actions">
            <button className="cta-white-button" onClick={onSignUp}>
              Create an Account <span>→</span>
            </button>
            <button className="cta-outline-button" onClick={onLogin}>
              Sign In
            </button>
          </div>
        </div>
      </section> */}

      


<section className="final-cta" id="contact">
  <div className="cta-decoration" />

  <div className="cta-content">
    <span className="cta-kicker">GET IN TOUCH</span>

    <h2>
      Let's make your workday
      <br />
      <span>better together.</span>
    </h2>

    <p>
      Have questions about AttendEase? Contact us by email or phone.
      We would be happy to hear from you.
    </p>

    <div className="cta-actions">
      <button className="cta-white-button" onClick={onSignUp}>
        Create an Account <span>→</span>
      </button>

      <button className="cta-outline-button" onClick={onLogin}>
        Sign In
      </button>
    </div>

    <div className="contact-details">
      <a
        className="contact-detail"
        href="mailto:niruththi27@gmail.com"
      >
        <span className="contact-detail-icon">✉</span>
        <span className="contact-detail-text">
          <strong>Email us</strong>
          <span>niruththi27@gmail.com</span>
        </span>
      </a>

      <a
        className="contact-detail"
        href="tel:0775862944"
      >
        <span className="contact-detail-icon">☎</span>
        <span className="contact-detail-text">
          <strong>Call us</strong>
          <span>0775862944</span>
        </span>
      </a>
    </div>
  </div>
</section>


      <footer className="landing-footer">
        <div className="footer-main">
          <a className="landing-brand" href="#home">
            <span className="landing-brand-icon">A</span>
            <span>
              Attend<span className="brand-light">Ease</span>
            </span>
          </a>
          <p>
            A clearer way to manage attendance, working hours,
            and everyday workforce activity.
          </p>
        </div>

        <div className="footer-links">
          <strong>Explore</strong>
          <a href="#home">Home</a>
          <a href="#features">Solutions</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-links">
          <strong>Your workspace</strong>
          <button onClick={onLogin}>Sign In</button>
          <button onClick={onSignUp}>Create Account</button>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AttendEase. All rights reserved.
          </span>
          <span>Designed for better workdays.</span>
        </div>
      </footer>
    </main>
  );
}
