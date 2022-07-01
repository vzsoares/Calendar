import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useCalendarContext } from "../features/calendarContext";
import { useModalContext } from "../features/ModalContext";
import {
  modalContainerStyle,
  modalCloseBtnStyle,
  colors,
} from "../features/calendarStyles";

export default function Modal() {
  const { addEvent, events, editEvent, removeEvent } = useCalendarContext();
  const { toggleModal, modalData, setModalData } = useModalContext();

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

  function EditAddSection() {
    return (
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "1fr 0.5fr 4fr",
        }}
      >
        <TitleInput />
        <ColorInput />
        <DescriptionInput />
      </div>
    );
  }

  function TitleInput() {
    return (
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
    );
  }

  function ColorInput() {
    return (
      <>
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
            <option value={colors.taskBlue} style={{ color: colors.taskBlue }}>
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
      </>
    );
  }

  function DescriptionInput() {
    return (
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
    );
  }

  function MainBtn() {
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
              ? handleAddBtn()
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
  function MainTitle() {
    if (modalData.function === "new") {
      return (
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
      );
    } else return <div>{new Date(modalData.data).toDateString()} </div>;
  }
  function ViewSection() {
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
                  <div
                    className='top'
                    style={{ maxWidth: "184px", display: "flex" }}
                  >
                    <span style={{ color: e.color, marginRight: "5px" }}>
                      ⚫
                    </span>
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
            <div className='no-events' style={{ textAlign: "center" }}>
              {"No events for this day"}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <main style={modalContainerStyle}>
      <a style={modalCloseBtnStyle} onClick={() => toggleModal()}>
        <FaTimes />
      </a>
      <MainTitle />
      {/* renders view page or add/edit page */}
      <div style={{ width: "100%" }}>
        {modalData.function === "view" ? <ViewSection /> : <EditAddSection />}
      </div>
      <MainBtn />
    </main>
  );
}
