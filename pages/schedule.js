import React, { Component } from 'react'
import Head from "next/head";
import NavBar from "../components/NavBar/index.jsx";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styles from 'react-big-calendar/lib/css/react-big-calendar.css'


const localizer = momentLocalizer(moment);
const myEventsList = []
export class schedule extends Component {
    render() {
        return (
            <div >
                <Head>
                    <title>Enterview</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <div>
                    <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    />
    </div>
  </div>
        )
    }
}

export default schedule
