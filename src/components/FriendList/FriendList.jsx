import FriendListItem from "../FriendListItem/FriendListItem";
import React from "react";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.listItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            id={friend.id}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
