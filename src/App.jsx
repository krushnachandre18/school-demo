import "./App.css";

function App() {
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

<section className="portal" id="portal">
  <div className="section-label">SCHOOL PORTAL</div>

  <h2>School Management Portal</h2>

  <p className="portal-subtitle">
    Secure access for students, staff and school office.
  </p>

  <div className="portal-cards">
    <div className="portal-card">
      <div className="portal-icon">🎓</div>
      <h3>Student Portal</h3>
      <p>
        Attendance, academic records and student information.
      </p>
      <button>Student Login</button>
    </div>

    <div className="portal-card">
      <div className="portal-icon">👨‍🏫</div>
      <h3>Staff Portal</h3>
      <p>
        Attendance, class records and academic activities.
      </p>
      <button>Staff Login</button>
    </div>

    <div className="portal-card">
      <div className="portal-icon">🏢</div>
      <h3>Office Portal</h3>
      <p>
        Student records, reports and school administration.
      </p>
      <button>Office Login</button>
    </div>
  </div>
</section>
      {/* CONTACT */}
      <section className="contact" id="contact">

        <div className="section-label">
          Contact Us
        </div>

        <h2>
          S.D. Jadhav English Medium School
        </h2>

        <div className="contact-grid">

          <a
            href="https://www.google.com/maps/place/S.D.Jadhav+English+medium+school,+shaha/@19.8623657,74.2822965,665m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bdc4c4b49beb9e9:0x90b1ccb66e31b3ac!8m2!3d19.8623607!4d74.2848714!16s%2Fg%2F11c2ph26w0"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card contact-card-link"
          >
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>Shaha, Maharashtra</p>
            <span className="map-hint">📲 Maps वर उघडा</span>
          </a>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <p>School Contact Number</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>School Email Address</p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-brand">
          <h3>S.D. Jadhav English Medium School</h3>
          <p>Shaha, Maharashtra</p>
        </div>

        <p className="footer-copy">
          © 2026 <span>S.D. Jadhav School</span>. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;