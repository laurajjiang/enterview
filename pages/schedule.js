import React, { Component } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar/index.jsx";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styles from "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    id: 0,
    title: "Test Meeting",
    allDay: false,
    start: new Date(2021, 0, 5, 14),
    end: new Date(2021, 0, 5, 16),
    desc: "Ya",
  },
  {
    id: 2,
    title: "Test",
    allDay: false,
    start: new Date(2021, 0, 7, 15),
    end: new Date(2021, 0, 7, 19),
  },
];
export default function Schedule() {
  return (
    <div>
      <Head>
        <title>Enterview</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar></NavBar>
      <div>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
}
