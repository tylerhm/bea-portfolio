import { Parallax, Background } from "react-parallax";

import banner from "../images/banner.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <Parallax strength={150} className="hero">
      <Background>
        <img className="hero-image" src={banner} alt="Bianca Rivera-Irions" />
      </Background>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Actor · Singer · Dancer</p>
        <h1 className="hero-name">
          Bianca
          <br />
          Rivera-Irions
        </h1>
        <div className="hero-actions">
          <a href="#reels" className="hero-button hero-button-primary">
            Watch Reel
          </a>
          <a
            href="/bianca-rivera-irions-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-button hero-button-secondary"
          >
            Resume
          </a>
        </div>
      </div>
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to about section">
        ↓
      </a>
    </Parallax>
  );
};

export default Hero;
