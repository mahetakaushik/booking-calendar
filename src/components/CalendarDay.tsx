import React from "react";
import { colors } from "../theme/colors";
import { BookedRange } from "../types/booking";

interface CalendarDayProps {
  date: Date;
  today: Date;
  isSelected: boolean;
  isInRange: boolean;
  isBooked: boolean;
  bookedInfo: BookedRange | null;
  price: number;
  onDateClick: (date: Date) => void;
  formatDate: (date: Date) => string;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  today,
  isSelected,
  isInRange,
  isBooked,
  bookedInfo,
  price,
  onDateClick,
  formatDate,
}) => {
  const dateWithoutTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const isPast = dateWithoutTime < today;
  const isToday = formatDate(date) === formatDate(today);
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  const dayNumber = date.getDate();

  return (
    <div
      className={`calendar-day current-month ${isSelected ? "selected" : ""} ${
        isInRange ? "in-range" : ""
      } ${isPast ? "past" : ""} ${isToday ? "today" : ""} ${
        isBooked ? "booked" : ""
      } ${isWeekend ? "weekend" : ""}`}
      onClick={() => (!isPast || isToday) && !isBooked && onDateClick(date)}
      title={isBooked && bookedInfo ? `Booked by ${bookedInfo.guestName}` : ""}
    >
      <div className="day-number">{dayNumber}</div>
      {isPast && <div className="past-indicator">--</div>}
      {price && (!isPast || isToday) && !isBooked && (
        <div className="day-price">${price}</div>
      )}
      {isBooked && (
        <div className="booked-indicator">
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke={colors.text.disabled}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
