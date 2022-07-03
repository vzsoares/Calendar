import ModalButton from "./ModalButton";
import ModalEditAddSection from "./ModalEditAddSection";
import ModalTitleSection from "./ModalTitleSection";
import ModalViewSection from "./ModalViewSection";

import { FaTimes } from "react-icons/fa";
import { useModalContext } from "../features/ModalContext";
import {
  modalContainerStyle,
  modalCloseBtnStyle,
} from "../features/calendarStyles";

export default function Modal() {
  const { toggleModal, modalData } = useModalContext();

  return (
    <main style={modalContainerStyle}>
      <a style={modalCloseBtnStyle} onClick={() => toggleModal()}>
        <FaTimes />
      </a>
      <ModalTitleSection />
      {/* renders view page or add/edit page */}
      <div style={{ width: "100%" }}>
        {modalData.function === "view" ? (
          <ModalViewSection />
        ) : (
          <ModalEditAddSection />
        )}
      </div>
      <ModalButton />
    </main>
  );
}
