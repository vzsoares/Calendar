import React from "react";
import { useModalContext } from "../features/ModalContext";
import { colors } from "../features/calendarStyles";

export default function ModalEditAddSection() {
  const { title, setTitle, color, setColor, description, setDescription } =
    useModalContext();

  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateRows: "1fr 0.5fr 4fr",
      }}
    >
      <TitleInput value={title} setValue={setTitle} />
      <ColorInput value={color} setValue={setColor} />
      <DescriptionInput value={description} setValue={setDescription} />
    </div>
  );
}

function DescriptionInput({ value, setValue }) {
  return (
    <div className='content' style={{ height: "100%" }}>
      {"Description:"}
      {
        <div style={{ height: "80%" }}>
          <input
            type='text'
            value={value}
            maxLength='1000'
            onChange={(e) => setValue(e.target.value)}
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

function TitleInput({ value, setValue }) {
  return (
    <div>
      {"Title:"}
      {
        <div style={{ display: "grid" }}>
          <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
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

function ColorInput({ value, setValue }) {
  return (
    <>
      <div style={{ justifySelf: "start" }}>
        {"Color: "}
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            backgroundColor: "#595B5F",
            border: "none",
            padding: "none",
            cursor: "pointer",
            color: value,
          }}
        >
          <option value={colors.taskRed} style={{ color: colors.taskRed }}>
            ⚫
          </option>
          <option value={colors.taskBlue} style={{ color: colors.taskBlue }}>
            ⚫
          </option>
          <option value={colors.taskGreen} style={{ color: colors.taskGreen }}>
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
