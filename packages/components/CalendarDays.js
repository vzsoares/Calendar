import { useState, useEffect } from "react";
import { useCalendarContext } from "../features/calendarContext";

export default function CalendarDays() {
  const { daysIds, todayId, displayDate, events } = useCalendarContext();

  // Styles
  const calendarDayStyle = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    display: "grid",
    gridTemplateRows: "5fr 2fr",
    alignItems: "end",
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
      {daysIds.map((id) => {
        if (events[id]) {
          events[id].map((e) => console.log(e.event));
        }
        return (
          <div
            key={id}
            className='calendar-today'
            style={{
              ...calendarDayStyle,
              color:
                // changes color if it's from prev month
                new Date(id).getMonth() !== displayDate.getMonth() && "#3b3c3d",
            }}
          >
            {new Date(id).getDate()}
            {events[id] && (
              <div
                style={{
                  alignSelf: "start",
                  width: "100%",
                  height: "100%",
                }}
              >
                {events[id].map((e, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        width: "40px",
                        height: "3px",
                        background: e.color,
                        margin: "0 auto",
                        marginTop: "1px",
                      }}
                    ></div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
