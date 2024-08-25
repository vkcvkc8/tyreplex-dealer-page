import React from 'react';

// Deals Component
const Deals = () => {
  const brands = [
    { name: 'MRF', logo: 'https://www.pngkit.com/png/full/160-1609711_information-mrf-tyres-logo-png.png' },
    { name: 'CEAT', logo: 'https://iconape.com/wp-content/png_logo_vector/ceat-tyres-logo.png' },
    { name: 'Goodyear', logo: 'https://www.carlogos.org/tire-logos/goodyear-logo-3000x800.png' },
    { name: 'Apollo', logo: 'https://www.pngkey.com/png/full/484-4848018_apollo-tyres-logo-png.png' },
    { name: 'Bridgestone', logo: 'https://www.carlogos.org/tire-brands-logos/Bridgestone-logo-5500x1500.png' },
    { name: 'JK Tyre', logo: 'https://zeevector.com/wp-content/uploads/JK-Tyre-logo-PNG-Transparent.png' }
  ];

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title">Deals in</h3>
        <div className="row">
          {brands.map((brand, index) => (
            <div key={index} className="col-4 col-md-2 mb-3">
              <div className="border rounded p-2 text-center">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="img-fluid mb-2" 
                  style={{ height:30 ,maxHeight: '50px', objectFit: 'contain' }}
                />
                <p className="small mb-0">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;