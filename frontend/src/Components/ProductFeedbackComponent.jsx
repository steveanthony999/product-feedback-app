import { Link } from 'react-router-dom';

const ProductFeedbackComponent = ({ feedback }) => {
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
            <p>{feedback.comments ? feedback.comments.length : 0}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductFeedbackComponent;
