import { useState } from "react";

const InputField = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {  // Prevent adding empty tasks
            setTaskList([...taskList, input]);  // Spread operator to add the new task
            setInput("");  // Clear the input field
        }
    }

    return (
        <>
            <form className="flex flex-row items-center gap-3" >
                <input
                    className="border rounded-lg px-2.5 text-lg py-2"
                    type="text"
                    placeholder="Add a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="bg-pink-400 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-70"
                    onClick={handleAddTask}>Add</button>
            </form>
        </>
    );
}

export default InputField;
