import { AddTaskButton } from "./components/AddTaskButton";
import { AddTaskInput } from "./components/AddTaskInput";
import { Header } from "./components/Header";

import styles from "./styles/App.module.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.inputButtonWrapper}>
          <AddTaskInput />
          <AddTaskButton />
        </div>
      </div>
    </>
  );
}