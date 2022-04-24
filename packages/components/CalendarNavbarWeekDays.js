export default function CalendarNavbarWeekDays() {
  const weekDayStyle = {
    paddingBottom: "3px",
    width: "100%",
    height: "100%",
    display: "grid",
    alignItems: "end",
    textAlign: "center",
  };
  const calendarNavbarWeekDaysStyle = {
    justifyItems: "center",
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    alignItems: "end",
  };
  return (
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
  );
}
