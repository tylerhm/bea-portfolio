import candid from "../images/portrait-candid.jpg";
import studio from "../images/portrait-studio.jpg";
import "./About.css";

const stats = [
  { label: "Height", value: "5'7\"" },
  { label: "Eyes", value: "Brown" },
  { label: "Hair", value: "Brown" },
  { label: "Union", value: "AEA" },
];

const training = [
  {
    group: "Boston Conservatory at Berklee",
    detail: "BFA, Musical Theatre",
  },
  {
    group: "Voice",
    detail: "Matt Farnsworth, Jenna Patrusek, Tim Russell, Mackenzie Bykowski",
  },
  { group: "Acting", detail: "Jen Waldman, Joan Rosenfels, Heidi Marshall" },
  {
    group: "Ballet",
    detail: "Ivonne Lemus, Svetlana Datseva, Michelle Chassé",
  },
  { group: "Jazz", detail: "Michelle Chassé, Larry Sousa" },
];

const DownloadIcon = () => (
  <svg
    className="about-photo-download-icon"
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v12" />
    <path d="M7 10l5 5 5-5" />
    <path d="M4 21h16" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-photos">
        <a
          className="about-photo-link"
          href={candid}
          download="bianca-rivera-irions-1.jpg"
          aria-label="Download this photo"
          title="Download photo"
        >
          <img className="about-photo" src={candid} alt="Bianca Rivera-Irions" />
          <DownloadIcon />
        </a>
        <a
          className="about-photo-link about-photo-link-studio"
          href={studio}
          download="bianca-rivera-irions-2.jpg"
          aria-label="Download this photo"
          title="Download photo"
        >
          <img className="about-photo" src={studio} alt="Bianca Rivera-Irions" />
          <DownloadIcon />
        </a>
      </div>
      <div className="about-content">
        <h2 className="section-heading">About</h2>
        <p className="about-bio">
          Bianca Rivera-Irions is a New York City–based actor, singer, and
          dancer. A proud mixed Puerto Rican woman, she aspires to tell the
          stories of her ancestors and give back to the community that has
          given her so much. She is a strong believer in activism through
          art and is passionate about making theatre more accessible while
          highlighting underrepresented voices. After years of traveling the
          country on tour, she is so excited to be back in New York City to
          pursue her dreams.
        </p>

        <dl className="about-stats">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <h3 className="about-subheading">Training</h3>
        <ul className="about-training">
          {training.map((item) => (
            <li key={item.group}>
              <span className="about-training-group">{item.group}</span>
              <span className="about-training-detail">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
