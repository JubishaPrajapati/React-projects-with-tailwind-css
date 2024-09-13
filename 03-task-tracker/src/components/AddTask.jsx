import { useState } from "react";

const AddTask = ({ taskList, setTaskList }) => {

    const [addModal, setAddModal] = useState(false);

    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const handleInput = e => {
        const { name, value } = e.target;

        if (name === "projectName") {
            setProjectName(value);
            setErrorMsg("");
        }
        if (name === "projectName" && value === "") {
            setErrorMsg("Enter your project name to continue");
        }
        if (name === "taskDescription") setTaskDescription(value)

    }

    const handleAdd = e => {
        e.preventDefault();
        if (!projectName) {
            setErrorMsg("Enter project name to continue");
        } else {
            let timestamp = new Date();
            let tempList = taskList;
            tempList.push({
                projectName,
                taskDescription,
                timestamp: timestamp,
                duration: 0
            })
            localStorage.setItem("taskList", JSON.stringify(tempList))
            window.location.reload();

            // setTaskList([...taskList, { projectName, taskDescription, timestamp: timestamp }]);
            setAddModal(false);
            setProjectName("");
            setTaskDescription("");
        }
    }

    return (
        <>
            <button className="bg-blue-500 text-white uppercase font-semibold py-1 mx-2 pl-2 pr-2 rounded hover:opacity-70"
                type="button" onClick={() => setAddModal(true)}>+New</button>

            {addModal ? (
                <>
                    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100" >
                        <div className=" w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col" >
                            <div className=" flex flex-row justify-between p-5 border-b border-slate-200 rounded-t">
                                <h3 className="bg-white text-3xl font-semibold" >Add New Task</h3>
                                <button className="px-1 text-gray-500 float-right text-3xl leading-none font-semibold block" onClick={() => setAddModal(false)} >X</button>
                            </div>
                            <form className="px-6 pt-6 pb-4">
                                <div>
                                    <label className="track-wide uppercase text-gray-700 text-l mb-2 font-semibold block" htmlFor="project-name">Project Name</label>
                                    <input className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        type="text" id="project-name" name="projectName" value={projectName} onChange={handleInput} placeholder="Project Name" required />

                                    <p className="text-red-500 text-center mt-2 mb-5" >{errorMsg}</p>
                                </div>
                                <div>
                                    <label className="track-wide uppercase text-gray-700 text-l mb-2 font-semibold block" htmlFor="task-description" >Task Description</label>
                                    <textarea className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
                                        id="task-description" rows="5" name="taskDescription" value={taskDescription} onChange={handleInput} placeholder="Task Description" ></textarea>
                                </div>
                            </form>
                            <div className="flex justify-end p-6 border-t border-slate-200 rounded-b">
                                <button className="bg-blue-500 text-white rounded hover:opacity-70 font-semibold uppercase text-sm px-6 py-3" onClick={handleAdd} >Add Task</button>
                            </div>
                        </div>

                    </div>
                </>
            ) : null}

        </>
    )
}
export default AddTask;