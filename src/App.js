import React, {Suspense, lazy} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Blogs from './components/pages/Blogs';
import StudyGroups from './components/pages/Groupstudy';
import SignUp from './components/pages/SignUp';

const Home = lazy(() => import('./components/pages/Home'));
const Blogs = lazy(() => import('./components/pages/Blogs'));

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/allstudygroups' element={<StudyGroups/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        </Suspense>
      </Router> 
    </div>
  );
}

export default App;
