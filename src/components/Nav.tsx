import { NavLink } from "react-router";

import "./Nav.css";

const Nav = () => {
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
        top: 0,
        zIndex: 1,
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </div>
  );
};

export default Nav;
