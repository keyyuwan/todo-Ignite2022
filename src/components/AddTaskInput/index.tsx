import { InputHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface AddTaskInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function AddTaskInput({ ...rest }: AddTaskInputProps) {
  return (
    <input
      placeholder="Adicione uma nova tarefa"
      className={styles.input}
      {...rest}
    />
  );
}
