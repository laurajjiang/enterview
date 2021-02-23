import React, { useState, useEffect } from "react";
import leetcode from "./leetcode.json";
import Card from "../Card/card";

export default function LeetSearch(props) {
  let graphQuestions = [];
  let questions = [];
  let arrayQuestions = [];
  let stringQuestions = [];
  let treeQuestions = [];
  let listQuestions = [];
  let traversalQuestions = [];
  let bitQuestions = [];
  let miscQuestions = [];

  for (let i = 0; i < leetcode["stat_status_pairs"].length; i++) {
    let question = leetcode["stat_status_pairs"][i];
    let title =
      leetcode["stat_status_pairs"][i]["stat"]["question__title_slug"];
    if (title.includes("array")) {
      arrayQuestions.unshift(question);
    } else if (title.includes("string")) {
      stringQuestions.unshift(question);
    } else if (
      title.includes("xor") ||
      title.includes("or") ||
      title.includes("binary")
    ) {
      bitQuestions.unshift(question);
    } else if (title.includes("tree")) {
      treeQuestions.unshift(question);
    } else if (title.includes("node") || title.includes("list")) {
      listQuestions.unshift(question);
    } else if (title.includes("path")) {
      traversalQuestions.unshift(question);
    } else if (title.includes("graph")) {
      graphQuestions.unshift(question);
    } else {
      miscQuestions.unshift(question);
    }
    questions.unshift(question);
  }

  return (
    <div>
      <h3>Results</h3>
      {(() => {
        switch (props.query) {
          case "array":
            return arrayQuestions.map((data) => {
              return (
                <Card
                  id={data["stat"]["question_id"]}
                  title={data["stat"]["question__title"]}
                  difficulty={data["difficulty"]["level"]}
                  premium={data["paid_only"]}
                  url={`https://leetcode.com/problems/${data["stat"]["question__title_slug"]}`}
                />
              );
            });
          case "tree":
            return treeQuestions.map((data) => {
              return (
                <Card
                  id={data["stat"]["question_id"]}
                  title={data["stat"]["question__title"]}
                  difficulty={data["difficulty"]["level"]}
                  premium={data["paid_only"]}
                  url={`https://leetcode.com/problems/${data["stat"]["question__title_slug"]}`}
                />
              );
            });
          case "list":
            return listQuestions.map((data) => {
              return (
                <Card
                  id={data["stat"]["question_id"]}
                  title={data["stat"]["question__title"]}
                  difficulty={data["difficulty"]["level"]}
                  premium={data["paid_only"]}
                  url={`https://leetcode.com/problems/${data["stat"]["question__title_slug"]}`}
                />
              );
            });
          case "path":
            return traversalQuestions.map((data) => {
              return (
                <Card
                  id={data["stat"]["question_id"]}
                  title={data["stat"]["question__title"]}
                  difficulty={data["difficulty"]["level"]}
                  premium={data["paid_only"]}
                  url={`https://leetcode.com/problems/${data["stat"]["question__title_slug"]}`}
                />
              );
            });
          case "graph":
            return graphQuestions.map((data) => {
              return (
                <Card
                  id={data["stat"]["question_id"]}
                  title={data["stat"]["question__title"]}
                  difficulty={data["difficulty"]["level"]}
                  premium={data["paid_only"]}
                  url={`https://leetcode.com/problems/${data["stat"]["question__title_slug"]}`}
                />
              );
            });
          case "bit":
            return bitQuestions.map((data) => {
              return (
                <Card
                  id={data["stat"]["question_id"]}
                  title={data["stat"]["question__title"]}
                  difficulty={data["difficulty"]["level"]}
                  premium={data["paid_only"]}
                  url={`https://leetcode.com/problems/${data["stat"]["question__title_slug"]}`}
                />
              );
            });
          case "string":
            return stringQuestions.map((data) => {
              return (
                <Card
                  id={data["stat"]["question_id"]}
                  title={data["stat"]["question__title"]}
                  difficulty={data["difficulty"]["level"]}
                  premium={data["paid_only"]}
                  url={`https://leetcode.com/problems/${data["stat"]["question__title_slug"]}`}
                />
              );
            });
          default:
            return miscQuestions.map((data) => {
              return (
                <Card
                  id={data["stat"]["question_id"]}
                  title={data["stat"]["question__title"]}
                  difficulty={data["difficulty"]["level"]}
                  premium={data["paid_only"]}
                  url={`https://leetcode.com/problems/${data["stat"]["question__title_slug"]}`}
                />
              );
            });
        }
      })()}
    </div>
  );
}
