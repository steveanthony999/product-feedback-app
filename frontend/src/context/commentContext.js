import { createContext, useState } from 'react';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [commentCount, setCommentCount] = useState(27);

  return (
    <CommentContext.Provider
      value={{
        commentCount,
        setCommentCount,
      }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
