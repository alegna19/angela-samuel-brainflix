import Video from "../Video/Video";
import "./NextVideo.scss";

const NextVideos = ({ dataVideos, handleClick, activeVideoId }) => {
  return (
    <div className="next-videos">
      <h3 className="next-videos__title">NEXT VIDEOS</h3>
      {dataVideos.map((video) => {
        return video.id !== activeVideoId ? (
          <Video key={video.id} video={video} handleClick={handleClick} />
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default NextVideos;
