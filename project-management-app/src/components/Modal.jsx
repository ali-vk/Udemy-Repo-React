import { createPortal } from "react-dom";

export default function Modal({onOkay}) {
  return createPortal(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-3">Invalid Input</h2>
            <p className="text-gray-600 mb-5">
              Please fill all the fields before saving.
            </p>
            <button
              onClick={onOkay}
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Okay
            </button>
          </div>
        </div>, document.getElementById('modal-root')
  );
}
