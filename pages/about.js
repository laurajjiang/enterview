import React, { Component } from "react";
import { Button } from "@blueprintjs/core";
import Head from "next/head";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enterview</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <div className={styles.title}>
        <h3>About</h3>
        <h1 className='bp3-heading'>
          A mock interview with a peer is the best way to start working
          <br /> on "Lorem ipsum dolor sit amet, consectetur adipisc ing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
          <br /> aliqua. laboris nisi ut aliquip ex ea commodo consequat.
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit
          <br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          <br /> occaecat cupidatat non proident, sunt in culpa qui officia
          <br /> deserunt mollit anim id est laborum."your interview skills
          <br />
          in a low-pressure interview. Simply
        </h1>
        <br />
      </div>
    </div>
  );
}
