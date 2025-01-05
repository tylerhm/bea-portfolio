import { useState } from "react";
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import { NavLink } from "react-router";

import "./Nav.css";

const Nav = () => {
  const { scrollDir } = useDetectScroll({ still: Direction.Up });
  const [height, setHeight] = useState(0);

  return (
    <div
      style={{
        width: "100vw",
        paddingBlock: "2em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5em",
        position: "fixed",
        top: scrollDir === Direction.Up ? 0 : -height,
        transition: "top 0.5s",
        zIndex: 1,
      }}
      ref={(element) => setHeight(element?.clientHeight ?? 0)}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </div>
  );
};

export default Nav;
