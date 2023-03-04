const Comment = ({ comment }) => {
  return (
    <article className="comments__info" key={comment.id}>
      <div className="comments__image"></div>
      <p className="comments__name">{comment.name}</p>
      <p className="comments__date">
        {new Date(comment.timestamp).toLocaleDateString()}
      </p>
      <p className="comments__content">{comment.comment}</p>
    </article>
  );
};

export default Comment;
