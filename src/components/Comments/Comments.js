import Comment from "../Comment/Comment";
import "./Comments.scss";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <div className="wrapper">
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
