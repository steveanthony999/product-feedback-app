import axios from 'axios';

// const API_URL = '/api/tickets/';
const API_URL = 'data.json';

// Create new ticket
// const createTicket = async (ticketData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const res = await axios.post(API_URL, ticketData, config);

//   return res.data;
// };

// Get Product Feedback
const getProductFeedback = async (token) => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   const res = await axios.get(API_URL, config);
  const res = await axios.get(API_URL);

  return res.data;
};

// Get user ticket
// const getTicket = async (ticketId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const res = await axios.get(API_URL + ticketId, config);

//   return res.data;
// };

// Close ticket
// const closeTicket = async (ticketId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const res = await axios.put(API_URL + ticketId, { status: 'closed' }, config);

//   return res.data;
// };

// const ticketService = { createTicket, getTickets, getTicket, closeTicket };
const ProductFeedbackService = { getProductFeedback };

export default ProductFeedbackService;
