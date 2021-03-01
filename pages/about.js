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
      <div className={styles.main}>
        <h2>about us and the site</h2>
        <p className={styles.description}>
          this site was created as a part of a cs499 project but also out of a
          desire for more resources to help students with interview preparation.
          <br />
          <br />
          this project is built by students for students, so please let us know
          if you have any comments, suggestions, or concerns.
          <br />
          <br />
          interested in being an interviewer? submit this form:
        </p>
        <br />
      </div>
    </div>
  );
}
