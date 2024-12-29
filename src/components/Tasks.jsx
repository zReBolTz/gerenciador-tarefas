import { CheckCheckIcon, ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tasks = (props) => {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-6 rounded-md bg-slate-100">
        {props.tasks.map((item) => (
          <li key={item.id} className=" rounded flex gap-2 p-2">
            <button className=" w-full flex p-2">{item.title}</button>
            <div className=" flex gap-2 items-center">
              <button
                onClick={() => props.onDeleteTasks(item.id)}
                className="bg-green-400  w-[40px] h-[30px] rounded-md flex justify-center items-center text-white"
              >
                <Trash2 className="text-white w-4" />
              </button>
              <button
                className="bg-green-400  w-[40px] h-[30px] rounded-md flex justify-center items-center text-white"
                onClick={() => onSeeDetails(item)}
              >
                <ChevronRight />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
