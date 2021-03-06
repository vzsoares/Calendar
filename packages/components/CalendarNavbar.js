import { FaAngleRight, FaAngleLeft, FaPlus } from "react-icons/fa";
import CalendarNavbarWeekDays from "./CalendarNavbarWeekDays";
import { useCalendarContext } from "../features/calendarContext";
import { useModalContext } from "../features/ModalContext";

import {
  calendarNavbarStyle,
  controlButtonStyle,
} from "../features/calendarStyles";

export default function CalendarNavbar() {
  const { jumpPrevMonth, jumpNextMonth, displayDate, todayId } =
    useCalendarContext();
  const { toggleModal, setModalData } = useModalContext();

  function handlePlusClick() {
    setModalData({
      data: todayId,
      function: "new",
    });
    toggleModal();
  }
  return (
    <div style={calendarNavbarStyle}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr 2fr",
          alignItems: "center",
        }}
      >
        <div
          style={{
            justifySelf: "center",
            fontSize: "1.15rem",
            fontWeight: "600",
            paddingLeft: "5px",
          }}
        >
          {displayDate.toDateString().slice(4, 7)} {displayDate.getFullYear()}
        </div>
        <div style={{ justifySelf: "end" }}>
          <button style={controlButtonStyle} onClick={() => handlePlusClick()}>
            <FaPlus />
          </button>
        </div>
        <div
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
