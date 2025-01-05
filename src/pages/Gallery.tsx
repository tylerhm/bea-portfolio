import Nav from "../components/Nav";
import Footer from "../components/Footer";

const images = [
  "https://i.imgur.com/boF4s0Nh.jpg",
  "https://i.imgur.com/sSHCzyYh.png",
  "https://i.imgur.com/6OJ7Jkch.jpg",
  "https://i.imgur.com/6OJ7Jkch.jpg",
  "https://i.imgur.com/boF4s0Nh.jpg",
  "https://i.imgur.com/sSHCzyYh.png",
  "https://i.imgur.com/sSHCzyYh.png",
  "https://i.imgur.com/6OJ7Jkch.jpg",
  "https://i.imgur.com/boF4s0Nh.jpg",
];

const Gallery = () => {
  return (
    <>
      <Nav />
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {images.map((image) => {
          return (
            <img
              style={{
                width: "33.33333vw",
              }}
              src={image}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
