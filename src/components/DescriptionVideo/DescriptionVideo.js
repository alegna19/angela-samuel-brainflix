import "../DescriptionVideo/DescriptionVideo.scss";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";

const DescriptionVideo = ({ mainVideo }) => {
  return (
    <div className="wrapper">
      <div className="description">
        <div>
          <h1 className="description__title">{mainVideo.title}</h1>
          <section className="description__metrics">
            <div className="description__details">
              <p className="description__subTitle">{mainVideo.channel}</p>
              <p className="description__date">
                {new Date(mainVideo.timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
            </div>
            <div className="description__media">
              <div className="description__social">
                <img className="description__views" src={views} alt="views" />
                <p className="description__views">{mainVideo.views}</p>
              </div>
              <div className="description__social">
                <img className="description__likes" src={likes} alt="likes" />
                <p className="description__likes">{mainVideo.likes}</p>
              </div>
            </div>
          </section>
          <section>
            <p className="description__info">{mainVideo.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DescriptionVideo;
