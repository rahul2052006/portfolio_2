import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Rahul</h1>
        <h2>Electronics & Instrumentation Engineering Student</h2>
        <p>
          Passionate about Full Stack Development, React, Node.js,
          and building modern web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a 3rd-year Electronics and Instrumentation Engineering
          student at Kongu Engineering College with a CGPA of 7.77.
          I enjoy developing web applications and learning new technologies.
        </p>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills</h2>

        <div className="skill-container">
          <div className="skill">C</div>
          <div className="skill">Python</div>
          <div className="skill">Java</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Express.js</div>
          <div className="skill">MongoDB</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Attendance Management System</h3>
          <p>
            Built using React, Express.js, MongoDB and Node.js.
            Features student management and attendance tracking.
          </p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Responsive personal portfolio showcasing skills,
            projects and contact details.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="education">
        <h2>Education</h2>

        <div className="edu-card">
          <h3>Kongu Engineering College</h3>
          <p>B.E Electronics & Instrumentation Engineering</p>
          <p>CGPA: 7.77</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact</h2>

        <p>Email: rahulr.24eie@kongu.edu</p>

        <div className="socials">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 rahul. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
