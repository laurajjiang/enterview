import React, { useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import * as emailjs from "emailjs-com";

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const subject = "New request to be an interviewer";

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
          interested in being an interviewer? let us know through this form!
        </p>
        <div className={styles.contactCard}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(name, email);
              const templateParams = {
                from_name: name,
                from_email: email,
                to_name: "CS499",
                subject,
                message_html: description,
              };
              emailjs.send(
                "default_service",
                "template_4kdbkaj",
                templateParams,
                "user_hfbzc9dxMGeK3PZjpShRM"
              );
              console.log(templateParams);
              setName("");
              setEmail("");
              setDescription("");
            }}
            className='contact-form'>
            <div>
              <input
                value={name}
                name='name'
                type='text'
                placeholder='Your first and last name'
                onChange={(e) => setName(e.target.value)}
              />
              <input
                value={email}
                name='email'
                type='email'
                placeholder='Your email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <textarea
                value={description}
                name='description'
                type='text'
                style={{ width: "500px", height: "100px" }}
                placeholder='Tell us why you want to be an interviewer with us! Also include any relevant experience or qualifications.'
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button className={styles.primaryButton}>submit</button>
          </form>
        </div>

        <br />
      </div>
    </div>
  );
}
