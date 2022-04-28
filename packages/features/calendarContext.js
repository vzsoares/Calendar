import { createContext, useContext, useMemo, useState } from "react";
import { colors } from "./calendarStyles";

const calendarContext = createContext();

function CalendarContextProvider({ children }) {
  // constants

  const [currentDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(currentDate);
  const [todayId] = useState(
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    ).valueOf()
  );
  const [events, setEvents] = useState({
    [todayId]: [{ event: "Today", description: "", color: colors.taskBlue }],
  });
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState({
    data: todayId,
    function: "view",
  });
  const displayedYear = displayDate.getFullYear();
  const displayedMonth = displayDate.getMonth() + 1;
  const daysIds = getDaysIds(displayedYear, displayedMonth);

  // functions

  function getDayId(year, month, day) {
    return new Date(year, month, day).valueOf();
  }

  function getDaysInAMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function getDaysIds(year, month) {
    let ids = [];
    // add's prev month days
    if (new Date(year, month - 1, 1).getDay() !== 0) {
      for (let i = 0; i < new Date(year, month - 1, 1).getDay(); i++) {
        // splice is just to Sort the array
        ids.splice(
          0,
          0,
          getDayId(year, month - 2, getDaysInAMonth(year, month - 1) - i)
        );
      }
    }
    // adds month days
    for (let index = 1; index < getDaysInAMonth(year, month) + 1; index++) {
      ids.push(getDayId(year, month - 1, index));
    }
    return ids;
  }

  function jumpPrevMonth() {
    if (displayedMonth - 1 < 1) {
      setDisplayDate(new Date(displayedYear - 1, 12, 0));
    }
    setDisplayDate(new Date(displayedYear, displayedMonth - 1, 0));
  }

  function jumpNextMonth() {
    if (displayedMonth + 1 > 12) {
      setDisplayDate(new Date(displayedYear + 1, 1, 0));
    }
    setDisplayDate(new Date(displayedYear, displayedMonth + 1, 0));
  }

  function addEvent(event, description, color, dayID) {
    const newEvent = { event: event, description: description, color: color };
    setEvents({ ...events, [dayID]: [...(events[dayID] ?? ""), newEvent] });
  }

  function toggleModal() {
    setModalState(!modalState);
  }

  function editEvent(id, i, event, description, color) {
    const editedEvent = {
      event: event,
      description: description,
      color: color,
    };
    const myList = [...(events[id] ?? "")];
    myList[i] = editedEvent;
    setEvents({
      ...events,
      [id]: myList,
    });
  }

  // exported data
  const contextData = useMemo(() => {
    return {
      displayDate,
      daysIds,
      todayId,
      events,
      modalState,
      modalData,
      setModalData,
      setModalState,
      toggleModal,
      editEvent,
      addEvent,
      getDayId,
      jumpNextMonth,
      jumpPrevMonth,
    };
  }, [todayId, daysIds, displayDate]);
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