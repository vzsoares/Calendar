import CalendarNavbar from "./CalendarNavbar";
import CalendarDays from "./CalendarDays";

export default function Calendar() {
  const calendarContainerStyle = {
    minWidth: "200px",
    minHeight: "400px",
    backgroundColor: "#6D7074",
    display: "grid",
    gridTemplateRows: "1fr 3fr",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  };
  return (
    <div className='calendar-container' style={calendarContainerStyle}>
      <CalendarNavbar />
      <CalendarDays />
    </div>
  );
}
