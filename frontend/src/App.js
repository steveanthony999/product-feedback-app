import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CommentProvider } from './context/commentContext';

import HomePage from './Pages/HomePage';
import EditFeedbackPage from './Pages/EditFeedbackPage';
import FeedbackDetailPage from './Pages/FeedbackDetailPage';
import NewFeedbackPage from './Pages/NewFeedbackPage';
import RoadmapPage from './Pages/RoadmapPage';

import './styles/styles.css';

function App() {
  return (
    <CommentProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/feedback/:feedbackId'
              element={<FeedbackDetailPage />}
            />
            <Route path='/new-feedback' element={<NewFeedbackPage />} />
            <Route path='/edit-feedback/:id' element={<EditFeedbackPage />} />
            <Route path='/roadmap' element={<RoadmapPage />} />
          </Routes>
        </div>
      </Router>
    </CommentProvider>
  );
}

export default App;
