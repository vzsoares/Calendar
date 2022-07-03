import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useCalendarContext } from "./calendarContext";
import { colors } from "../features/calendarStyles";

const modalContext = createContext();

function ModalContextProvider({ children }) {
  const { todayId } = useCalendarContext();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalData, setModalData] = useState({
    date: todayId,
    function: "view",
  });

  const [date, setDate] = useState(new Date(modalData.date));
  const [inputDate, setInputDate] = useState("");
  const [color, setColor] = useState(colors.taskRed);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  function toggleModal() {
    setIsModalOpened(!isModalOpened);
  }

  function getDateFromInput() {
    let year = inputDate.slice(0, 4);
    let month = inputDate.slice(5, 7);
    let day = inputDate.slice(8, 10);
    return new Date(year, Number(month) - 1, Number(day));
  }

  function handleEditEvent(i) {
    setModalData({
      date: modalData.date,
      function: "edit",
      index: i,
    });
    setDate(new Date(modalData.date));
    setTitle(events[modalData.date][i].event);
    setDescription(events[modalData.date][i].description);
    setColor(events[modalData.date][i].color);
  }

  function startAdding() {
    setTitle("");
    setDescription("");
    setDate(new Date(modalData.date));
    setModalData({
      date: modalData.date,
      function: "new",
    });
  }

  // effects
  useEffect(() => {
    setInputDate(
      `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
    );
  }, [date]);

  // exported Data
  const contextData = useMemo(() => {
    return {
      isModalOpened,
      setIsModalOpened,
      modalData,
      setModalData,
      date,
      setDate,
      inputDate,
      setInputDate,
      color,
      setColor,
      title,
      setTitle,
      description,
      setDescription,
      toggleModal,
      startAdding,
      handleEditEvent,
      getDateFromInput,
    };
  }, [isModalOpened, modalData, date, inputDate, color, title, description]);
  return (
    <modalContext.Provider value={contextData}>
      {children}
    </modalContext.Provider>
  );
}

function useModalContext() {
  return useContext(modalContext);
}

export { ModalContextProvider, useModalContext };
