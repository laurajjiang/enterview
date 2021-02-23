import { Button, Intent, Icon } from "@blueprintjs/core";

export default function Card(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}>
      <h2>
        {props.id}. {props.title}
      </h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        Difficulty:
        {props.difficulty == 1 ? (
          <h3>Easy</h3>
        ) : props.difficulty == 2 ? (
          <h3>Medium</h3>
        ) : (
          <h3>Hard</h3>
        )}
      </div>

      <a href={props.url}>
        {props.premium ? (
          <div>
            <Icon icon='lock' /> LeetCode Premium
          </div>
        ) : null}
        <button className='bp3-button ' intent={Intent.PRIMARY}>
          View on Leetcode
        </button>
      </a>
    </div>
  );
}
