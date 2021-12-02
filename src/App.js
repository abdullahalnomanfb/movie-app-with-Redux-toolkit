import React from 'react';
import './App.scss';
import Home from './Components/Home/Home';
import MoveDetails from './Components/MoveDetails/MoveDetails';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PageNotFound from './Components/PageNotFound/PageNotFound';


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MoveDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes >
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;