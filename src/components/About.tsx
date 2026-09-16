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

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-photos">
        <img
          className="about-photo about-photo-candid"
          src={candid}
          alt="Bianca Rivera-Irions"
        />
        <img
          className="about-photo about-photo-studio"
          src={studio}
          alt="Bianca Rivera-Irions"
        />
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
