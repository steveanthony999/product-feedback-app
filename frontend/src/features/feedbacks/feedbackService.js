import axios from 'axios';

const API_URL = 'data.json';

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

const feedbackService = { getFeedbacks };

export default feedbackService;
