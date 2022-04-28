import { FaAngleRight, FaAngleLeft, FaPlus } from "react-icons/fa";
import CalendarNavbarWeekDays from "./CalendarNavbarWeekDays";
import { useCalendarContext } from "../features/calendarContext";
import Modal from "./Modal";
import {
  calendarNavbarStyle,
  controlButtonStyle,
} from "../features/calendarStyles";
export default function CalendarNavbar() {
  const {
    jumpPrevMonth,
    jumpNextMonth,
    displayDate,
    modalState,
    modalData,
    toggleModal,
    setModalData,
    todayId,
  } = useCalendarContext();

  function handlePlusClick() {
    setModalData({
      data: todayId,
      function: "new",
    });
    toggleModal();
  }
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
          className='calendar-displayedMonth'
          style={{
            justifySelf: "center",
            fontSize: "1.15rem",
            fontWeight: "600",
            paddingLeft: "5px",
          }}
        >
          {displayDate.toDateString().slice(4, 7)} {displayDate.getFullYear()}
        </div>
        <div className='calendar-add-control' style={{ justifySelf: "end" }}>
          <button style={controlButtonStyle} onClick={() => handlePlusClick()}>
            <FaPlus />
          </button>
          {modalState && <Modal />}
        </div>
        <div
          className='calendar-displayedMonth-controls'
          style={{
            justifySelf: "end",
            paddingRight: "1rem",
          }}
        >
          <button style={controlButtonStyle} onClick={() => jumpPrevMonth()}>
            <FaAngleLeft />
          </button>
          <button style={controlButtonStyle} onClick={() => jumpNextMonth()}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <CalendarNavbarWeekDays />
    </div>
  );
}
