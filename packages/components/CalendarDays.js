import { useState, useEffect } from "react";
import { useCalendarContext } from "../features/calendarContext";

export default function CalendarDays() {
  const { displayDate, daysArray, today, daysIds, todayId } =
    useCalendarContext();

  // Styles
  const calendarDayStyle = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    display: "grid",
    alignItems: "center",
  };
  const calendarDaysContainerStyle = {
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: "repeat(7,1fr)",
    alignItems: "center",
  };
  // end of Styles
  return (
    <div className='calendar-days-container' style={calendarDaysContainerStyle}>
      {daysIds.map((id, i) => {
        return (
          <div
            key={id}
            className='calendar-today'
            style={{
              ...calendarDayStyle,
              backgroundColor: todayId === id && "blue",
            }}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
}
