import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useCalendarContext } from "./calendarContext";

const modalContext = createContext();

function ModalContextProvider({ children }) {
  const {} = useCalendarContext();
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState({
    data: "todayId",
    function: "view",
  });

  function toggleModal() {
    setModalState(!modalState);
  }

  // exported Data
  const contextData = useMemo(() => {
    return { modalState, modalData, toggleModal, setModalState, setModalData };
  }, [modalState, modalData]);
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
