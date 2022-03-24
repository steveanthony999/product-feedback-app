import axios from 'axios';

const API_URL = 'data.json';

// Get feedbacks
const getFeedbacks = async () => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const res = await axios.get(API_URL, config);
  console.log(res.data.productRequests);
  return res.data.productRequests;
};

const feedbackService = { getFeedbacks };

export default feedbackService;
