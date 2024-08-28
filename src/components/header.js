import React from 'react';
import { CircleUserRound } from 'lucide-react';

// DropdownMenu Component
const DropdownMenu = ({ items }) => (
  <ul className="dropdown-menu">
    {items.map(({ label, href }, index) => (
      <li key={index}>
        <a className="dropdown-item" href={href}>{label}</a>
      </li>
    ))}
  </ul>
);

// Header Component
const Header = () => {
  const dropdownItems = {
    carTyres: [
      { label: 'MRF Tyres', href: '//www.tyreplex.com/car-tyres/mrf' },
      { label: 'CEAT Tyres', href: '//www.tyreplex.com/car-tyres/ceat' },
      { label: 'Goodyear Tyres', href: '//www.tyreplex.com/car-tyres/goodyear' },
      { label: 'Apollo Tyres', href: '//www.tyreplex.com/car-tyres/apollo' },
      { label: 'Bridgestone Tyres', href: '//www.tyreplex.com/car-tyres/bridgestone' },
      { label: 'JK Tyres', href: '//www.tyreplex.com/car-tyres/jk' },
      { label: 'Michelin Tyres', href: '//www.tyreplex.com/car-tyres/michelin' },
      { label: 'All Car Tyres', href: '//www.tyreplex.com/car-tyres' },
    ],
    bikeTyres: [
      { label: 'MRF Tyres', href: '//www.tyreplex.com/bike-tyres/mrf' },
      { label: 'CEAT Tyres', href: '//www.tyreplex.com/bike-tyres/ceat' },
      { label: 'Apollo Tyres', href: '//www.tyreplex.com/bike-tyres/apollo' },
      { label: 'Bridgestone Tyres', href: '//www.tyreplex.com/bike-tyres/bridgestone' },
      { label: 'JK Tyres', href: '//www.tyreplex.com/bike-tyres/jk' },
      { label: 'Michelin Tyres', href: '//www.tyreplex.com/bike-tyres/michelin' },
      { label: 'Pirelli Tyres', href: '//www.tyreplex.com/bike-tyres/pirelli' },
      { label: 'All Bike Tyres', href: '//www.tyreplex.com/bike-tyres' },
    ],
    commercialTyres: [{ label: 'All Commercial Tyres', href: '/commercial-tyres' }],
    accessories: [
      { label: 'Accessories', href: '/accessories' },
      { label: 'Batteries', href: '/batteries' },
      { label: 'Alloy Wheels', href: '/alloy' },
    ],
    more: [
      { label: 'CashBack Offer', href: '/offers-terms-conditions' },
      { label: 'Find Tyre Dealers', href: '/tyre-dealers-in-india' },
      { label: 'Compare Tyres', href: '/compare-tyres' },
      { label: 'Are you a Tyre Dealer', href: '/dealer-details' },
      { label: 'Wheel Balancing', href: '/wheel-balancing' },
      { label: 'Wheel Alignment', href: '/wheel-alignment' },
    ]
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
        <img src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60" alt="Tyreplex Logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto fw-bold">
            {Object.keys(dropdownItems).map(key => (
              <li className="nav-item dropdown" key={key}>
                <a className="nav-link dropdown-toggle text-capitalize" href="www.google.com" role="button">{key.replace(/([A-Z])/g, ' $1').trim()}</a>
                <DropdownMenu items={dropdownItems[key]} />
              </li>
            ))}
          </ul>
          <button className="btn text-dark fw-bold"><CircleUserRound className='me-2' />Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
