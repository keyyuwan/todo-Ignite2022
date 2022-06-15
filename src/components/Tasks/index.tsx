import { Trash } from "phosphor-react";

import styles from "./styles.module.css";

interface TasksProps {
  tasks: string[];
  onDeleteTask: (task: string) => void;
}

export function Tasks({ tasks, onDeleteTask }: TasksProps) {
  function handleDeleteTask(task: string) {
    onDeleteTask(task);
  }

  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <div key={task} className={styles.taskWrapper}>
          <div className={styles.task}>
            <div className={styles.check}>
              <button className={styles.checkButton} />
            </div>
            <p className={styles.taskText}>{task}</p>
          </div>

          <button
            onClick={() => handleDeleteTask(task)}
            title="Deletar task"
            className={styles.deleteTaskButton}
          >
            <Trash size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}
