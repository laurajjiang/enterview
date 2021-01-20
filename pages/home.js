import React, { Component } from 'react'
import NavBar from "../components/NavBar/index.jsx";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export class home extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Enterview</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <NavBar/>
                <div className={styles.main}> HOME PAGE</div>
            </div>
        )
    }
}

export default home