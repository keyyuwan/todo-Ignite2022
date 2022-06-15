import styles from "./styles.module.css";

import logoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logotipo do projeto" />
    </header>
  );
}
