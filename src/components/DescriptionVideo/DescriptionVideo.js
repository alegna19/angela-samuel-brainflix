const DescriptionVideo = (props) => {
  return (
    <div className="wrapper">
      <div className="description">
        <div>
          <h1 className="description__title">{props.description.title}</h1>
          <section>
            <p className="description__metrics">{props.description.channel}</p>
            <p className="description__info">
              {new Date(props.description.timestamp).toLocaleDateString()}
            </p>
            <p className="description__metrics">{props.description.views}</p>
            <p className="description__metrics">{props.description.likes}</p>
          </section>
          <section>
            <p className="description__info">{props.description.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DescriptionVideo;
