import "./Video.scss";

const Video = ({ video, handleClick }) => {
  return (
    <article className="wrapper" onClick={() => handleClick(video.id)}>
      <section className="next">
        <img className="next__video" src={video.image} alt="" />
        <div>
          <p className="next__title">{video.title}</p>
          <p className="next__subTitle">{video.channel}</p>
        </div>
      </section>
    </article>
  );
};

export default Video;
