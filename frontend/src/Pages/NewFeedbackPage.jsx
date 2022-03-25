import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createFeedback, reset } from '../features/feedbacks/feedbackSlice';

const NewFeedbackPage = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.feedbacks
  );

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Feature');
  const [detail, setDetail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
      dispatch(reset);
      //   navigate('/');
    }

    dispatch(reset);
  }, [dispatch, isError, isSuccess, navigate, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({ title, category, detail });
    dispatch(createFeedback({ title, category, detail }));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='NewFeedbackPage'>
      <div className='container'>
        <div className='top'>
          <Link to={-1}>Back</Link>
        </div>
        <div className='bottom'>
          <div>+</div>
          <form onSubmit={handleSubmit}>
            <h2>Create New Feedback</h2>
            <h4>Feedback Title</h4>
            <p>Add a short, descriptive headline</p>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <h4>Category</h4>
            <p>Choose a category for your feedback</p>
            <select
              name='category'
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value='Feature'>Feature</option>
              <option value='UI'>UI</option>
              <option value='UX'>UX</option>
              <option value='Enhancement'>Enhancement</option>
              <option value='Bug'>Bug</option>
            </select>
            <h4>Feedback Detail</h4>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              name='detail'
              id='detail'
              value={detail}
              onChange={(e) => setDetail(e.target.value)}></textarea>
            <div className='btn-container'>
              <Link to='/'>Cancel</Link>
              <button>Add Feedback</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewFeedbackPage;
