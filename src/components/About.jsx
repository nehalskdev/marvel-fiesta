import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("youtube");

  return (
    <div className="about-container">
      <div className="profile-section">
        <div className="intro-content">
          <h2>
            Hello, I'm <span className="marvel-red">Nehal S</span>
          </h2>

          <p className="intro-text">
            A <span className="highlight">React.js Developer</span> who breathes
            life into designs with clean code and creative solutions. This
            Marvel hub was crafted with:
          </p>

          <div className="tech-stack">
            <div className="tech-pill">React</div>
            <div className="tech-pill">Vite</div>
            <div className="tech-pill">CSS3</div>
            <div className="tech-pill">Marvel API</div>
            <div className="tech-pill">Responsive UI</div>
            <div className="tech-pill">Interactive Components</div>
          </div>

          <p className="personality-text">
            When I'm not coding, you'll find me geeking out over MCU timelines,
            filming tech tutorials, or brainstorming ways to merge pop culture
            with cutting-edge web development.
          </p>
        </div>

        <div className="qr-section">
          <div className="qr-card">
            <img
              src="/src/assets/QR code.jpeg"
              alt="Developer QR Code"
              className="qr-image"
            />
            <div className="qr-text">
              <p>Scan to connect</p>
              <p className="encourage-text">Scan || Support || Encourage</p>
            </div>
          </div>
        </div>
      </div>

      <div className="social-section">
        <h3>Explore My Digital World</h3>

        <div className="social-grid">
          <a
            href="https://www.youtube.com/@AirborneTravellerHere"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card youtube"
          >
            <div className="social-icon">▶️</div>
            <h4>Airborne Traveler</h4>
            <p>Vlogging Channel</p>
          </a>

          <a
            href="https://www.youtube.com/@Nehalinfortech"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card youtube"
          >
            <div className="social-icon">▶️</div>
            <h4>Nehal In for Tech</h4>
            <p>Tech tutorials & nerdy deep dives</p>
          </a>

          <a
            href="https://github.com/nehalskdev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card github"
          >
            <div className="social-icon">💻</div>
            <h4>GitHub</h4>
            <p>Open-source contributions</p>
          </a>

          <a
            href="https://www.instagram.com/nehal_s_k/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card instagram"
          >
            <div className="social-icon">📱</div>
            <h4>Instagram</h4>
            <p>Daily dev stories</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
