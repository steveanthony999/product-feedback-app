import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFeedbacks, reset } from '../features/feedbacks/feedbackSlice';

import CategoryBoxComponent from '../Components/CategoryBoxComponent';
import ProductFeedbackComponent from '../Components/ProductFeedbackComponent';
import EmptyFeedbackComponent from '../Components/EmptyFeedbackComponent';

import BackgroundHeaderImg from '../assets/suggestions/desktop/background-header.png';

const HomePage = () => {
  const { feedbacks, isLoading, isSuccess } = useSelector(
    (state) => state.feedbacks
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  return (
    <div className='HomePage'>
      <div className='container'>
        <div className='left'>
          <div
            className='top'
            style={{
              background: `url(${BackgroundHeaderImg}) no-repeat center center/cover`,
            }}>
            <h2 className='h2 text-white'>Frontend Mentor</h2>
            <br />
            <p className='body-2 text-white'>Feedback Board</p>
          </div>
          <div className='middle'>
            <CategoryBoxComponent />
          </div>
          <div className='bottom'>bottom</div>
        </div>
        <div className='right'>
          {feedbacks.length === 0 ? (
            <EmptyFeedbackComponent />
          ) : (
            <>
              {feedbacks.map((feedback) => (
                <ProductFeedbackComponent
                  key={feedback.id}
                  feedback={feedback}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
