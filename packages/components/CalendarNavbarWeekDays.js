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
    <div style={calendarNavbarWeekDaysStyle}>
      <div style={weekDayStyle}>S</div>
      <div style={weekDayStyle}>M</div>
      <div style={weekDayStyle}>T</div>
      <div style={weekDayStyle}>W</div>
      <div style={weekDayStyle}>T</div>
      <div style={weekDayStyle}>F</div>
      <div style={weekDayStyle}>S</div>
    </div>
  );
}
