import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <h3 className="footer-name">Bianca Rivera-Irions</h3>
        <p className="footer-rep">
          Represented by{" "}
          <a href="https://nyc.blocagency.com" target="_blank" rel="noreferrer">
            Bloc NYC, Inc.
          </a>{" "}
          · 212.924.6200
        </p>
        <div className="footer-links">
          <a
            href="https://www.instagram.com/briverairions/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="/bianca-rivera-irions-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <span className="footer-credit">
        Site by{" "}
        <a href="https://github.com/tylerhm" target="_blank" rel="noreferrer">
          Tyler Hostler-Mathis
        </a>
      </span>
    </footer>
  );
};

export default Footer;
