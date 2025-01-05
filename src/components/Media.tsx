import React from "react";
import ReactPlayer from "react-player/youtube";

interface Props {
  style: React.CSSProperties;
}

interface ReelInfo {
  title: string;
  url: string;
}
const reels: ReelInfo[] = [
  { title: "VOCAL REEL", url: "https://www.youtube.com/watch?v=G1hKzCkywM8" },
  { title: "DANCE REEL", url: "https://www.youtube.com/watch?v=BHACKCNDMW8" },
  { title: "SCENE REEL", url: "https://www.youtube.com/watch?v=GLei6Y4McIs" },
];

const Media = ({ style }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2em",
        flexWrap: "wrap",
        ...style,
      }}
    >
      {reels.map((reel) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>{reel.title}</h2>
            <ReactPlayer url={reel.url} controls />
          </div>
        );
      })}
    </div>
  );
};

export default Media;
