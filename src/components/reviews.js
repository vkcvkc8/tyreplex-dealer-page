import React from 'react';
import { Star, CircleUserRound } from 'lucide-react';

// Reviews Component
const Reviews = () => (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title">Google Reviews</h3>
        <div className="row">
          {['Md Nasir', 'Rohit Bhati', 'Pradeep Kumar'].map((name, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="border rounded p-3">
              
                <h5><CircleUserRound className='me-2' />{name}</h5>
                <div className="d-flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-warning" size={16} />
                  ))}
                </div>
                <p className="small text-muted">Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  export default Reviews;