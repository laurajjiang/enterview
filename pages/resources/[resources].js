import React from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
// import ResourceCard from "../components/ResourceCard";

export default function Resources() {
  const router = useRouter();
  console.log("== router.query:", router.query);
  const { item } = router.query;

  return (
    <div>
      <Head>
        <title>Enterview</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <div className={styles.main}>
        <h2>resources</h2>
        <p className={styles.description}>
          we've linked a couple of resources that you'll hopefully find helpful
          too. click on an item below to display resources for a particular
          category.
        </p>
        <div className={styles.flexrow}>
          <Link href='/resources/general'>
            <h2 className={styles.subnav}>general</h2>
          </Link>
          <Link href='/resources/technical'>
            <h2 className={styles.subnav}>technical interviews</h2>
          </Link>
          <Link href='/resources/behavioral'>
            <h2 className={styles.subnav}>behavioral interviews</h2>
          </Link>
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          created with ♡ | interested in being an interviewer? let us know!
        </p>
      </footer>
    </div>
  );
}

function ResourcesCards() {
  //   return <ResourceCard />;
}
