import "./Video.scss";

const Video = ({ video, handleClick }) => {
  return (
    <article className="wrapper" onClick={() => handleClick(video.id)}>
      <section className="next">
        <img className="next__video" src={video.image} alt="" />
        <p>{video.title}</p>
      </section>
    </article>
  );
};

export default Video;
