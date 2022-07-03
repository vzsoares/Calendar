import { CalendarContextProvider } from "../packages/features/calendarContext";
import { ModalContextProvider } from "../packages/features/ModalContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CalendarContextProvider>
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
    </CalendarContextProvider>
  );
}

export default MyApp;
