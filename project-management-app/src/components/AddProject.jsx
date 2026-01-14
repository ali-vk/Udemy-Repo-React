import { useState } from "react";
import Modal from "./Modal";

export default function AddProject({ isAdd, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    if (!title.trim() || !description.trim() || !dueDate) {
      setShowModal(true);
      return;
    }
    const newValue = {
      title: title,
      description: description,
      dueDate: dueDate,
    };

    onSave(newValue);
    isAdd(false);
  };

  const handleOkay = () => {
    setShowModal(false);
  }

  return (
    <main class="flex-1 px-10 py-10 bg-gray-100 items-center">
      <div class="max-w-2xl m-16 ml-0">
        <div class="flex justify-end items-center gap-6 mb-2">
          <button
            onClick={() => isAdd(false)}
            class="text-gray-700 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            class="bg-black text-white px-6 py-2 rounded-md font-medium"
          >
            Save
          </button>
        </div>
        <div class="max-w-2xl">
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-600 mb-2 uppercase">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              // placeholder="Learning React"
              class="w-full bg-gray-200 px-4 py-3 rounded-sm outline-none"
            ></input>
          </div>
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-600 mb-2 uppercase">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              // placeholder="Start with the basics, finish with advanced knowledge."
              class="w-full bg-gray-200 px-4 py-3 rounded-sm outline-none resize-none"
            ></textarea>
          </div>
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-600 mb-2 uppercase">
              Due Date
            </label>
            <input
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              type="date"
              className="w-full bg-gray-200 px-4 py-3 rounded-sm outline-none"
            ></input>
          </div>
        </div>
      </div>
      {showModal && <Modal onOkay={handleOkay}/>}
    </main>
  );
}
