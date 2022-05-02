import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useCalendarContext } from "../features/calendarContext";
import {
  modalContainerStyle,
  modalCloseBtnStyle,
  colors,
} from "../features/calendarStyles";

export default function Modal() {
  const {
    toggleModal,
    addEvent,
    events,
    setModalData,
    modalData,
    editEvent,
    removeEvent,
  } = useCalendarContext();

  const [date, setDate] = useState(new Date(modalData.data));
  const [inputDate, setInputDate] = useState("");
  const [color, setColor] = useState(colors.taskRed);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  // logic

  function getDateFromInput() {
    let year = inputDate.slice(0, 4);
    let month = inputDate.slice(5, 7);
    let day = inputDate.slice(8, 10);
    return new Date(year, Number(month) - 1, Number(day));
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
    setTitle("");
    setDescription("");
    setDate(new Date(modalData.data));
    setModalData({
      data: modalData.data,
      function: "new",
    });
  }

  useEffect(() => {
    setInputDate(
      `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
    );
  }, [date]);

  return (
    <main style={modalContainerStyle}>
      <a style={modalCloseBtnStyle} onClick={() => toggleModal()}>
        <FaTimes />
      </a>
      <div className='day-data'>
        {/* render date input or plain date*/}
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
      {/* renders view page or add/edit page */}
      {modalData.function === "view" ? (
        <div
          className='events-container'
          style={{
            height: "100%",
            width: "100%",
            gridTemplateRows: "5fr 50px ",
            display: "grid",
          }}
        >
          <div
            className='events'
            style={{ width: "100%", maxHeight: "300px", overflow: "auto" }}
          >
            {/* render day events or no events msg */}
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
                        style={{
                          backgroundColor: "#595B5F",
                          border: "none",
                          padding: "none",
                          cursor: "pointer",
                          minWidth: "60px",
                          height: "20px",
                        }}
                        onClick={() =>
                          removeEvent(modalData.data, i) & toggleModal()
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </a>
                );
              })
            ) : (
              <div className='no-events'>{"No events for this day"}</div>
            )}
          </div>
          <div
            className='button-container'
            style={{
              alignSelf: "end",
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <button
              style={{
                backgroundColor: "#595B5F",
                border: "none",
                padding: "none",
                cursor: "pointer",
                height: "50%",
                maxWidth: "200px",
                width: "80%",
              }}
              onClick={() => handleAddBtn()}
            >
              Add Event
            </button>
          </div>
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
              <option value={colors.taskRed} style={{ color: colors.taskRed }}>
                ⚫
              </option>
              <option
                value={colors.taskBlue}
                style={{ color: colors.taskBlue }}
              >
                ⚫
              </option>
              <option
                value={colors.taskGreen}
                style={{ color: colors.taskGreen }}
              >
                ⚫
              </option>
              <option
                value={colors.taskYellow}
                style={{ color: colors.taskYellow }}
              >
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
            <button
              onClick={() =>
                // add or edit event
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
                minWidth: "100px",
                height: "25px",
              }}
            >
              {modalData.function === "edit" ? "Edit Event" : "Add Event"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
