import styles from "../styles/Post.module.css";
import avatar from "../assets/avatar.png";

export default function Post({ post, onDelete }) {
  return (
    <article className={styles.card}>
      <div className={styles.left}>
        <div className={styles.avatarWrap}>
          <img className={styles.avatar} src={avatar} alt="User" />
          <div className={styles.userText}>User logo</div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleRow}>
          <div>
            <div className={styles.caption}>Заголовок</div>
            <div className={styles.title}>{post.title}</div>
          </div>

          <div className={styles.rightMeta}>
            <div className={styles.idLabel}>id поста</div>
            <div className={styles.idValue}>{post.id}</div>
            <button
              className={styles.deleteBtn}
              onClick={() => onDelete(post.id)}
            >
              Удалить
            </button>
          </div>
        </div>

        <div className={styles.text}>{post.text}</div>
      </div>
    </article>
  );
}
