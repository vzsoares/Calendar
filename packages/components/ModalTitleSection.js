import { useModalContext } from "../features/ModalContext";

export default function ModalTitleSection() {
  const { modalData, inputDate, setInputDate } = useModalContext();

  if (modalData.function === "new") {
    return <DateInput value={inputDate} setValue={setInputDate} />;
  } else return <div>{new Date(modalData.date).toDateString()} </div>;
}

function DateInput({ value, setValue }) {
  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        style={{
          backgroundColor: "#595B5F",
          border: "none",
          padding: "none",
          cursor: "pointer",
        }}
        type='date'
        value={value}
      />
    </div>
  );
}
