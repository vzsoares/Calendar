import React, { useState } from "react";
import { FaTimes, FaSquareFull } from "react-icons/fa";
import { useCalendarContext } from "../features/calendarContext";

export default function Modal({ data }) {
  const { toggleModal, addEvent, getDayId } = useCalendarContext();
  const [date, setDate] = useState(new Date(data.data));
  const [inputDate, setInputDate] = useState(
    `${date.getFullYear()}-${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
  );
  const [color, setColor] = useState("red");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  // logic
  function getDateFromInput() {
    let ano = inputDate.slice(0, 4);
    let mes = inputDate.slice(5, 7);
    let dia = inputDate.slice(8, 10);
    return new Date(ano, Number(mes) - 1, Number(dia));
  }
  // TODO fix modal inputs

  // components
  function DateInput() {
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
  }
  function TitleInput() {
    return (
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
    );
  }
  function DescriptionInput() {
    return (
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
    );
  }
  function ColorSelect() {
    return (
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
    );
  }
  // end of components

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
        gridTemplateRows: "1fr 1fr 0.5fr 3fr 0.5fr",
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
        {data.function === "new" ? (
          <DateInput />
        ) : (
          new Date(data.data).toDateString()
        )}
      </div>
      <div className='title'>
        {"Title:"}
        {<TitleInput />}
      </div>
      <div className='color-input' style={{ justifySelf: "start" }}>
        {"Color: "}
        <ColorSelect />
      </div>
      <div className='content' style={{ height: "100%" }}>
        {"Description:"}
        {<DescriptionInput />}
      </div>
      <div className='btn-container'>
        <button
          onClick={() =>
            addEvent(title, description, color, getDateFromInput().valueOf()) &
            toggleModal()
          }
          style={{
            backgroundColor: "#595B5F",
            border: "none",
            padding: "none",
            cursor: "pointer",
          }}
        >
          Add task
        </button>
      </div>
    </main>
  );
}
