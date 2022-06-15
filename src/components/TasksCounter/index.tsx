import styles from "./styles.module.css";

export function TasksCounter() {
  return (
    <div className={styles.container}>
      <div className={styles.counterWrapper}>
        <span className={styles.createdTasksText}>Tarefas criadas</span>

        <div className={styles.counter}>0</div>
      </div>

      <div className={styles.counterWrapper}>
        <span className={styles.completedTasksText}>Concluídas</span>

        <div className={styles.counter}>0</div>
      </div>
    </div>
  );
}
