import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} />
        <p className={styles.userName}>{name} </p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}> {location} </p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.stat}>
          <p>Followers</p>
          <span>{stats.followers} </span>
        </li>
        <li className={styles.stat}>
          <p>Views</p>
          <span> {stats.views} </span>
        </li>
        <li className={styles.stat}>
          <p>Likes</p>
          <span> {stats.likes} </span>
        </li>
      </ul>
    </div>
  );
}
