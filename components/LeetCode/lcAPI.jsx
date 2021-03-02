import React from "react";
import leetcode from "./leetcode.json";
import LeetCard from "../LeetCard/leetcard";

function mapData(array) {
  return array.map((data) => {
    return (
      <LeetCard
        id={data["stat"]["question_id"]}
        title={data["stat"]["question__title"]}
        difficulty={data["difficulty"]["level"]}
        premium={data["paid_only"]}
        url={`https://leetcode.com/problems/${data["stat"]["question__title_slug"]}`}
      />
    );
  });
}

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
    } else if (title.includes("xor") || title.includes("binary")) {
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
      {(() => {
        switch (props.query) {
          case "array":
            return mapData(arrayQuestions);
          case "tree":
            return mapData(treeQuestions);
          case "list":
            return mapData(listQuestions);
          case "path":
            return mapData(traversalQuestions);
          case "graph":
            return mapData(graphQuestions);
          case "bit":
            return mapData(bitQuestions);
          case "string":
            return mapData(stringQuestions);
          default:
            return mapData(miscQuestions);
        }
      })()}
    </div>
  );
}
