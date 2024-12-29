import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Programar",
      description: "Programar React",
    },
    {
      id: 2,
      title: "Ler",
      description: "Ler o livro 'Pai rico e pai pobre'",
    },
  ]);

  function onDeleteTasks(id) {
    const NewTask = tasks.filter((task) => {
      return id != task.id;
    });
    setTasks(NewTask);
  }

  function onAddTasks(title, description) {
    const task = {
      id: v4(),
      description: description,
      title: title,
    };
    setTasks([...tasks, task]);
  }

  return (
    <div className="w-screen h-screen flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-white flex justify-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTasks={onAddTasks} />
        <Tasks tasks={tasks} onDeleteTasks={onDeleteTasks} />
      </div>
    </div>
  );
}

export default App;
