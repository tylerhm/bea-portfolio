import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container">
      <div className="center-group">
        <h3 style={{ marginBlock: "0.2em" }}>Bianca Rivera-Irions</h3>
        <div className="icon-group">
          <a
            href="https://www.instagram.com/briverairions/"
            style={{
              textDecoration: "none",
            }}
            aria-label="Instagram"
            target="__blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
            }}
            aria-label="YouTube"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="YouTube"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </div>
      </div>
      <div className="right-item icon-group">
        <span
          style={{
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          by Tyler Hostler-Mathis
        </span>
        <a
          href="https://github.com/tylerhm"
          style={{
            textDecoration: "none",
          }}
          aria-label="GitHub"
          target="__blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            style={{ width: "24px", height: "24px" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
