import { useEffect } from 'react';

const CommentComponent = ({ commentProps }) => {
  useEffect(() => {
    console.log(commentProps.content);
  }, [commentProps]);
  return (
    <div className='CommentComponent'>
      {/* <div>{new Date(ticket.createdAt).toLocaleString('en-us')}</div> */}
      <div>Dunno 1</div>
      <div>Dunno 2</div>
    </div>
  );
};
export default CommentComponent;
