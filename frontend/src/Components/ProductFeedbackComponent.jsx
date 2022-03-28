import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getComments, reset } from '../features/comments/commentSlice';

const ProductFeedbackComponent = ({ feedback }) => {
  const { comments, isLoading, isError, message } = useSelector(
    (state) => state.comments
  );

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (isError) {
  //       console.log(message);
  //     }

  //     dispatch(getComments(feedback._id));
  //   }, [feedback, isError, message]);

  //   useEffect(() => {
  //     if (comments) {
  //       console.log(comments.length);
  //     } else {
  //       console.log('no comments');
  //     }
  //   }, [comments]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <h3>Something went wrong</h3>;
  }

  return (
    <Link to={`/feedback/${feedback._id}`}>
      <div className='ProductFeedbackComponent'>
        <div className='container'>
          <div className='left'>
            <p>{feedback.upvotes}</p>
          </div>
          <div className='middle'>
            <h3 className='h3'>{feedback.title}</h3>
            <p className='body-1'>{feedback.description}</p>
            <div className='btn text-blue body-3'>{feedback.category}</div>
          </div>
          <div className='right'>
            {/* <p>{comments ? comments.length : 0}</p> */}
            <p></p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductFeedbackComponent;
