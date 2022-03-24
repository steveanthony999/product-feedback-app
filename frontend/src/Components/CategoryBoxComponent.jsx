import { useSelector, useDispatch } from 'react-redux';
import { getFeedbacks } from '../features/feedbacks/feedbackSlice';

const Button = ({ name, isChecked }) => {
  const { feedbacks, isLoading, isSuccess } = useSelector(
    (state) => state.feedbacks
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id !== 'All') {
      dispatch(getFeedbacks(e.target.id.toLowerCase()));
    } else {
      dispatch(getFeedbacks());
    }
  };

  return (
    <>
      <input
        type='radio'
        name='category'
        id={name}
        value={name}
        defaultChecked={isChecked}
        onChange={handleChange}
      />
      <label className={`btn text-blue body-3`} htmlFor={name}>
        {name}
      </label>
    </>
  );
};

const CategoryBoxComponent = () => {
  return (
    <div className='CategoryBox'>
      <div className='container'>
        <Button name={'All'} isChecked />
        <Button name={'UI'} />
        <Button name={'UX'} />
        <Button name={'Enhancement'} />
        <Button name={'Bug'} />
        <Button name={'Feature'} />
      </div>
    </div>
  );
};
export default CategoryBoxComponent;
