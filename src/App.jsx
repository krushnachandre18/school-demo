import { useState } from "react";
import "./App.css";

function App() {
  const [portal, setPortal] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const closePortal = () => {
    setPortal(null);
    setSubmitted(false);
  };

  return (
    <div className="school-site">

      {/* TOP BAR */}
      <div className="topbar">
        <div>📍 Shaha, Maharashtra</div>
        <div>🎓 Welcome to S.D. Jadhav English Medium School</div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="brand">
          <div className="logo">
            <img
              src="/images/school-logo.jpeg"
              alt="S.D. Jadhav School Logo"
            />
          </div>
          <div>
            <h1>S.D. Jadhav</h1>
            <p>English Medium School, Shaha</p>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#activities">Activities</a>
          <a href="#admission">Admission</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#admission" className="nav-btn">
          Admission Enquiry
        </a>
      </header>


      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-badge">
            Welcome to Our School
          </div>

          <h2>
            <span>S.D. Jadhav</span>
            <br />
            English Medium School
          </h2>

          <p>
            Nurturing young minds at Shaha — where knowledge meets character.
          </p>

          <div className="hero-buttons">
            <a href="#admission" className="primary-btn">
              🎓 Admission Enquiry
            </a>

            <a href="#about" className="secondary-btn">
              Explore School →
            </a>
          </div>
        </div>
      </section>


      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Students Enrolled</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">30+</div>
          <div className="stat-label">Expert Teachers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">15+</div>
          <div className="stat-label">Years of Excellence</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Result Rate</div>
        </div>
      </div>


      {/* INTRODUCTION */}
      <section className="intro" id="about">
        <div className="section-label">
          About Our School
        </div>

        <h2>
          Building Knowledge,
          <br />
          Character &amp; Confidence
        </h2>

        <p>
          S.D. Jadhav English Medium School, Shaha is committed to providing
          quality education in a safe, disciplined and supportive environment.
          We believe every child has unique potential and our dedicated faculty
          strives to bring the best out of every student.
        </p>
      </section>


      {/* FEATURES */}
      <section className="features" id="academics">

        <div className="feature-card">
          <div className="icon-wrap">📚</div>
          <h3>Academics</h3>
          <p>
            Strong academic foundation with quality learning and modern teaching methods.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-wrap">⚽</div>
          <h3>Sports</h3>
          <p>
            Encouraging students through sports, games and physical activities.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-wrap">🎨</div>
          <h3>Activities</h3>
          <p>
            Creative and co-curricular activities for all-round development.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-wrap">🏫</div>
          <h3>Facilities</h3>
          <p>
            A safe, positive and well-equipped environment for learning.
          </p>
        </div>

      </section>


      {/* ACTIVITIES */}
      <section className="activities" id="activities">

        <div className="activity-content">
          <div className="section-label">
            Student Development
          </div>

          <h2>
            Learning Beyond
            <br />
            The Classroom
          </h2>

          <p>
            We believe education is not limited to textbooks. Students are
            encouraged to participate in academic, sports and creative
            activities to develop as complete individuals.
          </p>

          <div className="activity-list">
            <span>
              <span className="check-icon">✓</span>
              Academic Activities
            </span>
            <span>
              <span className="check-icon">✓</span>
              Sports &amp; Games
            </span>
            <span>
              <span className="check-icon">✓</span>
              Cultural Activities
            </span>
            <span>
              <span className="check-icon">✓</span>
              Creative Development
            </span>
          </div>
        </div>

        <div className="activity-box">
          <span className="activity-emoji">🎓</span>
          <h3>Complete Development</h3>
          <p>
            Education that focuses on knowledge, discipline and overall
            personality development of every student.
          </p>
        </div>

      </section>


      {/* ADMISSION */}
      <section className="admission" id="admission">

        <div>
          <div className="section-label light">
            Admissions Open
          </div>

          <h2>
            Give Your Child
            <br />
            A Strong Beginning
          </h2>

          <p>
            Contact the school for admission information and enquiry.
            Seats are limited — enroll today!
          </p>
        </div>

        <a href="#contact" className="admission-btn">
          Make an Enquiry →
        </a>

      </section>

      {/* SCHOOL PORTAL */}
      <section className="portal-section section-pad" id="portal">
        <div className="section-heading">
          <span className="section-label">DIGITAL CAMPUS</span>
          <h2>
            School Management <span>Portal</span>
          </h2>
          <p>
            A dedicated access point for students, staff and school office.
          </p>
        </div>

        <div className="portal-grid">
          {[
            {
              icon: "🎓",
              title: "Student Portal",
              text: "Access attendance, academic records and student information.",
              role: "Student",
            },
            {
              icon: "👨‍🏫",
              title: "Staff Portal",
              text: "Manage class records, attendance and academic activities.",
              role: "Staff",
            },
            {
              icon: "🏢",
              title: "Office Portal",
              text: "Access student records, reports and administrative tools.",
              role: "Office",
            },
          ].map((item) => (
            <article className="portal-card" key={item.role}>
              <div className="portal-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button
                className="portal-btn"
                onClick={() => setPortal(item.role)}
              >
                Login to {item.role} <span>→</span>
              </button>
            </article>
          ))}
        </div>
        <p className="portal-note">
          Portal access requires a connected authentication system and backend.
        </p>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-pad" id="contact">
        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h2>
            We’d Love to <span>Hear From You.</span>
          </h2>
          <p>
            Have a question about admissions or our school? Send us an enquiry.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <a
              href="https://www.google.com/maps/place/S.D.Jadhav+English+medium+school,+shaha/@19.8623657,74.2822965,665m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bdc4c4b49beb9e9:0x90b1ccb66e31b3ac!8m2!3d19.8623607!4d74.2848714!16s%2Fg%2F11c2ph26w0"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
            >
              <span className="contact-icon">📍</span>
              <div>
                <strong>Visit Our School</strong>
                <p>Shaha, Maharashtra</p>
                <small>Open in Google Maps ↗</small>
              </div>
            </a>
            <a
              href="tel:9503001245"
              className="contact-info-item"
            >
              <span className="contact-icon">📞</span>
              <div>
                <strong>Call the School</strong>
                <p>+91 95030 01245</p>
                <small>Tap to call ↗</small>
              </div>
            </a>





            <a
              href="mailto:krushnachandre5448@gmail.com"
              className="contact-info-item"
            >
              <span className="contact-icon">✉️</span>

              <div>
                <strong>Email Us</strong>
                <p>krushnachandre5448@gmail.com</p>
                <small>Click to send an email ↗</small>
              </div>
            </a>
          </div>


          <form
            className="enquiry-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <h3>Send an Enquiry</h3>
            <p>Fill in your details and our school team can get in touch.</p>

            <div className="form-row">
              <label>
                Parent / Guardian Name
                <input name="parentName" placeholder="Enter your name" required />
              </label>
              <label>
                Student Name
                <input name="studentName" placeholder="Enter student name" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                Mobile Number
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter mobile number"
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit mobile number"
                  required
                />
              </label>
              <label>
                Class Interested In
                <select name="class" defaultValue="" required>
                  <option value="" disabled>Select class</option>
                  {[
                    "Nursery",
                    "Junior KG",
                    "Senior KG",
                    "1st Standard",
                    "2nd Standard",
                    "3rd Standard",
                    "4th Standard",
                    "5th Standard",
                    "6th Standard",
                    "7th Standard",
                    "8th Standard",
                    "9th Standard",
                    "10th Standard",
                  ].map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              Your Message
              <textarea
                name="message"
                rows="3"
                placeholder="Tell us how we can help..."
              />
            </label>

            <button className="primary-btn form-submit" type="submit">
              Submit Enquiry <span>→</span>
            </button>

            {submitted && (
              <p className="form-notice" role="status">
                Demo only: your enquiry has not been sent. Connect this form
                to a backend or school email service to receive submissions.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="brand footer-brand">
            <div className="logo">
              <img src="/images/school-logo.jpeg" alt="School logo" />
            </div>
            <div className="brand-text">
              <h1>S.D. Jadhav</h1>
              <p>ENGLISH MEDIUM SCHOOL</p>
              <small>SHAHA, MAHARASHTRA</small>
            </div>
          </a>

          <p className="footer-description">
            Building knowledge, character and confidence for a brighter future.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#admission">Admissions</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} S.D. Jadhav English Medium School.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {/* LOGIN MODAL */}
      {portal && (
        <div className="modal-backdrop" onClick={closePortal}>
          <div
            className="login-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closePortal}
              aria-label="Close login"
            >
              ✕
            </button>

            <div className="modal-icon">
              {portal === "Student" ? "🎓" : portal === "Staff" ? "👨‍🏫" : "🏢"}
            </div>

            <span className="section-label">SCHOOL PORTAL</span>
            <h2 id="login-title">{portal} Login</h2>
            <p>Enter your registered details to continue.</p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label>
                {portal === "Student" ? "Student ID" : "Username"}
                <input
                  name="username"
                  placeholder={portal === "Student" ? "Enter student ID" : "Enter username"}
                  required
                />
              </label>

              <label>
                Password
                <input
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </label>

              <button className="primary-btn form-submit" type="submit">
                Sign In <span>→</span>
              </button>

              {submitted && (
                <p className="form-notice" role="status">
                  Demo login only. Authentication is not connected yet.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;