import axios from 'axios';

const API_URL = '/api/feedbacks/';

// Get feedback comments
const getComments = async (feedbackId) => {
  const res = await axios.get(API_URL + feedbackId + '/comments');

  return res.data;
};

// Create ticket note
// const createNote = async (noteText, ticketId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const res = await axios.post(
//     API_URL + ticketId + '/notes',
//     { text: noteText },
//     config
//   );

//   return res.data;
// };

const commentService = { getComments };

export default commentService;
