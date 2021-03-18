import React, { Component } from "react";
import Head from "next/head";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styles from "react-big-calendar/lib/css/react-big-calendar.css";
import firebase from 'firebase'

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
firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref();

const localizer = momentLocalizer(moment);
var myEventsList = [

]

export class Calender extends Component {
  constructor() {
    super();
    this.state = {
      calevents: []
    };
  }
  componentDidMount = this.componentDidMount.bind(this);
  onSlotChange = this.onSlotChange.bind(this);
  onEventClick = this.onEventClick.bind(this);
  componentDidMount() {
    ref.on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let CalItems = {data};
      this.setState({ calevents: CalItems }, () => {
        myEventsList = this.state.calevents.data
    });
    });
  }
  onSlotChange(slotInfo) {
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    console.log('startTime', startDate); //shows the start time chosen
    console.log('endTime', endDate); //shows the end time chosen
  }
  onEventClick(event) {
    if(event.interviewee_name=="" && event.interviewee_email==""){
    var bookconfirm= window.confirm("Would you like to book this ? ")
    var nameprompt = window.prompt("Enter your name:", "")
    var emailprompt = window.prompt("Enter your email:", "")
    var ref = firebase.database().ref(`/${event.id}`);
    if(bookconfirm == true){
      if(emailprompt!= null){
        if(nameprompt!=null){
        ref.update({title:`${event.title}| BOOKED` ,interviewee_name: nameprompt,interviewee_email:emailprompt,})
        console.log("You signed up")
        console.log(event)
        console.log(event.id)
      }
    }
    }
  }
  else{
    window.alert("Already booked event please choose another.")
    console.log("Already booked event please choose another.")
  }

  return myEventsList
  }
    render() {
        return (
            <div>
              {this.state.calevents.data == undefined
              ? <div >No Available Meetings</div>
              : <Calendar
              selectable
              onSelectEvent={event => this.onEventClick(event)}
              onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
              localizer={localizer}
              events={this.state.calevents.data}
              startAccessor='start'
              endAccessor='end'
              style={{ height: 500 }}
              step={60}
              timeslots={2}
              defaultDate={new Date()}
              />
      }
            </div>
        );
    }
}
export default Calender
  