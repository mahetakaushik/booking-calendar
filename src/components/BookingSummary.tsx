import React from "react";

interface BookingSummaryProps {
  numberOfNights: number;
  totalPrice: number;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  numberOfNights,
  totalPrice,
}) => {
  return (
    <div className="booking-summary-card">
      <div className="summary-left">
        <div className="summary-title">
          Select dates to <br />
          see total cost
        </div>
      </div>
      <div className="summary-right">
        <div className="total-nights">
          Total for {numberOfNights} {numberOfNights === 1 ? "night" : "nights"}
        </div>
        <div className="total-amount">
          <sup>$</sup>
          {totalPrice.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
