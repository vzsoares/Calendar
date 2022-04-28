import { useState, useEffect } from "react";
import { useCalendarContext } from "../features/calendarContext";
import {
  calendarDayStyle,
  calendarDaysContainerStyle,
} from "../features/calendarStyles";

export default function CalendarDays() {
  const { daysIds, displayDate, events, setModalData, setModalState } =
    useCalendarContext();

  function handleClick(id) {
    setModalData({
      data: id,
      function: "view",
    });
    setModalState(true);
  }
  return (
    <div className='calendar-days-container' style={calendarDaysContainerStyle}>
      {daysIds.map((id) => {
        return (
          <div
            key={id}
            onClick={() => handleClick(id)}
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
                  if (i > 2) {
                    return;
                  }
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
