import ReactPlayer from "react-player/youtube";

import "./Reels.css";

interface ReelInfo {
  title: string;
  url: string;
}

const featured: ReelInfo = {
  title: "Lágrimas Negras",
  url: "https://youtu.be/oxZ1_dlZfBI",
};

const Reels = () => {
  return (
    <section id="reels" className="reels">
      <h2 className="section-heading reels-heading">Reels</h2>

      <div className="reel-card reel-card-featured">
        <div className="reel-player">
          <ReactPlayer url={featured.url} width="100%" height="100%" controls />
        </div>
        <h3 className="reel-title">{featured.title}</h3>
      </div>
    </section>
  );
};

export default Reels;
