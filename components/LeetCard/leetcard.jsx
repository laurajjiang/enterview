import { Icon } from "@blueprintjs/core";
import styles from "../../styles/Home.module.css";

export default function LeetCard(props) {
  return (
    <div className={styles.card}>
      <div>
        <h3>
          {props.id}. {props.title}
        </h3>

        <a href={props.url}>
          <button className={styles.secondaryButton}>View on Leetcode</button>
        </a>
      </div>
      <div className={styles.grid} style={{ flexDirection: "column" }}>
        <div>
          Difficulty:
          {props.difficulty == 1 ? (
            <b> Easy</b>
          ) : props.difficulty == 2 ? (
            <b> Medium</b>
          ) : (
            <b> Hard</b>
          )}
        </div>
        <br></br>
        <div>
          {props.premium ? (
            <div>
              <Icon icon='lock' /> LeetCode Premium
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
