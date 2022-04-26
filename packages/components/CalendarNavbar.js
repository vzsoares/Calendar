import { FaAngleRight, FaAngleLeft, FaPlus } from "react-icons/fa";
import CalendarNavbarWeekDays from "./CalendarNavbarWeekDays";
import { useCalendarContext } from "../features/calendarContext";
import Modal from "./Modal";

export default function CalendarNavbar() {
  const {
    jumpPrevMonth,
    jumpNextMonth,
    displayDate,
    modalState,
    modalData,
    toggleModal,
  } = useCalendarContext();
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
          <button style={buttonStyle} onClick={() => toggleModal()}>
            <FaPlus />
          </button>
          {modalState && <Modal data={modalData} />}
        </div>
        <div
          className='calendar-displayedMonth-controls'
          style={{
            justifySelf: "end",
            paddingRight: "1rem",
          }}
        >
          <button style={buttonStyle} onClick={() => jumpPrevMonth()}>
            <FaAngleLeft />
          </button>
          <button style={buttonStyle} onClick={() => jumpNextMonth()}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <CalendarNavbarWeekDays />
    </div>
  );
}
