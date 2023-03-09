import Comments from "../Comments/Comments";
import formImg from "../../assets/images/Mohan-muruge.jpg";
import "./FormComment.scss";

const FormComment = ({ mainVideo }) => {
  const countComments = mainVideo.comments.length;

  return (
    <>
      <section>
        <div className="wrapper">
          <p className="form__count">{countComments} Comments</p>
          <form className="form">
            <div className="form__info ">
              <img className="form__image" src={formImg} alt="representative" />
              <div className="form__input">
                <label className="form__label" name="comment">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  className="form__comment"
                  type="text"
                  name="comment"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
            </div>
            <div className="form__btn ">
              <button
                id="submitBtn"
                className="form__button form__add-comment"
                type="submit"
              >
                COMMENT
              </button>
            </div>
            <div className="comments"></div>
          </form>
        </div>
      </section>
      <Comments comments={mainVideo.comments} />
    </>
  );
};

export default FormComment;
