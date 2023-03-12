import "./Video.scss";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
  return (
    <Link to={`/videos/${video.id}`}>
      <article className="wrapper">
        <section className="next">
          <img className="next__video" src={video.image} alt="" />
          <div>
            <p className="next__title">{video.title}</p>
            <p className="next__subTitle">{video.channel}</p>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default Video;
