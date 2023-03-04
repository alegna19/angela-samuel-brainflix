import "../DescriptionVideo/DescriptionVideo.scss";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";

const DescriptionVideo = ({ videos, activeVideoId }) => {
  const activeVideo = videos.find((video) => video.id === activeVideoId);

  return (
    <div className="wrapper">
      <div className="description">
        <div>
          <h1 className="description__title">{activeVideo.title}</h1>
          <section className="description__metrics">
            <div className="description__details">
              <p className="description__subTitle">{activeVideo.channel}</p>
              <p className="description__date">
                {new Date(activeVideo.timestamp).toLocaleDateString()}
              </p>
            </div>
            <div className="description__media">
              <div className="description__social">
                <img className="description__views" src={views} alt="views" />
                <p className="description__views">{activeVideo.views}</p>
              </div>
              <div className="description__social">
                <img className="description__likes" src={likes} alt="likes" />
                <p className="description__likes">{activeVideo.likes}</p>
              </div>
            </div>
          </section>
          <section>
            <p className="description__info">{activeVideo.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DescriptionVideo;
