import("./Comments.scss");

const Comments = (props) => {
  return (
    <div className="comments">
      <div className="wrapper">
        {props.commentsData.comments.map((comment) => {
          return (
            <article className="comments__info" key={comment.id}>
              <img className="comments__image" src="" alt="" />
              <p className="comments__name">{comment.name}</p>
              <p className="comments__date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
              <p className="comments__content">{comment.comment}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
