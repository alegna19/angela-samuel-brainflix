import "./Hero.scss";

const Hero = ({ mainVideo }) => {
  return (
    <div>
      <video
        className="video"
        poster={mainVideo.image}
        controls
        width="100%"
        height="100%"
      ></video>
    </div>
  );
};

export default Hero;
