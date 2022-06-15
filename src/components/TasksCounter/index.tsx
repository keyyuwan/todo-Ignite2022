import styles from "./styles.module.css";

interface TasksCounterProps {
  createdTasks: number;
  doneTasks: number;
}

export function TasksCounter({ createdTasks, doneTasks }: TasksCounterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.counterWrapper}>
        <span className={styles.createdTasksText}>Tarefas criadas</span>

        <div className={styles.counter}>{createdTasks}</div>
      </div>

      <div className={styles.counterWrapper}>
        <span className={styles.completedTasksText}>Concluídas</span>

        <div className={styles.counter}>
          {doneTasks === 0 ? "0" : `${doneTasks} de ${createdTasks}`}
        </div>
      </div>
    </div>
  );
}
