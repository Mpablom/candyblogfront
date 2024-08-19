import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkPage from './pages/WorkPage';
import WorkDetail from './components/WorkDetail';
import HomePage from './pages/HomePage';
import { ContactPage } from '@mui/icons-material';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorkPage />} />
        <Route path="/works/:id" element={<WorkDetail />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
