import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import { getFeedbacks, reset } from '../features/feedbacks/feedbackSlice';

import CategoryBoxComponent from '../Components/CategoryBoxComponent';
import TopBarComponent from '../Components/TopBarComponent';
import ProductFeedbackComponent from '../Components/ProductFeedbackComponent';
import EmptyFeedbackComponent from '../Components/EmptyFeedbackComponent';

import BackgroundHeaderImg from '../assets/suggestions/desktop/background-header.png';

const HomePage = () => {
  const { feedbacks, isSuccess } = useSelector((state) => state.feedbacks);

  const dispatch = useDispatch();

  const [sortOrder, setSortOrder] = useState();
  const [sortedFeedback, setSortedFeedback] = useState(feedbacks);

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

  useEffect(() => {
    if (feedbacks) {
      if (sortOrder === 'most-upvotes') {
        const sorted =
          feedbacks &&
          feedbacks.length > 0 &&
          feedbacks.slice().sort((a, b) => b.upvotes - a.upvotes);
        setSortedFeedback(sorted);
      } else if (sortOrder === 'least-upvotes') {
        const sorted = feedbacks.slice().sort((a, b) => a.upvotes - b.upvotes);
        setSortedFeedback(sorted);
      } else if (sortOrder === 'most-comments') {
        const sorted = feedbacks
          .slice()
          .sort((a, b) => b.commentLength - a.commentLength);
        setSortedFeedback(sorted);
        // setSortedFeedback(
        //   _.orderBy(
        //     feedbacks,
        //     [
        //       function (x) {
        //         return x.comments === undefined ? [] : x.comments;
        //       },
        //     ],
        //     ['desc']
        //   )
        // );
      } else if (sortOrder === 'least-comments') {
        const sorted = feedbacks
          .slice()
          .sort((a, b) => a.commentLength - b.commentLength);
        setSortedFeedback(sorted);
        // setSortedFeedback(
        //   _.orderBy(
        //     feedbacks,
        //     [
        //       function (x) {
        //         return x.comments === undefined ? [] : x.comments;
        //       },
        //     ],
        //     ['asc']
        //   )
        // );
      }
    }
  }, [feedbacks, sortOrder]);

  const passSortOrder = (e) => {
    setSortOrder(e);
  };

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
          <TopBarComponent passSortOrder={passSortOrder} />
          {feedbacks.length === 0 ? (
            <EmptyFeedbackComponent />
          ) : (
            <>
              {sortedFeedback.length > 0 &&
                sortedFeedback.map((feedback) => (
                  <ProductFeedbackComponent
                    key={feedback._id}
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
