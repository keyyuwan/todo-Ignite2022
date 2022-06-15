import styles from "./styles.module.css";

import clipboardImg from "../../assets/Clipboard.svg";

export function Tasks() {
  return (
    <div className={styles.container}>
      <img
        src={clipboardImg}
        alt="Ícone de prancheta"
        className={styles.clipboardImg}
      />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
