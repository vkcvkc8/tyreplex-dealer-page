import React, { useState } from 'react';

// Payment Mode Component
const PaymentMode = () => (
  <div className="card mb-4">
    <div className="card-body">
      <h3 className="card-title">Payment Mode</h3>
      <ul className="list-unstyled">
        <li><span className="text-success me-2">✓</span> Deposit to Account</li>
        <li><span className="text-success me-2">✓</span> Net Banking</li>
        <li><span className="text-success me-2">✓</span> Credit Card/Debit Card</li>
        <li><span className="text-success me-2">✓</span> UPI</li>
        <li><span className="text-success me-2">✓</span> Wallets (PayTM/PhonePe/Amazon etc.)</li>
      </ul>
    </div>
  </div>
);




export default PaymentMode;