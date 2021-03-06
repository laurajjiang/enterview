import React from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

const generalResources = [
  {
    img: "/youtube.png",
    title: "Laura's YouTube Channel",
    description:
      "Laura is creating video content centered around navigating the new graduate experience, interview preparation, and financial experience.",
    url: "https://www.youtube.com/channel/UCaJDpvf3e0VwlORrZ3VOzjg",
  },
  {
    img: "",
    title: "Debugging the Tech Recruitment Process",
    description:
      "Kristen has written a great hollistic explanation on the recruiting process for computer science students.",
    url:
      "https://kristen.dev/blog/2020-07-09-recruiting-process/?fbclid=IwAR33_T5sTg34KBP7K2jk0Y5Hr4zwCXcbSQiWhOm4sGrirl_DiXV1dGi69wE",
  },
  {
    img: "",
    title: "Problem Solving Framework",
    description:
      "This is slightly more PM-focused, but the article provides a great framework on how to solve any problem.",
    url: "https://uxdesign.cc/how-to-solve-problems-6bf14222e424",
  },
  {
    img: "",
    title: "Playing the Internship Game",
    description:
      "A guide about all things internship, from applying to interviewing.",
    url: "https://evykassirer.github.io/playing-the-internship-game/",
  },
];

const technicalResources = [
  {
    img: "",
    title: "Leetcode Patterns",
    description:
      "This article describes the different patterns you need to solve any Leetcode or technical interview question.",
    url:
      "https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed",
  },
  {
    img: "",
    title: "System Design Resources",
    description:
      "This GitHub repo has a large collection of resources to help you prepare for system design questions.",
    url: "https://github.com/madd86/awesome-system-design",
  },
  {
    img: "",
    title: "TripleByte Technical Interview Guide",
    description:
      "TripleByte has written an overview of what to expect in the technical interview, as long as distilling down to what you should know.",
    url:
      "https://triplebyte.com/blog/triplebyte-s-way-too-long-technical-interview-prep-guide",
  },
  {
    img: "",
    title: "Welcome to the Coding Interview - You Suck",
    description:
      "This is another long document breaking down everything you need to know about the technical interview.",
    url:
      "https://docs.google.com/document/d/1eKirumpmwDWTtKCJKn2HuoQ2NavEfR41whmTyaQcio4/edit#heading=h.5whxh9eun9ub",
  },
];

const behavioralResources = [
  {
    img: "",
    title: "Negotiating Offers",
    description:
      "Knowing when and how to negotiate an offer can be a lifechanger! Check out Courtney's guide.",
    url: "https://github.com/CourtneyThurston/negotiating-major-swe-offers",
  },
  {
    img: "",
    title: "How to Write a Kickass Resume",
    description:
      "This is a recruiter-written guide on how to write a great resume - check it out to help you get started.",
    url:
      "https://docs.google.com/document/u/1/d/e/2PACX-1vQpvbP8lzPvZrNvrX58UlacpQiLgh1fBQYfOS2pEJZvp-zOb9uKQJYKSsDQ6mJWoPf3H09OmdrLDcaK/pub?urp=gmail_link#h.9q8jjikyp83y",
  },
  {
    img: "",
    title: "Interviewing Experiences",
    description:
      "See how other candidates' experiences were interviewing at different companies.",
    url:
      "https://docs.google.com/document/d/1a2fMuDF4WisGTOIFYbcnlxPzDrwoD_QG767GmD35Bfw/edit?fbclid=IwAR3HdSFuL_bLKPbG-QB3y55YrLodDpJziaSlZjEpdHpE1Q-4JvqSFgQ-2yU#heading=h.spocb22f7xs3",
  },
  {
    img: "",
    title: "A Simple Model for Asking Better Questions",
    description:
      "Learn how to ask better questions following an easy framework. Suitable for any situation!",
    url:
      "https://crstanier.medium.com/tedw-a-simple-model-for-asking-better-questions-146ba98de94a",
  },
];

function generateResourceList(resource) {
  return (
    <div>
      {(() => {
        switch (resource) {
          case "general":
            return generalResources.map((item) => {
              {
                console.log(item);
              }
              return (
                <ResourceCard
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                />
              );
            });
          case "technical":
            return technicalResources.map((item) => {
              {
                console.log(item);
              }
              return (
                <ResourceCard
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                />
              );
            });
          case "behavioral":
            return behavioralResources.map((item) => {
              {
                console.log(item);
              }
              return (
                <ResourceCard
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                />
              );
            });
        }
      })()}
    </div>
  );
}

export default function Item() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Head>
        <title>Enterview</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.flexrow}>
          <h2 onClick={() => router.back()}>{`<`} back</h2>
          <span style={{ padding: "20px" }} />
          <h2>
            resources {`>`} {router.query.item}
          </h2>
        </div>
        {generateResourceList(router.query.item)}
      </div>
    </div>
  );
}
