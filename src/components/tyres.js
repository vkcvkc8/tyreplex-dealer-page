import React from 'react';
import { Star, ChevronDown,ShieldCheck } from 'lucide-react';

// Tyres Component
const Tyres = () => {
  const tyres = [
    {
      name: "Apollo AMAZER 4G LIFE",
      size: "145/80 R13",
      rating: 4.5,
      reviews: 120,
      price: 3562,
      image: "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      type: "Tubeless"
    },
    {
      name: "Apollo AMAZER 4G LIFE",
      size: "155/65 R13",
      rating: 4.7,
      reviews: 98,
      price: 3401,
      image: "https://www.tyreplex.com/public/uploads/all/2Q0WlU6pFBTPRoQF3SWN0VkXExbPiONFRZNBrD2Y.jpg",
      type: "Tubeless"
    },
    {
      name: "Apollo AMAZER 4G LIFE",
      size: "155/70 R13",
      rating: 4.6,
      reviews: 110,
      price: 4013,
      image: "https://www.tyreplex.com/public/uploads/all/2Q0WlU6pFBTPRoQF3SWN0VkXExbPiONFRZNBrD2Y.jpg",
      type: "Tubeless"
    },
    {
      name: "Apollo AMAZER 4G LIFE",
      size: "165/70 R13",
      rating: 4.8,
      reviews: 85,
      price: 4062,
      image: "https://www.tyreplex.com/public/uploads/all/2Q0WlU6pFBTPRoQF3SWN0VkXExbPiONFRZNBrD2Y.jpg",
      type: "Tubeless"
    }
    // Add more tyre objects as needed to reach 8 items
  ];

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title">Tyres sold by this Dealer</h3>
        <div className="d-flex justify-content-between mb-3">
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Filter By <ChevronDown size={16} />
            </button>
            <ul className="dropdown-menu" aria-labelledby="filterDropdown">
              <li><a className="dropdown-item" href="www.google.com">Most Popular</a></li>
              <li><a className="dropdown-item" href="www.google.com">Price: Low to High</a></li>
              <li><a className="dropdown-item" href="www.google.com">Price: High to Low</a></li>
            </ul>
          </div>
          <button className="btn btn-outline-primary">Advanced</button>
        </div>
        <div className="row">
          {tyres.map((tyre, index) => (
            <div key={index} className="col-md-3 mb-3 position-relative">
              <div className="bg-tyre border rounded p-3 pt-4">
                <span className="badge-style badge bg-warning mb-2 rounded-0">
                <ShieldCheck size={16} />
                5 Year Warranty</span>
                <h5>{tyre.name}</h5>
                <p className="text-muted small">{tyre.size}</p>
                <div className="d-flex align-items-center mb-2">
                  <Star className="text-warning me-1" size={16} />
                  <span className="me-1">{tyre.rating}</span>
                  <span className="text-muted small">({tyre.reviews} Reviews)</span>
                </div>
                <p className="fw-bold">₹ {tyre.price}</p>
                <p className="small text-muted">{tyre.type}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-outline-primary">View more <ChevronDown size={16} /></button>
        </div>
      </div>
    </div>
  );
};

export default Tyres;