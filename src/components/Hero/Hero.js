import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div>
      <video
        className="video"
        poster={hero.image}
        controls
        width="100%"
        height="100%"
      ></video>
    </div>
  );
};

export default Hero;
