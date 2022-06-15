import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AddTaskButton } from "./components/AddTaskButton";
import { AddTaskInput } from "./components/AddTaskInput";
import { EmptyTasks } from "./components/EmptyTasks";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { TasksCounter } from "./components/TasksCounter";

import styles from "./styles/App.module.css";
import "./styles/global.css";

export interface Task {
  id: string;
  task: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddNewTask() {
    if (newTask.length === 0) {
      return;
    }

    const taskToBeAdded = {
      id: uuidv4(),
      task: newTask,
      done: false,
    };

    setTasks([...tasks, taskToBeAdded]);
    setNewTask("");
  }

  function deleteTask(taskId: string) {
    const tasksWithoutTheDeletedOne = tasks.filter(
      (item) => item.id !== taskId
    );

    setTasks(tasksWithoutTheDeletedOne);
  }

  function toggleTaskDone(taskId: string) {
    const chosenTask = tasks.find((task) => task.id === taskId);

    const coppiedTasks = tasks.map((task) => ({ ...task }));
    coppiedTasks.forEach((task) => {
      if (task.id === chosenTask?.id) {
        task.done = !task.done;
      }
    });

    setTasks(coppiedTasks);
  }

  const hasTasks = tasks.length > 0;
  const createdTasksLength = tasks.length;
  const doneTasks = tasks.filter((task) => task.done);
  const doneTasksLengh = doneTasks.length;

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.inputButtonWrapper}>
          <AddTaskInput value={newTask} onChange={handleNewTaskChange} />
          <AddTaskButton onClick={handleAddNewTask} />
        </div>

        <div className={styles.tasksContainer}>
          <TasksCounter
            createdTasks={createdTasksLength}
            doneTasks={doneTasksLengh}
          />

          {hasTasks ? (
            <Tasks
              tasks={tasks}
              onDeleteTask={deleteTask}
              onToggleTaskDone={toggleTaskDone}
            />
          ) : (
            <EmptyTasks />
          )}
        </div>
      </div>
    </>
  );
}
