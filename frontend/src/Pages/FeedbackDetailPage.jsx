import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getFeedback } from '../features/feedbacks/feedbackSlice';
import {
  getComments,
  reset as commentReset,
} from '../features/comments/commentSlice';
import CommentComponent from '../Components/CommentComponent';

const FeedbackDetailPage = () => {
  const location = useLocation();

  const { feedback, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.feedbacks
  );

  const { comments, isLoading: commentsIsLoading } = useSelector(
    (state) => state.comments
  );

  const params = useParams();
  const dispatch = useDispatch();
  const { feedbackId } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getFeedback(feedbackId));
    dispatch(getComments(feedbackId));
  }, [isError, message, feedbackId]);

  useEffect(() => {
    console.log(comments.length);
  }, [comments]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <h3>Something went wrong</h3>;
  }

  return (
    <div className='FeedbackDetailPage'>
      <div className='container'>
        <div className='top-bar'>
          <Link to={'/'}>Back</Link>
          <br />
          <Link to={`/edit-feedback${location.pathname}`}>Edit Feedback</Link>
        </div>
        <div className='feedback-item'>
          <div className='left'>99</div>
          <div className='middle'>
            <h3>Feedback Title</h3>
            <p>Feedback Detail</p>
            <div>Category</div>
          </div>
          <div className='right'>
            <p>4</p>
          </div>
        </div>
        <div className='comments-container'>
          <p>Comments here:</p>
          {comments.map((commentItem) => (
            <CommentComponent
              key={commentItem._id}
              commentProps={commentItem}
            />
          ))}
        </div>
        <div className='add-comment'>
          <h3>Add Comment</h3>
          <textarea
            name=''
            id=''
            placeholder='Type your comment here'></textarea>
          <p>250 Characters left</p>
          <button>Post Comment</button>
        </div>
      </div>
    </div>
  );
};
export default FeedbackDetailPage;

//
