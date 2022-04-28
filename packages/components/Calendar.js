import CalendarNavbar from "./CalendarNavbar";
import CalendarDays from "./CalendarDays";
import { calendarContainerStyle } from "../features/calendarStyles";

export default function Calendar() {
  return (
    <div className='calendar-container' style={calendarContainerStyle}>
      <CalendarNavbar />
      <CalendarDays />
    </div>
  );
}
