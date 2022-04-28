import Calendar from "./Calendar";
import { CalendarContextProvider } from "../features/calendarContext";
import { FaGithubSquare } from "react-icons/fa";
import { colors } from "../features/calendarStyles";

export default function CalendarSection() {
  return (
    <main
      style={{
        backgroundColor: colors.backgroundBlack,
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <div style={{ maxWidth: "90vw", margin: "0 auto" }}>
        <div style={{}}>
          <CalendarContextProvider>
            <Calendar />
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
