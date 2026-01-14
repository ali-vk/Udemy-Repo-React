export default function NoContent({ isAdd }) {
  return (
    <main class="flex-1 flex items-center justify-center bg-gray-100">
      <div class="text-center max-w-md">
        <div class="mx-auto mb-4 w-20 h-20 text-gray-500">
          <img src="/logo.png" />
        </div>

        <h2 class="text-2xl font-bold text-gray-600 mb-1">
          No Project Selected
        </h2>

        <p class="text-sm text-gray-500 mb-5">
          Select a project or get started with a new one
        </p>

        <button onClick={()=> isAdd(true)}
          class="px-5 py-2 rounded-md bg-gray-800 text-white text-sm
             hover:bg-gray-700 transition shadow"
        >
          Create new project
        </button>
      </div>
    </main>
  );
}
