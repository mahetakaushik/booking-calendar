import React, { useState, useMemo, useEffect } from "react";
import "./BookingCalendar.css";
import {
  BookedRange,
  BookingDetails,
  NotificationState,
} from "../types/booking";

import CalendarIcon from "./CalendarIcon";
import ProfileSection from "./ProfileSection";
import Notification from "./Notification";
import CalendarNavigation from "./CalendarNavigation";
import CalendarGrid from "./CalendarGrid";
import BookingSummary from "./BookingSummary";
import BookingForm from "./BookingForm";
import SuccessModal from "./SuccessModal";

const BookingCalendar: React.FC = () => {
  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const [selectedDates, setSelectedDates] = useState<Date[]>(() => {
    const savedSelectedDates = localStorage.getItem("selectedDates");
    if (savedSelectedDates) {
      try {
        const parsedDates = JSON.parse(savedSelectedDates);
        return parsedDates.map((dateStr: string) => new Date(dateStr));
      } catch (error) {
        console.error("Error parsing saved selected dates:", error);
      }
    }
    return [];
  });

  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    const savedCurrentMonth = localStorage.getItem("currentMonth");
    if (savedCurrentMonth) {
      try {
        return new Date(savedCurrentMonth);
      } catch (error) {
        console.error("Error parsing saved current month:", error);
      }
    }
    return new Date(today.getFullYear(), today.getMonth());
  });

  const [bookedRanges, setBookedRanges] = useState<BookedRange[]>(() => {
    const savedBookings = localStorage.getItem("bookingCalendarData");
    if (savedBookings) {
      try {
        return JSON.parse(savedBookings);
      } catch (error) {
        console.error("Error parsing saved bookings:", error);
      }
    }
    return [];
  });

  const [guestName, setGuestName] = useState<string>(() => {
    const savedGuestName = localStorage.getItem("guestName");
    return savedGuestName || "";
  });

  const [showBookingForm, setShowBookingForm] = useState<boolean>(() => {
    const savedShowBookingForm = localStorage.getItem("showBookingForm");
    return savedShowBookingForm === "true";
  });

  const [nameError, setNameError] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );

  const showNotification = (
    message: string,
    type: "error" | "warning" | "success"
  ): void => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  useEffect(() => {
    localStorage.setItem("bookingCalendarData", JSON.stringify(bookedRanges));
  }, [bookedRanges]);

  useEffect(() => {
    localStorage.setItem(
      "selectedDates",
      JSON.stringify(selectedDates.map((date) => date.toISOString()))
    );
  }, [selectedDates]);

  useEffect(() => {
    localStorage.setItem("currentMonth", currentMonth.toISOString());
  }, [currentMonth]);

  useEffect(() => {
    localStorage.setItem("guestName", guestName);
  }, [guestName]);

  useEffect(() => {
    localStorage.setItem("showBookingForm", showBookingForm.toString());
  }, [showBookingForm]);

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  const isDateBooked = (date: Date): boolean => {
    const dateString = formatDate(date);
    return bookedRanges.some((range) => {
      return dateString >= range.start && dateString <= range.end;
    });
  };

  const isDateSelected = (date: Date): boolean => {
    return selectedDates.some(
      (selectedDate) => formatDate(selectedDate) === formatDate(date)
    );
  };

  const toggleDateSelection = (date: Date): void => {
    const isSelected = isDateSelected(date);

    if (isSelected) {
      setSelectedDates(
        selectedDates.filter(
          (selectedDate) => formatDate(selectedDate) !== formatDate(date)
        )
      );
    } else {
      if (selectedDates.length >= 5) {
        showNotification(
          "Maximum 5 days can be selected for booking. Please deselect some dates first.",
          "warning"
        );
        return;
      }
      setSelectedDates(
        [...selectedDates, date].sort((a, b) => a.getTime() - b.getTime())
      );
    }
  };

  const getBookedInfo = (date: Date): BookedRange | null => {
    const dateString = formatDate(date);
    return (
      bookedRanges.find(
        (range) => dateString >= range.start && dateString <= range.end
      ) || null
    );
  };

  const addBooking = (
    startDate: Date,
    endDate: Date,
    guestName: string
  ): void => {
    const newBooking: BookedRange = {
      start: formatDate(startDate),
      end: formatDate(endDate),
      guestName: guestName,
      bookingId: `booking-${Date.now()}`,
    };

    setBookedRanges((prevBookings) => [...prevBookings, newBooking]);
  };

  const getPriceForDate = (date: Date): number => {
    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const day = date.getDate();

    let basePrice = 100;

    if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) {
      basePrice += 50;
    }

    if ((month === 11 && day >= 20) || (month === 0 && day <= 5)) {
      basePrice += 100;
    }

    if (month >= 5 && month <= 7) {
      basePrice += 30;
    }

    if (month === 2) {
      basePrice += 20;
    }

    if (month === 1 && day >= 10 && day <= 16) {
      basePrice += 40;
    }

    const year = date.getFullYear();
    const dayOfYear = Math.floor(
      (date.getTime() - new Date(year, 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    const dateHash = year * 1000 + dayOfYear;
    const pseudoRandom = ((dateHash * 9301 + 49297) % 233280) / 233280;
    const randomVariation = Math.floor(pseudoRandom * 40) - 20;
    basePrice += randomVariation;

    return Math.max(basePrice, 80);
  };

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: Date[] = [];
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const isDateInRange = (date: Date): boolean => {
    if (selectedDates.length > 0) {
      if (
        date >= selectedDates[0] &&
        date <= selectedDates[selectedDates.length - 1]
      ) {
        return true;
      }
    }

    return bookedRanges.some(
      (range) => date >= new Date(range.start) && date <= new Date(range.end)
    );
  };

  const clearSelection = (): void => {
    setSelectedDates([]);
    setShowBookingForm(false);
    setGuestName("");
    setNameError("");
    setShowSuccessModal(false);
    setBookingDetails(null);

    localStorage.removeItem("selectedDates");
    localStorage.removeItem("guestName");
    localStorage.removeItem("showBookingForm");
  };

  const calculateTotalPrice = useMemo(() => {
    let total = 0;
    selectedDates.forEach((date) => {
      const price = getPriceForDate(date);
      total += price;
    });
    return total;
  }, [selectedDates]);

  const getNumberOfNights = (): number => {
    return selectedDates.length;
  };

  const handleDateClick = (date: Date): void => {
    const dateWithoutTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    if (dateWithoutTime < today) {
      return;
    }

    if (isDateBooked(date)) {
      return;
    }

    toggleDateSelection(date);
  };

  const nextMonth = (): void => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const prevMonth = (): void => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleBookingInitiate = (): void => {
    if (selectedDates.length > 0) {
      setShowBookingForm(true);
    }
  };

  const handleGuestNameChange = (name: string): void => {
    if (name.length <= 20) {
      setGuestName(name);
      setNameError("");
    }
  };

  const handleBookingConfirm = (): void => {
    if (selectedDates.length === 0) {
      showNotification("Please select dates first.", "warning");
      return;
    }

    if (selectedDates.length > 5) {
      showNotification(
        "Maximum 5 days can be selected for booking. Please adjust your selection.",
        "warning"
      );
      return;
    }

    if (!guestName.trim()) {
      setNameError("Guest name is required");
      return;
    }

    if (guestName.length > 20) {
      setNameError("Guest name must be 20 characters or less");
      return;
    }

    setNameError("");

    let hasConflict = false;
    for (const date of selectedDates) {
      if (isDateBooked(date)) {
        hasConflict = true;
        break;
      }
    }

    if (hasConflict) {
      showNotification(
        "Sorry, some of the selected dates are no longer available. Please choose different dates.",
        "error"
      );
      clearSelection();
      return;
    }

    selectedDates.forEach((date) => {
      addBooking(date, date, guestName.trim());
    });

    const totalNights = getNumberOfNights();
    const totalPrice = calculateTotalPrice;
    const dateText = formatDateRange(selectedDates);

    setBookingDetails({
      guestName: guestName.trim(),
      dates: dateText,
      nights: totalNights,
      totalPrice: totalPrice,
    });
    setShowSuccessModal(true);

    setSelectedDates([]);
    setShowBookingForm(false);
    setGuestName("");
    setNameError("");
  };

  const formatDateRange = (dates: Date[]): string => {
    if (dates.length === 0) return "";
    if (dates.length === 1) {
      return dates[0].toLocaleDateString();
    }

    const sortedDates = [...dates].sort((a, b) => a.getTime() - b.getTime());
    const firstDate = sortedDates[0];
    const lastDate = sortedDates[sortedDates.length - 1];

    return `${firstDate.toLocaleDateString()} - ${lastDate.toLocaleDateString()}`;
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="figma-booking-calendar">
      <div className="left-content">
        <div className="calendar-icon">
          <CalendarIcon />
        </div>

        <h1>
          Booking Calendar <br /> + Pricing
        </h1>

        <p>
          Click on dates to add to or subtract from the total price and number
          of nights. Maximum 5 days can be selected per booking.
        </p>

        <ProfileSection />
      </div>

      <div className="right-content">
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}

        <div className="calendar-card">
          <div className="calendar-header">
            <h2>Online Booking</h2>
          </div>

          <CalendarNavigation
            currentMonth={currentMonth}
            onPrevMonth={prevMonth}
            onNextMonth={nextMonth}
          />

          <CalendarGrid
            days={days}
            currentMonth={currentMonth}
            today={today}
            onDateClick={handleDateClick}
            isDateSelected={isDateSelected}
            isDateInRange={isDateInRange}
            isDateBooked={isDateBooked}
            getBookedInfo={getBookedInfo}
            getPriceForDate={getPriceForDate}
            formatDate={formatDate}
          />

          <BookingSummary
            numberOfNights={getNumberOfNights()}
            totalPrice={calculateTotalPrice}
          />

          {selectedDates.length > 0 && !showBookingForm && (
            <div className="booking-actions">
              <button onClick={handleBookingInitiate} className="book-now-btn">
                Book Selected Dates - {getNumberOfNights()}{" "}
                {getNumberOfNights() === 1 ? "night" : "nights"} - $
                {calculateTotalPrice.toLocaleString()}
              </button>
            </div>
          )}

          {showBookingForm && (
            <BookingForm
              guestName={guestName}
              nameError={nameError}
              onGuestNameChange={handleGuestNameChange}
              onCancel={clearSelection}
              onConfirm={handleBookingConfirm}
            />
          )}
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        bookingDetails={bookingDetails}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
};

export default BookingCalendar;
