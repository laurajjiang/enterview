import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Head from "next/head";
import styles from "../styles/Home.module.css";

export class resources extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Enterview</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <NavBar></NavBar>
                <div className={styles.main}> RESOURCES</div>

            </div>
        )
    }
}

export default resources

