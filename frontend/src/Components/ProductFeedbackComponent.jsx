const ProductFeedbackComponent = ({ feedback }) => {
  return (
    <div className='ProductFeedbackComponent'>
      <div className='container'>
        <div className='left'></div>
        <div className='middle'>
          <h3 className='h3'>{feedback.title}</h3>
          <p className='body-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            obcaecati?
          </p>
          <div className='btn text-blue body-3'>Button Name</div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  );
};
export default ProductFeedbackComponent;
