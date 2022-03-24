import { useSelector, useDispatch } from 'react-redux';
import { getFeedbacks } from '../features/feedbacks/feedbackSlice';

const TopBarComponent = ({ feedback }) => {
  const { feedbacks, isLoading, isSuccess } = useSelector(
    (state) => state.feedbacks
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getFeedbacks(e.target.value));
    // console.log(e.target.value);
  };

  return (
    <div className='TopBarComponent'>
      <div className='left'>{feedback.length} Suggestions</div>
      <div className='middle'>
        <label htmlFor='sort'>Sort by:</label>

        <select name='sort' id='sort' onChange={handleChange}>
          <option value='most-upvotes'>Most Upvotes</option>
          <option value='least-upvotes'>Least Upvotes</option>
          <option value='most-comments'>Most Comments</option>
          <option value='least-comments'>Least Comments</option>
        </select>
      </div>
      <div className='right'>Add Feedback</div>
    </div>
  );
};
export default TopBarComponent;
