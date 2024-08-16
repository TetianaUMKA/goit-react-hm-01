import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.mainInfo}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>View</span>
          <span className={css.value}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
