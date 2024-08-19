import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkPage from './pages/WorkPage';
import WorkDetail from './components/WorkDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/works" element={<WorkPage />} />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
