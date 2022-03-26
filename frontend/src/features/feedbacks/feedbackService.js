import axios from 'axios';

const API_URL = 'data.json';

// Create New Feedback
const createFeedback = async (feedbackData) => {
  const res = await axios.post(API_URL, feedbackData);

  //   console.log(res.data);
  return res.data;
};

// Get feedbacks
const getFeedbacks = async (filteredItem) => {
  const res = await axios.get(API_URL, filteredItem);

  if (filteredItem) {
    const newProductRequests = res.data.productRequests.filter(
      (item) => item.category === filteredItem
    );

    return newProductRequests;
  } else {
    return res.data.productRequests;
  }
};

// Get Single Feedback
const getFeedback = async (feedbackId) => {
  //   const res = await axios.get(API_URL + feedbackId);
  const res = await axios.get(feedbackId);

  console.log(res.data);
  //   return res.data;
};

const feedbackService = { createFeedback, getFeedbacks, getFeedback };

export default feedbackService;
