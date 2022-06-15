import { Trash } from "phosphor-react";

import styles from "./styles.module.css";

export function Tasks() {
  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <div className={styles.check}>
          <button className={styles.checkButton} />
        </div>
        <p className={styles.taskText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <button title="Deletar task" className={styles.deleteTaskButton}>
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
