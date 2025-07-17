import React from "react";

interface BookingFormProps {
  guestName: string;
  nameError: string;
  onGuestNameChange: (name: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  guestName,
  nameError,
  onGuestNameChange,
  onCancel,
  onConfirm,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onConfirm();
    }
  };

  return (
    <div className="booking-form">
      <h3>Complete Your Booking</h3>
      <div className="form-group">
        <label htmlFor="guestName">Guest Name:</label>
        <input
          type="text"
          id="guestName"
          value={guestName}
          onChange={(e) => onGuestNameChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter guest name"
          className="guest-input"
        />
        {nameError && <p className="error-message">{nameError}</p>}
      </div>
      <div className="form-actions">
        <button onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
        <button onClick={onConfirm} className="confirm-btn">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
