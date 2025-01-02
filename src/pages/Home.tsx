import { Parallax, Background } from "react-parallax";
import banner from "../images/banner.jpg";

const ParallaxBanner = () => {
  return (
    <Parallax strength={250}>
      <Background>
        <img
          style={{
            width: "100vw",
            height: "800px",
            objectFit: "cover",
            objectPosition: "0% 18%",
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
          height: "800px",
          color: "white",
          fontSize: "5em",
          fontWeight: "bold",
        }}
      >
        <p>
          BIANCA
          <br />
          RIVERA-IRIONS
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxBanner;
