import { Parallax, Background } from "react-parallax";
import Nav from "../components/Nav";
import Media from "../components/Media";
import Footer from "../components/Footer";

import banner from "../images/banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Nav />
      <Parallax strength={150}>
        <Background>
          <img
            style={{
              width: "100vw",
              height: "100vh",
              maxHeight: "100vh",
              objectFit: "cover",
              objectPosition: "60% 18%",
            }}
            src={banner}
            alt="Headshot"
          />
        </Background>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100vh",
            maxHeight: "100vh",
            fontWeight: "bold",
            textShadow: "black 0px 0px 10px",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            BIANCA
            <br />
            RIVERA-IRIONS
          </h1>
          <p style={{ color: "AntiqueWhite" }}>(under construction)</p>
        </div>
      </Parallax>
      <Media
        style={{ width: "100%", padding: "1em", boxSizing: "border-box" }}
      />
      <Footer />
    </>
  );
};

export default Home;
