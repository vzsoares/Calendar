import { useCalendarContext } from "../features/calendarContext";
import { useModalContext } from "../features/ModalContext";

export default function ModalButton() {
  const {
    modalData,
    toggleModal,
    startAdding,
    title,
    description,
    color,
    getDateFromInput,
  } = useModalContext();
  const { editEvent, addEvent } = useCalendarContext();
  return (
    <div
      className='btn-container'
      style={{
        justifySelf: "center",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <button
        onClick={() =>
          modalData.function === "new"
            ? addEvent(
                title,
                description,
                color,
                getDateFromInput().valueOf()
              ) & toggleModal()
            : modalData.function === "view"
            ? startAdding()
            : editEvent(
                modalData.data,
                modalData.index,
                title,
                description,
                color
              ) & toggleModal()
        }
        style={{
          backgroundColor: "#595B5F",
          border: "none",
          padding: "none",
          cursor: "pointer",
          minWidth: "100px",
          height: "25px",
        }}
      >
        {modalData.function === "edit" ? "Edit Event" : "Add Event"}
      </button>
    </div>
  );
}
