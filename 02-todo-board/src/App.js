import { useState } from "react";
import InputField from "./components/InputField";
import Board from "./components/Board";


function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className="px-12" >
        <div className="flex flex-col items-center justify-center py-8 gap-4">
          <h1 className="text-xl font-semibold" >Todo Board</h1>
          <InputField taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div className="flex flex-col  gap-4 grid grid-cols-3 px-4 sm:px-8 md:px-10 lg-px-12 ">
          {taskList.map((task, index) => (
            <Board
              key={index}
              task={task}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
