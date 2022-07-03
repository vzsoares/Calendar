import { useCalendarContext } from "../features/calendarContext";
import { useModalContext } from "../features/ModalContext";

export default function ModalViewSection() {
  const { modalData, handleEditEvent, toggleModal } = useModalContext();
  const { events, removeEvent } = useCalendarContext();

  return (
    <div
      className='events-container'
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className='events'
        style={{ width: "100%", height: "250px", overflow: "auto" }}
      >
        {/* render day events or no events msg */}
        {events[modalData.date] ? (
          events[modalData.date].map((e, i) => {
            return (
              <a
                onClick={() => handleEditEvent(i)}
                className='event'
                key={i}
                style={{
                  display: "grid",
                  cursor: "pointer",
                  marginBottom: "2px",
                }}
              >
                <div
                  className='top'
                  style={{ maxWidth: "184px", display: "flex" }}
                >
                  <span style={{ color: e.color, marginRight: "5px" }}>⚫</span>
                  <h1
                    style={{
                      fontSize: "1rem",
                      margin: "0",
                      padding: "0",
                      fontWeight: "600",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {e.event ? e.event : "untitled"}
                  </h1>
                </div>
                <div className='bottom' style={{ maxWidth: "184px" }}>
                  <h1
                    style={{
                      fontSize: "0.8rem",
                      margin: "0",
                      padding: "0",
                      color: "#3b3c3d",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {e.description ? e.description : "no description added"}
                  </h1>
                  <button
                    onClick={() =>
                      removeEvent(modalData.date, i) & toggleModal()
                    }
                    style={{
                      backgroundColor: "#595B5F",
                      border: "none",
                      padding: "none",
                      cursor: "pointer",
                      minWidth: "60px",
                      height: "20px",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </a>
            );
          })
        ) : (
          <div className='no-events' style={{ textAlign: "center" }}>
            {"No events for this day"}
          </div>
        )}
      </div>
    </div>
  );
}
