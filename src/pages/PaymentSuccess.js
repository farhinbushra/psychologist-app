import React from "react";
import "./PaymentSuccess.css";

function PaymentSuccess() {
  const handleHome = () => (window.location.href = "/");

  return (
    <div className="payment-success">
      <div className="payment-card">
        <div className="icon">✓</div>
        <h1>Payment Successful</h1>
        <p className="lead">Thank you — your appointment is confirmed.</p>

        <div className="details">
          <div className="detail"><strong>Amount:</strong> $50.00</div>
          <div className="detail"><strong>Transaction ID:</strong> TXN123456</div>
          <div className="detail"><strong>Date:</strong> {new Date().toLocaleDateString()}</div>
        </div>

        <div className="actions">
          <button className="btn btn-primary" onClick={handleHome}>Back to Home</button>
          <button className="btn btn-ghost" onClick={() => window.print()}>Print Receipt</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
