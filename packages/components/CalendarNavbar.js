import { FaAngleRight, FaAngleLeft, FaPlus } from "react-icons/fa";
import CalendarNavbarWeekDays from "./CalendarNavbarWeekDays";
import { useCalendarContext } from "../features/calendarContext";

export default function CalendarNavbar() {
  const { subtractDisplayDate, monthString, year, addDisplayDate } =
    useCalendarContext();
  const calendarNavbarStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    backgroundColor: "#595B5F",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  };

  const buttonStyle = {
    border: "none",
    padding: "0",
    background: "none",
    color: "#252627",
    cursor: "pointer",
    marginRight: "0.25rem",
    fontSize: "1.4rem",
  };

  return (
    <div className='calendar-navbar-container' style={calendarNavbarStyle}>
      <div
        className='calendar-navbar-header'
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr 2fr",
          alignItems: "center",
        }}
      >
        <div
          className='calendar-month'
          style={{
            justifySelf: "center",
            fontSize: "1.15rem",
            fontWeight: "600",
          }}
        >
          {monthString} {year}
        </div>
        <div className='calendar-add-control' style={{ justifySelf: "end" }}>
          <button style={buttonStyle}>
            <FaPlus />
          </button>
        </div>
        <div
          className='calendar-month-controls'
          style={{
            justifySelf: "end",
            paddingRight: "1rem",
          }}
        >
          <button style={buttonStyle} onClick={() => subtractDisplayDate()}>
            <FaAngleLeft />
          </button>
          <button style={buttonStyle} onClick={() => addDisplayDate()}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <CalendarNavbarWeekDays />
    </div>
  );
}
