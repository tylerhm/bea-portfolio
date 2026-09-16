import "./Credits.css";

interface Credit {
  production: string;
  role: string;
  company: string;
}

const credits: Credit[] = [
  { production: "Mrs. Doubtfire", role: "Janet Lundy", company: "1st National Tour" },
  {
    production: "Mrs. Doubtfire",
    role: "Swing, u/s Flamenco Singer",
    company: "1st National Tour",
  },
  { production: "Pretty Woman", role: "Ensemble", company: "1st National Tour" },
  { production: "West Side Story", role: "Anita", company: "Reagle Music Theatre" },
  {
    production: "25th Annual Putnam County Spelling Bee",
    role: "Logainne",
    company: "Peterborough Players",
  },
  {
    production: "Anastasia",
    role: "Dance Captain, u/s Lily",
    company: "Geva Theatre",
  },
  { production: "Native Gardens", role: "Tania Del Valle", company: "Peterborough Players" },
  {
    production: "Jesus Christ Superstar",
    role: "Ensemble, u/s Soul Singers",
    company: "Riverside Theatre",
  },
  {
    production: "Joe Turner's Come and Gone",
    role: "Zonia Loomis",
    company: "American Stage",
  },
  {
    production: "Dirty Rotten Scoundrels",
    role: "Sophia",
    company: "Priscilla Beach Theatre",
  },
  { production: "Hairspray", role: "Cindy Watkins", company: "Priscilla Beach Theatre" },
  { production: "Parade", role: "Minnie", company: "Earthstone Theatre" },
  { production: "What If (staged reading)", role: "Miss", company: "Rob Schneider" },
  { production: "Up in the Cheap Seats", role: "Soloist", company: "Ron Fassler" },
];

const Credits = () => {
  return (
    <section id="credits" className="credits">
      <h2 className="section-heading credits-heading">Theatre Credits</h2>
      <div className="credits-table">
        {credits.map((credit, i) => (
          <div className="credits-row" key={`${credit.production}-${i}`}>
            <span className="credits-production">{credit.production}</span>
            <span className="credits-role">{credit.role}</span>
            <span className="credits-company">{credit.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Credits;
