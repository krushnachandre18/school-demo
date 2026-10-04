import "./App.css";

function App() {
  return (
    <div className="school-site">

      {/* TOP BAR */}
      <div className="topbar">
        <div>📍 Shaha</div>
        <div>Welcome to S.D. Jadhav English Medium School</div>
      </div>

      {/* HEADER */}
      <header className="header">

        <div className="brand">
          <div className="logo"></div>

          <div>
            <h1>S.D. Jadhav</h1>
            <p>English Medium School</p>
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

          <span className="hero-small">
            WELCOME TO OUR SCHOOL
          </span>

          <h2>
            S.D. Jadhav
            <br />
            English Medium School
          </h2>

          <p>
            Shaha
          </p>

          <div className="hero-buttons">
            <a href="#admission" className="primary-btn">
              Admission Enquiry
            </a>

            <a href="#about" className="secondary-btn">
              Explore School
            </a>
          </div>

        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="intro" id="about">

        <div className="section-label">
          ABOUT OUR SCHOOL
        </div>

        <h2>
          Building Knowledge,
          <br />
          Character & Confidence
        </h2>

        <p>
          S.D. Jadhav English Medium School, Shaha is committed
          to providing quality education in a safe, disciplined
          and supportive environment.
        </p>

      </section>


      {/* FEATURES */}
      <section className="features" id="academics">

        <div className="feature-card">
          <div className="icon">📚</div>
          <h3>Academics</h3>
          <p>
            Strong academic foundation and quality learning.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">⚽</div>
          <h3>Sports</h3>
          <p>
            Encouraging students through sports and physical activities.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🎨</div>
          <h3>Activities</h3>
          <p>
            Creative and co-curricular activities for students.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🏫</div>
          <h3>School Facilities</h3>
          <p>
            A safe and positive environment for learning.
          </p>
        </div>

      </section>


      {/* ACTIVITIES */}
      <section className="activities" id="activities">

        <div className="activity-content">

          <div className="section-label">
            STUDENT DEVELOPMENT
          </div>

          <h2>
            Learning Beyond
            <br />
            The Classroom
          </h2>

          <p>
            We believe education is not limited to textbooks.
            Students are encouraged to participate in academic,
            sports and creative activities.
          </p>

          <div className="activity-list">
            <span>✓ Academic Activities</span>
            <span>✓ Sports & Games</span>
            <span>✓ Cultural Activities</span>
            <span>✓ Creative Development</span>
          </div>

        </div>

        <div className="activity-box">
          <div>🎓</div>
          <h3>Complete Development</h3>
          <p>
            Education that focuses on knowledge,
            discipline and overall development.
          </p>
        </div>

      </section>


      {/* ADMISSION */}
      <section className="admission" id="admission">

        <div>
          <div className="section-label light">
            ADMISSIONS OPEN
          </div>

          <h2>
            Give Your Child
            <br />
            A Strong Beginning
          </h2>

          <p>
            Contact the school for admission information
            and enquiry.
          </p>
        </div>

        <a href="#contact" className="admission-btn">
          Make an Enquiry →
        </a>

      </section>


      {/* CONTACT */}
      <section className="contact" id="contact">

        <div className="section-label">
          CONTACT US
        </div>

        <h2>
          S.D. Jadhav English Medium School
        </h2>

        <div className="contact-grid">

          <div>
            <span>📍</span>
            <h3>Location</h3>
            <p>Shaha</p>
          </div>

          <div>
            <span>📞</span>
            <h3>Phone</h3>
            <p>School Contact Number</p>
          </div>

          <div>
            <span>✉️</span>
            <h3>Email</h3>
            <p>School Email Address</p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div>
          <h3>S.D. Jadhav English Medium School</h3>
          <p>Shaha</p>
        </div>

        <p>
          © 2026 S.D. Jadhav English Medium School.
          All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;