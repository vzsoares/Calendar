import CalendarNavbar from "./CalendarNavbar";
import CalendarDays from "./CalendarDays";
import Modal from "./Modal";
import { useModalContext } from "../features/ModalContext";
import { calendarContainerStyle } from "../features/calendarStyles";

export default function Calendar() {
  const { isModalOpened } = useModalContext();
  return (
    <div className='calendar-container' style={calendarContainerStyle}>
      <CalendarNavbar />
      <CalendarDays />
      {/* renders modal if true */}
      {isModalOpened && <Modal />}
    </div>
  );
}
