import { Button, Intent } from "@blueprintjs/core";
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
        <div className={styles.flexrow}>
          <img src={"/topHomeImg.png"} />
          <div className={styles.description2}>
            <h2>OUR MISSION</h2>
            <h3>We want to help you ace your interview</h3>
            <br />
            <p className='bp3-running-text bp3-text-muted'>
              A mock interview with a peer is the best way to start working on
              your interview skills in a low-pressure interview. Simply schedule
              your first mock interview now and start leveling up.
            </p>
            <Button className={styles.secondaryButton}>
              Schedule a mock interview
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.flexrow}>
        <div className={styles.description2}>
          <h3>Be an interviewer or an interviewee, both are great</h3>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <p className='bp3-running-text bp3-text-muted'>
              Being an interviewer helps put you in the other perspective - what
              do you consider a strong answer?
            </p>
            <p className='bp3-running-text bp3-text-muted'>
              As an interviewee, gain more confidence in your answers and
              working on unfamiliar problems in a timed environment.
            </p>
          </div>
        </div>
        <img src={"/botHomeImg.png"} />
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          created with ♡ | interested in being an interviewer? let us know!
        </p>
      </footer>
    </div>
  );
}
