import { createContext, useContext, useMemo, useState, useEffect } from "react";

const modalContext = createContext();

function ModalContextProvider({ children }) {
  const [modalState, setModalState] = useState(false);

  function toggleModal() {
    setModalState(!modalState);
  }

  // exported Data
  const contextData = useMemo(() => {
    return { modalState, toggleModal, setModalState };
  }, [modalState]);
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
