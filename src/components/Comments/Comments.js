import Comment from "../Comment/Comment";
import "./Comments.scss";

const Comments = ({ comments }) => {
  const sortedComments = comments.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  return (
    <div className="comments">
      <div className="wrapper">
        {sortedComments.slice(0, 3).map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
