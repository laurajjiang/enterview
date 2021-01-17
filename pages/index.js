import { Button } from "@blueprintjs/core";
import Head from "next/head";
import NavBar from "../components/NavBar/index.jsx";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enterview</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <div className={styles.main}>
        <img src={"/topHomeImg.png"} />
        <div>
          <h3>OUR MISSION</h3>
          <h1 className='bp3-heading'>
            We want to help you <br /> ace your interview
          </h1>
          <br />
          <p className='bp3-running-text bp3-text-muted'>
            A mock interview with a peer is the best way to start working on
            <br />
            your interview skills in a low-pressure interview. Simply schedule
            <br />
            your first mock interview now and start leveling up.
          </p>
          <br />
          <Button className='bp3-button bp3-outlined'>
            Schedule a mock interview
          </Button>
        </div>
      </div>
      <div className={styles.mainalt}>
        <div>
          <h1 className='bp3-heading'>
            Be an interviewer or an <br /> interviewee, both are great
          </h1>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <p className='bp3-running-text bp3-text-muted'>
              Being an interviewer helps put <br />
              you in the other perspective - <br />
              what do you consider a strong <br />
              answer?
            </p>
            <p className='bp3-running-text bp3-text-muted'>
              As an interviewee, gain more <br /> confidence in your answers and
              <br />
              working on unfamiliar problems <br />
              in a timed environment.
            </p>
          </div>
        </div>

        <img src={"/botHomeImg.png"} />
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
