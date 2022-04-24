import { createContext, useContext, useMemo, useState } from "react";

const calendarContext = createContext();

function CalendarContextProvider({ children }) {
  // const's
  const [currentDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(currentDate);
  const today = currentDate.getDate();
  const month = displayDate.getMonth() + 1;
  const year = displayDate.getFullYear();
  const daysInAMonth = getDaysInAMonth(year, month);
  const daysArray = Array.from({ length: daysInAMonth }, (v, i) => i + 1);
  const daysIds = daysArray.map((d) => getDayId(year, month, d));
  const dayString = displayDate.toDateString().slice(0, 3);
  const monthString = displayDate.toDateString().slice(4, 7);
  const todayId = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    today
  ).valueOf();

  // logic

  function getDaysInAMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  function getDayId(year, month, day) {
    return new Date(year, month, day).valueOf();
  }

  function subtractDisplayDate() {
    if (month - 1 < 1) {
      setDisplayDate(new Date(year - 1, 12, 0));
    }
    setDisplayDate(new Date(year, month - 1, 0));
  }
  function addDisplayDate() {
    if (month + 1 > 12) {
      setDisplayDate(new Date(year + 1, 1, 0));
    }
    setDisplayDate(new Date(year, month + 1, 0));
  }

  // export data
  const contextData = useMemo(() => {
    return {
      displayDate,
      daysArray,
      today,
      subtractDisplayDate,
      monthString,
      year,
      addDisplayDate,
      daysIds,
      todayId,
    };
  }, [displayDate, daysArray, today, monthString, year, todayId]);
  return (
    <calendarContext.Provider value={contextData}>
      {children}
    </calendarContext.Provider>
  );
}

function useCalendarContext() {
  return useContext(calendarContext);
}

export { CalendarContextProvider, useCalendarContext };
