import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import EditFeedbackPage from './Pages/EditFeedbackPage';
import FeedbackDetailPage from './Pages/FeedbackDetailPage';
import NewFeedbackPage from './Pages/NewFeedbackPage';
import RoadmapPage from './Pages/RoadmapPage';

import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/feedback-detail' element={<FeedbackDetailPage />} />
          <Route path='/new-feedback' element={<NewFeedbackPage />} />
          <Route path='/edit-feedback' element={<EditFeedbackPage />} />
          <Route path='/roadmap' element={<RoadmapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
