import Video from "../Video/Video";
import "./NextVideo.scss";

const NextVideos = ({ dataVideos, handleClick }) => {
  return (
    <div>
      {dataVideos.map((video) => {
        return <Video key={video.id} video={video} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default NextVideos;
