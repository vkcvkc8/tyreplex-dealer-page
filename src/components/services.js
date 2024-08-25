import React from 'react';

// Services Component
const Services = () => {
  const services = [
    {
      name: 'Wheel Balancing',
      image: 'https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100'
    },
    {
      name: 'Wheel Alignment',
      image: 'https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100'
    }
  ];

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title">Services offered by this dealer</h3>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-6 col-md-3 mb-3">
              <div className="border rounded p-3 text-center">
                <img 
                  src={service.image} 
                  alt={`${service.name} icon`} 
                  className="img-fluid mb-2"
                  style={{ height: '50px', objectFit: 'cover' }}
                />
                <p className="mb-2">{service.name}</p>
                <button className="btn btn-danger btn-sm">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;