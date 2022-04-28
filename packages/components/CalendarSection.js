import Calendar from "./Calendar";
import { CalendarContextProvider } from "../features/calendarContext";
import { colors } from "../features/calendarStyles";

export default function CalendarSection() {
  return (
    <main style={{ backgroundColor: colors.backgroundBlack }}>
      <div style={{ maxWidth: "90vw", margin: "0 auto" }}>
        <div
          style={{
            height: "100vh",
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CalendarContextProvider>
            <Calendar />
          </CalendarContextProvider>
        </div>
      </div>
    </main>
  );
}
