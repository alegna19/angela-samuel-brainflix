import "./Hero.scss";

const Hero = ({ hero, activeVideoId }) => {
  const activeVideo = hero.find((video) => video.id === activeVideoId);
  return (
    <div>
      <video
        className="video"
        poster={activeVideo.image}
        controls
        width="100%"
        height="100%"
      ></video>
    </div>
  );
};

export default Hero;
