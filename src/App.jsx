import "./App.css";

function App() {
  return (
    <div className="school-page">

      {/* Header */}
      <header className="header">
        <div className="school-brand">
          <div className="school-logo">SD</div>

          <div>
            <h1>S.D. Jadhav English Medium School</h1>
            <p>Shaha</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#activities">Activities</a>
          <a href="#admission">Admission</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO</p>

          <h2>S.D. Jadhav English Medium School</h2>

          <p>
            Building knowledge, character and confidence for a better future.
          </p>

          <div className="hero-buttons">
            <a href="#admission">Admission Enquiry</a>
            <a href="#about">Explore School</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <p className="section-title">ABOUT OUR SCHOOL</p>

        <h2>Education Beyond Classrooms</h2>

        <p className="section-text">
          S.D. Jadhav English Medium School, Shaha is committed to providing
          quality education in a disciplined, supportive and inspiring
          environment.
        </p>
      </section>

      {/* Features */}
      <section className="features" id="academics">

        <div className="feature-card">
          <span>📚</span>
          <h3>Academics</h3>
          <p>Focused learning and strong academic foundation.</p>
        </div>

        <div className="feature-card">
          <span>⚽</span>
          <h3>Sports</h3>
          <p>Encouraging students through sports and physical activities.</p>
        </div>

        <div className="feature-card">
          <span>🎨</span>
          <h3>Activities</h3>
          <p>Creative and co-curricular activities for overall development.</p>
        </div>

        <div className="feature-card">
          <span>🏫</span>
          <h3>Facilities</h3>
          <p>A safe and supportive environment for students.</p>
        </div>

      </section>

      {/* Admission */}
      <section className="admission" id="admission">
        <div>
          <p className="section-title">ADMISSIONS</p>
          <h2>Start Your Child's Journey With Us</h2>
          <p>
            Get information about admission process and submit your enquiry.
          </p>
        </div>

        <a href="#contact">Admission Enquiry</a>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <p className="section-title">CONTACT US</p>
        <h2>S.D. Jadhav English Medium School</h2>
        <p>Shaha</p>
      </section>

      {/* Footer */}
      <footer>
        <h3>S.D. Jadhav English Medium School</h3>
        <p>Shaha</p>
        <p>© 2026 All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;