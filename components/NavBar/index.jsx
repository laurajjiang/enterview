import React from "react";
import { Alignment, Button, Navbar } from "@blueprintjs/core";

export default function NavBar() {
  return (
    <Navbar fixedToTop>
      <Navbar.Group
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Navbar.Heading>insert app name</Navbar.Heading>
        <Navbar.Divider />
        <Button
          className='bp3-minimal'
          icon='home'
          text='Home'
          onClick={(e) => (window.location.href = "/")}
        />
        <Button
          className='bp3-minimal'
          icon='calendar'
          text='Schedule'
          onClick={(e) => (window.location.href = "/schedule")}
        />
        <Button
          className='bp3-minimal'
          icon='annotation'
          text='Practice'
          onClick={(e) => (window.location.href = "/practice")}
        />
        <Button
          className='bp3-minimal'
          icon='archive'
          text='Resources'
          onClick={(e) => (window.location.href = "/resources")}
        />
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button
          className='bp3-minimal'
          icon='id-number'
          text='About'
          onClick={(e) => (window.location.href = "/about")}
        />
      </Navbar.Group>
    </Navbar>
  );
}
