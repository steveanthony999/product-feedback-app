import { Link } from 'react-router-dom';

const NewFeedbackPage = () => {
  return (
    <div className='NewFeedbackPage'>
      <div className='container'>
        <div className='top'>
          <Link to={-1}>Back</Link>
        </div>
        <div className='bottom'>
          <div>+</div>
          <h2>Create New Feedback</h2>
          <h4>Feedback Title</h4>
          <p>Add a short, descriptive headline</p>
          <input type='text' />
          <h4>Category</h4>
          <p>Choose a category for your feedback</p>
          <select name='' id=''>
            <option value=''>Hello World</option>
            <option value=''>Goodbye World</option>
          </select>
          <h4>Feedback Detail</h4>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea name='' id='' cols='30' rows='10'></textarea>
          <div className='btn-container'>
            <Link to='/'>Cancel</Link>
            <button>Add Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewFeedbackPage;
