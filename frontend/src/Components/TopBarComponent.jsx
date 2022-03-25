import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TopBarComponent = ({ passSortOrder }) => {
  const [sortOrder, setSortOrder] = useState('most-upvotes');

  const { feedbacks, isLoading, isSuccess } = useSelector(
    (state) => state.feedbacks
  );

  useEffect(() => {
    passSortOrder(sortOrder);
  }, [sortOrder]);

  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className='TopBarComponent'>
      <div className='left'>{feedbacks.length} Suggestions</div>
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
