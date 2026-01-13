export default function SideBar() {
  return (
    <div class="flex bg-gray-100 h-screen">
      <aside class="w-96 mr-4 mt-12 rounded-tr-2xl bg-gradient-to-b from-[#1f1f2e] to-[#151522] text-white shadow-lg">
        <div class="p-6">
          <h2 class="text-2xl font-bold tracking-wide text-gray-300 mb-4">
            YOUR PROJECTS
          </h2>
          <button
            class="w-auto flex items-center justify-center gap-2 rounded-lg 
               bg-[#2a2a3d] px-4 py-2 text-sm text-gray-200
               hover:bg-[#34344a] transition"
          >
            <span class="text-lg">+</span>
            Add Project
          </button>
        </div>
      </aside>
    </div>
  );
}
