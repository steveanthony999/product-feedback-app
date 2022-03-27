const CommentComponent = ({ commentProps }) => {
  return (
    <div className='CommentComponent'>
      {/* <div>{new Date(ticket.createdAt).toLocaleString('en-us')}</div> */}
      <p>{commentProps.content}</p>
      <p>Dunno 2</p>
    </div>
  );
};
export default CommentComponent;
