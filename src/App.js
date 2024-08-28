import React from 'react';
import { Search } from 'lucide-react';
import PaymentMode from './components/paymentMode';
import DealerInfo from './components/dealerInfo';
import Reviews from './components/reviews';
import Deals from './components/deals';
import Services from './components/services';
import Tyres from './components/tyres';
import Footer from './components/footer';
import Header from './components/header';

import './App.css';

// Main App Component
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container mt-4">
        <DealerInfo />
        <Reviews />
        <Deals />
        <Services />
        <Tyres />
        <PaymentMode />
        <div className="card mb-4">
          <div className="card-body bg-warning bg-opacity-25">
            <h3 className="card-title">Have a question about Tyres?</h3>
            <p>Get an answer in 24 hours from our experts.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Ask or search your question" aria-label="Ask or search your question" />
              <button className="btn btn-outline-secondary" type="button"><Search size={16} /></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;