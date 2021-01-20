import React, { Component } from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar'
import styles from "../styles/Home.module.css";

export class practice extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Enterview</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <NavBar></NavBar>
                <div className={styles.main}> PRACTICE</div>
            </div>
        )
    }
}

export default practice
