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
  const { feedbacks, isLoading, isSuccess } = useSelector(
    (state) => state.feedbacks
  );

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
    if (sortOrder === 'most-upvotes') {
      const sorted = feedbacks.slice().sort((a, b) => b.upvotes - a.upvotes);
      setSortedFeedback(sorted);
    } else if (sortOrder === 'least-upvotes') {
      const sorted = feedbacks.slice().sort((a, b) => a.upvotes - b.upvotes);
      setSortedFeedback(sorted);
    } else if (sortOrder === 'most-comments') {
      console.log('Most Comments');
      //   setSortedFeedback(_.orderBy(feedbacks, ['comments'], ['desc']));
      setSortedFeedback(
        _.orderBy(
          feedbacks,
          [
            function (x) {
              return x.comments === undefined ? [] : x.comments;
              //   return x.comments;
            },
          ],
          ['desc']
        )
      );
    } else if (sortOrder === 'least-comments') {
      console.log('Least Comments');
      //   setSortedFeedback(_.orderBy(feedbacks, ['comments'], ['asc']));
      setSortedFeedback(
        _.orderBy(
          feedbacks,
          [
            function (x) {
              return x.comments === undefined ? [] : x.comments;
              //   return x.comments;
            },
          ],
          ['asc']
        )
      );
    }
  }, [feedbacks, sortOrder]);

  useEffect(() => {
    // const x = feedbacks.map((item) => item.comments);
    // x.sort();
    // console.log(x);
    //
    // const commentsArray = feedbacks.map((x) => x.comments);
    // const newArr = commentsArray.map((x) => (x === undefined ? [] : x));
    // newArr.sort((a, b) => b.length - a.length);
    // console.log(newArr);
    //
    // const sorted = feedbacks
    //   .map((x) => x.comments)
    //   .map((y) => (y === undefined ? [] : y))
    //   .sort((a, b) => b.length - a.length);
    // console.log(sorted);
    //
    // const sorted = feedbacks.slice().sort((a, b) => a.comments - b.comments);
    // console.log(sorted);
    //
    // console.log(_.orderBy(feedbacks, ['comments'], ['asc']));
    //
    // console.log(
    //   _.sortBy(feedbacks, [
    //     function (x) {
    //       return x.comments === undefined ? [] : x;
    //     },
    //   ])
    // );
    //
    // _.orderBy(
    //   feedbacks,
    //   [
    //     function (x) {
    //       return (x.comments === undefined ? [] : x.comments);
    //       //   return x.comments;
    //     },
    //   ],
    //   ['asc']
    // );
  }, [feedbacks]);

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
              {sortedFeedback.map((feedback) => (
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
