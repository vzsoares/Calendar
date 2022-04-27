import React, { useState, useEffect } from "react";
import { FaTimes, FaSquareFull } from "react-icons/fa";
import { useCalendarContext } from "../features/calendarContext";
export default function Modal() {
  const {
    toggleModal,
    addEvent,
    getDayId,
    events,
    setModalData,
    modalData,
    editEvent,
  } = useCalendarContext();
  const [date, setDate] = useState(new Date(modalData.data));
  const [inputDate, setInputDate] = useState("");
  const [color, setColor] = useState("red");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    setInputDate(
      `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
    );
  }, [date]);
  // logic
  function getDateFromInput() {
    let ano = inputDate.slice(0, 4);
    let mes = inputDate.slice(5, 7);
    let dia = inputDate.slice(8, 10);
    return new Date(ano, Number(mes) - 1, Number(dia));
  }
  function handleEditEvent(i) {
    setModalData({
      data: modalData.data,
      function: "edit",
      index: i,
    });
    setDate(new Date(modalData.data));
    setTitle(events[modalData.data][i].event);
    setDescription(events[modalData.data][i].description);
    setColor(events[modalData.data][i].color);
  }
  function handleAddBtn() {
    setDate(new Date(modalData.data));
    setModalData({
      data: modalData.data,
      function: "new",
    });
  }

  return (
    <main
      style={{
        minWidth: "200px",
        minHeight: "360px",
        backgroundColor: "#6D7074",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        padding: "0.5rem",
        display: "grid",
        justifyContent: "center",
        alignItems: "start",
        justifyItems: "center",
        gridTemplateRows: "1fr 5fr",
      }}
    >
      <a
        style={{
          position: "absolute",
          left: "100%",
          fontSize: "1.5rem",
          transform: "translate(-110%, 10%)",
        }}
        onClick={() => toggleModal()}
      >
        <FaTimes />
      </a>
      <div className='day-data'>
        {modalData.function === "new" ? (
          <div className='date-input'>
            <input
              style={{
                backgroundColor: "#595B5F",
                border: "none",
                padding: "none",
                cursor: "pointer",
              }}
              type='date'
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            />
          </div>
        ) : (
          new Date(modalData.data).toDateString()
        )}
      </div>
      {modalData.function === "view" ? (
        <div
          className='events-container'
          style={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateRows: "5fr 50px ",
            maxHeight: "300px",
            overflow: "auto",
          }}
        >
          <div className='events' style={{ width: "100%" }}>
            {events[modalData.data] ? (
              events[modalData.data].map((e, i) => {
                return (
                  <a
                    className='event'
                    key={i}
                    style={{
                      display: "grid",
                      cursor: "pointer",
                      marginBottom: "2px",
                    }}
                    onClick={() => handleEditEvent(i)}
                  >
                    <div className='top'>
                      <span style={{ color: e.color, marginRight: "5px" }}>
                        ⚫
                      </span>
                      <span>{e.event}</span>
                    </div>
                    <div className='bottom' style={{ width: "300px" }}>
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
                    </div>
                  </a>
                );
              })
            ) : (
              <div className='no-events'>{"No events for this day"}</div>
            )}
          </div>
          <button
            style={{
              backgroundColor: "#595B5F",
              border: "none",
              padding: "none",
              cursor: "pointer",
              height: "50%",
              alignSelf: "end",
            }}
            onClick={() => handleAddBtn()}
          >
            Add Event
          </button>
        </div>
      ) : (
        <div
          style={{
            height: "100%",
            display: "grid",
            gridTemplateRows: "1fr 0.5fr 4fr 0.5fr",
          }}
        >
          <div className='title'>
            {"Title:"}
            {
              <div className='title-input' style={{ display: "grid" }}>
                <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    width: "50%",
                    justifySelf: "start",
                    backgroundColor: "#595B5F",
                    border: "none",
                    padding: "none",
                  }}
                />
              </div>
            }
          </div>
          <div className='color-input' style={{ justifySelf: "start" }}>
            {"Color: "}
            <select
              value={color}
              style={{
                backgroundColor: "#595B5F",
                border: "none",
                padding: "none",
                cursor: "pointer",
                color: color,
              }}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value='red' style={{ color: "red" }}>
                ⚫
              </option>
              <option value='blue' style={{ color: "blue" }}>
                ⚫
              </option>
              <option value='green' style={{ color: "green" }}>
                ⚫
              </option>
              <option value='yellow' style={{ color: "yellow" }}>
                ⚫
              </option>
            </select>
          </div>
          <div className='content' style={{ height: "100%" }}>
            {"Description:"}
            {
              <div className='description-input' style={{ height: "80%" }}>
                <input
                  type='text'
                  value={description}
                  name='description-input'
                  maxLength='1000'
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    height: "70%",
                    backgroundColor: "#595B5F",
                    border: "none",
                    padding: "none",
                  }}
                />
              </div>
            }
          </div>
          <div className='btn-container' style={{ justifySelf: "center" }}>
            <button
              onClick={() =>
                modalData.function !== "edit"
                  ? addEvent(
                      title,
                      description,
                      color,
                      getDateFromInput().valueOf()
                    ) & toggleModal()
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
              }}
            >
              {modalData.function === "edit" ? "Edit Task" : "Add task"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
