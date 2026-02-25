import styles from "../styles/Header.module.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img className={styles.brandIcon} src={logo} alt="logo" />
          <span className={styles.brandText}>МЕСК</span>
        </div>

        <nav className={styles.nav}>
          <a className={styles.link} href="#home">
            Главная
          </a>
          <a className={styles.link} href="#music">
            Музыка
          </a>
          <a className={styles.link} href="#communities">
            Сообщества
          </a>
          <a className={styles.link} href="#friends">
            Друзья
          </a>
        </nav>
      </div>
    </header>
  );
}
