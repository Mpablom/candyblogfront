import React from 'react';
import WorkPage from './pages/WorkPage';
import { Route, Router, Routes } from 'react-router-dom';
import WorkDetail from './components/WorkDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorkPage />} />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
