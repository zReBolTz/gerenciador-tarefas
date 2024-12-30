import { useEffect, useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";

function App() {
  useEffect(() => {}, []);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("@tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onDeleteTasks(id) {
    const NewTask = tasks.filter((task) => {
      return id != task.id;
    });
    setTasks(NewTask);
  }

  function onAddTasks(title, description) {
    if (!title.trim() || !description.trim()) {
      return alert("Preencha todos os campos");
    }
    const task = {
      id: v4(),
      description: description,
      title: title,
      isCompleted: false,
    };
    setTasks([...tasks, task]);
  }

  function CompletedTaks(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-white flex justify-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTasks={onAddTasks} />
        <Tasks
          tasks={tasks}
          onDeleteTasks={onDeleteTasks}
          CompletedTaks={CompletedTaks}
        />
      </div>
    </div>
  );
}

export default App;
