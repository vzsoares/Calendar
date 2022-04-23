import { FaAngleRight, FaAngleLeft, FaPlus } from "react-icons/fa";

export default function CalendarNavbar() {
  const calendarNavbarStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    backgroundColor: "#595B5F",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  };
  const weekDayStyle = {
    paddingBottom: "3px",
    width: "100%",
    height: "100%",
    display: "grid",
    alignItems: "end",
    textAlign: "center",
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
  const calendarNavbarWeekDaysStyle = {
    justifyItems: "center",
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    alignItems: "end",
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
          Abril
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
          <button style={buttonStyle}>
            <FaAngleLeft />
          </button>
          <button style={buttonStyle}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div
        className='calendar-navbar-weekDays'
        style={calendarNavbarWeekDaysStyle}
      >
        <div style={weekDayStyle}>D</div>
        <div style={weekDayStyle}>S</div>
        <div style={weekDayStyle}>T</div>
        <div style={weekDayStyle}>Q</div>
        <div style={weekDayStyle}>Q</div>
        <div style={weekDayStyle}>S</div>
        <div style={weekDayStyle}>S</div>
      </div>
    </div>
  );
}
