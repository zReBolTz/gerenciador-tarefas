import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ViewTasks = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();
  function backPage() {
    navigate(-1);
  }
  return (
    <div className="w-screen h-screen flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute left-0 top-0 bottom-0 text-slate-100"
            onClick={() => backPage()}
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-white flex justify-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewTasks;
