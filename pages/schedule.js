import React, { Component } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar/index.jsx";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styles from "react-big-calendar/lib/css/react-big-calendar.css";
import firebase from 'firebase'
import Calendars from '../components/Calender/calender'
var test2
var firebaseConfig = {
  apiKey: "AIzaSyAA6fzNvI9aTLBIIowaXtRVONasSiAJGnk",
  authDomain: "cs499project-8108f.firebaseapp.com",
  databaseURL: "https://cs499project-8108f-default-rtdb.firebaseio.com",
  projectId: "cs499project-8108f",
  storageBucket: "cs499project-8108f.appspot.com",
  messagingSenderId: "166082491960",
  appId: "1:166082491960:web:384ad311ad23d4386818cd",
  measurementId: "G-4N4MJ7MYK0"
};
//firebase.initializeApp(firebaseConfig);
var test
//var ref = firebase.database().ref();

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
    id: 1,
    title: "Test",
    allDay: false,
    start: new Date(2021, 0, 7, 15),
    end: new Date(2021, 0, 7, 19),
  },
];
export default function Schedule() {
var a
var test
//var ref = firebase.database().ref();

//callMe();
  return (
    <div>
      <Head>
        <title>Enterview</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Calendars></Calendars>
    </div>
  );
}
