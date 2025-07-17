import React from "react";
import { BookingDetails } from "../types/booking";

interface SuccessModalProps {
  isOpen: boolean;
  bookingDetails: BookingDetails | null;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  bookingDetails,
  onClose,
}) => {
  if (!isOpen || !bookingDetails) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="success-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="success-icon">✅</div>
          <h2>Booking Confirmed!</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-content">
          <div className="booking-detail">
            <span className="detail-label">Guest:</span>
            <span className="detail-value">{bookingDetails.guestName}</span>
          </div>
          <div className="booking-detail">
            <span className="detail-label">Dates:</span>
            <span className="detail-value">{bookingDetails.dates}</span>
          </div>
          <div className="booking-detail">
            <span className="detail-label">Duration:</span>
            <span className="detail-value">
              {bookingDetails.nights}{" "}
              {bookingDetails.nights === 1 ? "night" : "nights"}
            </span>
          </div>
          <div className="booking-detail total">
            <span className="detail-label">Total Cost:</span>
            <span className="detail-value">
              ${bookingDetails.totalPrice.toLocaleString()}
            </span>
          </div>
          <p className="success-message">
            🎉 Your booking has been confirmed! The selected dates are now
            blocked in the calendar.
          </p>
        </div>
        <div className="modal-actions">
          <button className="modal-btn primary" onClick={onClose}>
            Awesome!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
