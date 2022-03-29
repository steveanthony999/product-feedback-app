import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

import { getFeedback } from '../features/feedbacks/feedbackSlice';
import { getComments } from '../features/comments/commentSlice';
import CommentComponent from '../Components/CommentComponent';

const FeedbackDetailPage = () => {
  const location = useLocation();

  const { feedbacks, isLoading, isError, message } = useSelector(
    (state) => state.feedbacks
  );

  const { comments } = useSelector((state) => state.comments);

  const dispatch = useDispatch();
  const { feedbackId } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getFeedback(feedbackId));
    dispatch(getComments(feedbackId));
  }, [dispatch, isError, message, feedbackId]);

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  //   if (isError) {
  //     return <h3>Something went wrong</h3>;
  //   }

  return (
    <div className='FeedbackDetailPage'>
      <div className='container'>
        <div className='top-bar'>
          <Link to={'/'}>Back</Link>
          <br />
          <Link to={`/edit-feedback${location.pathname}`}>Edit Feedback</Link>
        </div>
        <div className='feedback-item'>
          <div className='left'>{feedbacks.upvotes}</div>
          <div className='middle'>
            <h3>{feedbacks.title}</h3>
            <p>{feedbacks.description}</p>
            <div>{feedbacks.category}</div>
          </div>
          <div className='right'>
            <p>{feedbacks.commentLength}</p>
            {/* <p>{feedbacks.commentLength + comments.repliesLength}</p> */}
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
