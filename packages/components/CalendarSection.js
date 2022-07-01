import Calendar from "./Calendar";
import { CalendarContextProvider } from "../features/calendarContext";
import { ModalContextProvider } from "../features/ModalContext";
import { FaGithubSquare } from "react-icons/fa";
import { colors } from "../features/calendarStyles";

export default function CalendarSection() {
  return (
    <main
      style={{
        backgroundColor: colors.backgroundBlack,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "90vw", width: "100%" }}>
        <div style={{}}>
          {/* @ts-ignore */}
          <CalendarContextProvider>
            <ModalContextProvider>
              <Calendar />
            </ModalContextProvider>
          </CalendarContextProvider>
        </div>
      </div>
      {/* gitHub ref */}
      <div
        className='github'
        style={{
          textAlign: "center",
          justifyItems: "flex-end",
        }}
      >
        <a
          href='https://github.com/vzsoares/Calendar'
          target='_blank'
          rel='noreferrer'
          className='github'
        >
          <FaGithubSquare
            // @ts-ignore
            style={{
              color: colors.darkGrey,
              fontSize: "3rem",
              marginTop: "0.5rem",
            }}
          />
        </a>
      </div>
    </main>
  );
}
