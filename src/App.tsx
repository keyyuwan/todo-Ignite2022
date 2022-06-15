import { ChangeEvent, useState } from "react";
import { AddTaskButton } from "./components/AddTaskButton";
import { AddTaskInput } from "./components/AddTaskInput";
import { EmptyTasks } from "./components/EmptyTasks";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { TasksCounter } from "./components/TasksCounter";

import styles from "./styles/App.module.css";
import "./styles/global.css";

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddNewTask() {
    if (newTask.length === 0) {
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  const hasTasks = tasks.length > 0;

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.inputButtonWrapper}>
          <AddTaskInput value={newTask} onChange={handleNewTaskChange} />
          <AddTaskButton onClick={handleAddNewTask} />
        </div>

        <div className={styles.tasksContainer}>
          <TasksCounter />

          {hasTasks ? <Tasks tasks={tasks} /> : <EmptyTasks />}
        </div>
      </div>
    </>
  );
}
