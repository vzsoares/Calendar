import { useCalendarContext } from "../features/calendarContext";
import { useModalContext } from "../features/ModalContext";
import {
  calendarDayStyle,
  calendarDaysContainerStyle,
} from "../features/calendarStyles";

export default function CalendarDays() {
  const { daysIds, displayDate, events, todayEvent } = useCalendarContext();
  const { setModalState, setModalData } = useModalContext();

  function handleClick(id) {
    setModalData({
      data: id,
      function: "view",
    });
    setModalState(true);
  }

  // include today to display
  const displayEvents = { ...events, ...todayEvent };

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
            {displayEvents[id] && (
              <div
                style={{
                  alignSelf: "start",
                  width: "100%",
                  height: "100%",
                }}
              >
                {displayEvents[id].map((e, i) => {
                  if (i > 2) {
                    return;
                  }
                  return (
                    <div
                      key={i}
                      style={{
                        width: "40%",
                        maxWidth: "40px",
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
