import React from "react";
import styles from "../../styles/Home.module.css";

export default function ResourceCard({ img, title, description, url }) {
  return (
    <div className={styles.resourceCard}>
      <img src={img} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={styles.secondaryButton}>
        <a href={url}>link</a>
      </button>
    </div>
  );
}
