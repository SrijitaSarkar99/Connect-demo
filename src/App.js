import React, {Suspense, lazy} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/pages/Home'));

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
        </Suspense>
      </Router> 
    </div>
  );
}

export default App;
