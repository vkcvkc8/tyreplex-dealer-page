import React from 'react';
import { Star, MapPin, Clock, ShieldCheck } from 'lucide-react';

// Dealer Info Component
const DealerInfo = () => {
  const images = [
    'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
    'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
    'https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300',
  ];

  return (
    <div className="card mb-4">
      <div className="row">
      {/* Left Column: Dealer Info */}
      <div className="col-md-6">
        <div className=" mb-4">
          <div className="card-body">
            <h4 className="card-title">
              SHREE HEMKUNT TYRES AND SERVICES{' '}
              <span className="text-success">
                <ShieldCheck className="me-2" />
                Verified
              </span>
            </h4>
            <div className="d-flex align-items-center mb-2">
              <span className="badge bg-success me-2">4.8</span>
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="text-warning me-1" />
              ))}
              <span className="text-muted">2278 Reviews</span>
            </div>
            <p className="card-text">
              <MapPin className="me-2" />
              PLOT NUMBER 09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND 02 INDIRAPURAM Ghaziabad, Uttar Pradesh, 201014
            </p>
            <p className="card-text">
              <Clock className="me-2" />
              Open - Monday to Sunday : 10:00AM to 8:00PM
            </p>
            <button className="btn btn-outline-danger rounded-0 px-5">Get Directions</button>
          </div>
        </div>
      </div>

      {/* Right Column: Image Slider */}
      <div className="col-md-6 p-3 px-4">
        <div id="imageSlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {images.map((src, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#imageSlider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#imageSlider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DealerInfo;
