import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CommentContext from '../context/commentContext';

const ProductFeedbackComponent = ({ feedback }) => {
  const { commentCount } = useContext(CommentContext);

  //   useEffect(() => {
  //     if (isError) {
  //       console.log(message);
  //     }

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  //   if (isError) {
  //     return <h3>Something went wrong</h3>;
  //   }

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
            <p>{commentCount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductFeedbackComponent;
