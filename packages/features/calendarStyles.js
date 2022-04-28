export const colors = {
  backgroundBlack: "#252627",
  darkGrey: "#595B5F",
  taskRed: "#D74E09",
  taskBlue: "#53D8FB",
  taskYellow: "#FFC800",
  taskGreen: "#849324",
};

export const calendarContainerStyle = {
  minWidth: "200px",
  minHeight: "400px",
  backgroundColor: "#6D7074",
  display: "grid",
  gridTemplateRows: "1fr 3fr",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

export const calendarDayStyle = {
  width: "100%",
  height: "100%",
  textAlign: "center",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  cursor: "pointer",
  display: "grid",
  gridTemplateRows: "5fr 4fr",
  alignItems: "end",
};

export const calendarDaysContainerStyle = {
  display: "grid",
  justifyItems: "center",
  gridTemplateColumns: "repeat(7,1fr)",
  alignItems: "center",
};

export const calendarNavbarStyle = {
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  backgroundColor: "#595B5F",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
};

export const controlButtonStyle = {
  border: "none",
  padding: "0",
  background: "none",
  color: "#252627",
  cursor: "pointer",
  fontSize: "1.4rem",
};

export const modalContainerStyle = {
  minWidth: "200px",
  minHeight: "360px",
  backgroundColor: "#6D7074",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  padding: "0.5rem",
  display: "grid",
  justifyContent: "center",
  alignItems: "start",
  justifyItems: "center",
  gridTemplateRows: "1fr 5fr",
};

export const modalCloseBtnStyle = {
  position: "absolute",
  left: "100%",
  fontSize: "1.5rem",
  transform: "translate(-110%, 10%)",
  color: colors.backgroundBlack,
};
