import React from "react";
import styles from './FriendListItem.module.css'
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.item}>
      <img src={avatar} className={styles.avatar} />
      <p className={styles.name} > {name} </p>
      <p className={isOnline ? styles.online : styles.offline} > {isOnline ? "Online" : "Offline"} </p>
    </div>
  );
}
