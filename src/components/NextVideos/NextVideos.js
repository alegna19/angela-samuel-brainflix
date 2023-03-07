import Video from "../Video/Video";
import "./NextVideo.scss";

const NextVideos = ({ dataVideos, activeVideoId }) => {
  return (
    <div className="next-videos">
      <h3 className="next-videos__title">NEXT VIDEOS</h3>
      {dataVideos.map((video) => {
        return video.id !== activeVideoId ? (
          <Video key={video.id} video={video} />
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default NextVideos;
