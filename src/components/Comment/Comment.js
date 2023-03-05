const Comment = ({ comment }) => {
  return (
    <div className="comments__container">
      <article className="comments__info" key={comment.id}>
        <div className="comments__image"></div>
        <div>
          <div className="comments__details">
            <p className="comments__name">{comment.name}</p>
            <p className="comments__date">
              {new Date(comment.timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </div>
          <p className="comments__content">{comment.comment}</p>
        </div>
      </article>
    </div>
  );
};

export default Comment;
