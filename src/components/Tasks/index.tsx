import { Trash, Check } from "phosphor-react";

import { Task } from "../../App";

import styles from "./styles.module.css";

interface TasksProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onToggleTaskDone: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onToggleTaskDone }: TasksProps) {
  function handleDeleteTask(taskId: string) {
    onDeleteTask(taskId);
  }

  function handleToggleTaskDone(taskId: string) {
    onToggleTaskDone(taskId);
  }

  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.taskWrapper}>
          <div className={styles.task}>
            <div className={styles.check}>
              {task.done ? (
                <button
                  onClick={() => handleToggleTaskDone(task.id)}
                  className={styles.checkButtonDone}
                >
                  <Check weight="bold" size={16} />
                </button>
              ) : (
                <button
                  onClick={() => handleToggleTaskDone(task.id)}
                  className={styles.checkButton}
                />
              )}
            </div>

            <p className={task.done ? styles.taskTextDone : styles.taskText}>
              {task.task}
            </p>
          </div>

          <button
            onClick={() => handleDeleteTask(task.id)}
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
