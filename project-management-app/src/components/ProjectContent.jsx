import { useState } from "react";

export default function ProjectContent({ Projects, activeButton, onDelete }) {
  const index = Projects.findIndex((Project) => Project.title === activeButton);
  const formattedDate = new Date(Projects[index].dueDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }) 

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleTask(data) {
    setTasks((prev) => [...prev, data]);
  }

  function handleClear(taskToRemove) {
    setTasks((prev) => {
      const updatedItems = prev.filter((item) => item !== taskToRemove);
      return updatedItems;
    });
  }

  console.log(index);

  return (
    <main className="flex-1 bg-gray-100 px-16 py-12">
      {index >= 0 && (
        <div className="max-w-3xl">
          {/* Header row */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-700 mb-2">
                {Projects[index].title}
              </h1>
              <p className="text-gray-400">{formattedDate}</p>
            </div>

            <button
              onClick={() => onDelete(activeButton)}
              className="text-gray-500 hover:text-gray-700"
            >
              Delete
            </button>
          </div>

          {/* Description */}
          <div className="text-gray-600 space-y-3 mb-6 whitespace-pre-line">
            <p>{Projects[index].description}</p>
          </div>

          <hr className="border-gray-300 mb-8" />

          {/* Tasks section */}
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Tasks</h2>

          {/* Add task row */}
          <div className="flex items-center gap-4 mb-6">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Practice, practice, practice"
              className="border-2 border-blue-600 rounded-md px-3 py-2 w-80 outline-none"
            />
            <button
              onClick={() => handleTask(input)}
              className="text-gray-600 hover:text-gray-800"
            >
              Add Task
            </button>
          </div>

          {/* Task list container */}
          <div className="bg-gray-200 rounded-lg p-6 space-y-4">
            {tasks.map((item, index) => (
              <div key={index} class="flex justify-between items-center w-full">
                <span>{item}</span>
                <button
                  onClick={() => handleClear(item)}
                  className="text-gray-500 hover:text-red-600"
                >
                  Clear
                </button>
              </div>
            ))}
            {tasks.length === 0 && <h2>No Tasks</h2>}
            {/* <span>Learn advanced concepts</span>
            <button className="text-gray-500 hover:text-gray-700">Clear</button> */}
          </div>
        </div>
      )}
      {index<0 && (<h2>Project not found</h2>)}
    </main>
  );
}
