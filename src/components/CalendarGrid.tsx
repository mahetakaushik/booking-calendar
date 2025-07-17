import React from "react";
import CalendarDay from "./CalendarDay";
import { BookedRange } from "../types/booking";

interface CalendarGridProps {
  days: Date[];
  currentMonth: Date;
  today: Date;
  onDateClick: (date: Date) => void;
  isDateSelected: (date: Date) => boolean;
  isDateInRange: (date: Date) => boolean;
  isDateBooked: (date: Date) => boolean;
  getBookedInfo: (date: Date) => BookedRange | null;
  getPriceForDate: (date: Date) => number;
  formatDate: (date: Date) => string;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  days,
  currentMonth,
  today,
  onDateClick,
  isDateSelected,
  isDateInRange,
  isDateBooked,
  getBookedInfo,
  getPriceForDate,
  formatDate,
}) => {
  return (
    <div className="calendar-grid">
      <div className="weekdays">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>

      <div
        className="days-grid"
        style={
          {
            "--first-day-position":
              new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
                1
              ).getDay() + 1,
          } as React.CSSProperties
        }
      >
        {days.map((date, index) => (
          <CalendarDay
            key={index}
            date={date}
            today={today}
            isSelected={isDateSelected(date)}
            isInRange={isDateInRange(date)}
            isBooked={isDateBooked(date)}
            bookedInfo={getBookedInfo(date)}
            price={getPriceForDate(date)}
            onDateClick={onDateClick}
            formatDate={formatDate}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
