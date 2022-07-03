import { FaGithubSquare } from "react-icons/fa";
import { colors } from "../packages/features/calendarStyles";
import Calendar from "../packages/components/Calendar";

export default function Home() {
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
          <Calendar />
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
