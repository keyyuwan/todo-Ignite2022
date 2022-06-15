import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./styles.module.css";

interface AddTaskButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function AddTaskButton({ ...rest }: AddTaskButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      Criar
      <PlusCircle weight="bold" />
    </button>
  );
}
