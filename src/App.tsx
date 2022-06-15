import { AddTaskButton } from "./components/AddTaskButton";
import { AddTaskInput } from "./components/AddTaskInput";
import { EmptyTasks } from "./components/EmptyTasks";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { TasksCounter } from "./components/TasksCounter";

import styles from "./styles/App.module.css";
import "./styles/global.css";

export function App() {
  const hasTasks = true;

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.inputButtonWrapper}>
          <AddTaskInput />
          <AddTaskButton />
        </div>

        <div className={styles.tasksContainer}>
          <TasksCounter />

          {hasTasks ? <Tasks /> : <EmptyTasks />}
        </div>
      </div>
    </>
  );
}
