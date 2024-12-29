import { useState } from "react";

const AddTasks = ({ onAddTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-100 rounded-md flex flex-col">
      <input
        placeholder="Digite o titulo da Tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-slate-400 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-slate-400 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button
        onClick={() => onAddTasks(title, description)}
        className="bg-green-400 p-2 rounded-md text-white"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddTasks;
