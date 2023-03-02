const DescriptionVideo = ({ videos, activeVideoId }) => {
  const activeVideo = videos.find((video) => video.id === activeVideoId);

  return (
    <div className="wrapper">
      <div className="description">
        <div>
          <h1 className="description__title">{activeVideo.title}</h1>
          <section>
            <p className="description__metrics">{activeVideo.channel}</p>
            <p className="description__info">
              {new Date(activeVideo.timestamp).toLocaleDateString()}
            </p>
            <p className="description__metrics">{activeVideo.views}</p>
            <p className="description__metrics">{activeVideo.likes}</p>
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
