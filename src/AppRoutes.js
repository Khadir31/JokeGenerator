import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App  from './joke/App'
import AppQuiz from './quiz/AppQuiz'
// import { LoanCalc } from './pages/LoanCalc';

function AppRoutes() {

  //const Index = lazy(() => import("./pages/Index").then(module => ({ default: module.Index })))

  return (
    < Router >
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/AppQuiz' element={<AppQuiz />} />
      </Routes>
    </ Router>
  )

}

export default AppRoutes;
