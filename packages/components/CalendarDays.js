export default function CalendarDays() {
  const days = 30;
  const daysArray = Array.from({ length: days }, (v, i) => i + 1);

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
  return (
    <div className='calendar-days-container' style={calendarDaysContainerStyle}>
      {daysArray.map((i) => {
        return (
          <div key={i} className='calendar-day' style={calendarDayStyle}>
            {i}
          </div>
        );
      })}
    </div>
  );
}
