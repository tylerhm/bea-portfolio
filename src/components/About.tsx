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
          dancer, and a proud member of Actors' Equity Association. She has
          toured with the First National Tours of{" "}
          <em>Mrs. Doubtfire</em> (Janet Lundy, u/s Flamenco Singer) and{" "}
          <em>Pretty Woman</em> (Ensemble). Regional credits include{" "}
          <em>West Side Story</em> (Anita) at Reagle Music Theatre,{" "}
          <em>Anastasia</em> (Dance Captain, u/s Lily) at Geva Theatre, and{" "}
          <em>Joe Turner's Come and Gone</em> (Zonia Loomis) at American
          Stage, among others. She holds a BFA in Musical Theatre from the
          Boston Conservatory at Berklee.
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
