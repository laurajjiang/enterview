import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar/index.jsx";
import styles from "../styles/Home.module.css";
import LeetSearch from "../components/LeetCode/lcAPI.jsx";

export default function Practice() {
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div>
      <Head>
        <title>Enterview</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <div className={styles.main}>
        <h1>practice your coding skills</h1>
        <p className={styles.description}>
          Find a practice problem to do in your own time or for an upcoming
          practice interview. You can either find a random question, search for
          a particular question, or search by topic using the drop-down menu.
        </p>
        <div className='select'>
          <a href='https://leetcode.com/problems/random-one-question/all'>
            <button className={styles.primaryButton}>i'm feeling lucky</button>
          </a>
          <select
            id='q-type'
            name='q-type'
            onChange={(e) => {
              setSearch(true);
              setQuery(e.target.value);
            }}
            className={styles.select}>
            <option selected>N/A</option>
            <option value='array'>Arrays</option>
            <option value='tree'>Trees</option>
            <option value='string'>Strings</option>
            <option value='paths'>DFS/BFS</option>
            <option value='graph'>Graphs</option>
            <option value='lists'>Linked Lists</option>
            <option value='bits'>Bit Manipulation</option>
            <option value='misc'>Misc</option>
          </select>
        </div>

        {search ? (
          <div className={styles.grid}>
            <LeetSearch query={query} />
          </div>
        ) : (
          <span />
        )}
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          created with ♡ | interested in being an interviewer? let us know!
        </p>
      </footer>
    </div>
  );
}
