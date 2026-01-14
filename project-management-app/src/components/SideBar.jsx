export default function SideBar({ isAdd, projects, activeProject, activeButton }) {

  return (
    <div class="flex bg-gray-100 h-screen">
      <aside class="w-96 mt-12 rounded-tr-2xl bg-stone-950 text-white shadow-lg">
        <div class="p-6 m-14 ml-6">
          <h2 class="text-3xl font-bold text-gray-300 mb-8">YOUR PROJECTS</h2>
          <button
            onClick={() => isAdd(true)}
            class="w-auto flex items-center justify-center gap-2 rounded-lg 
               bg-[#2a2a3d] px-7 py-3 text-xl text-gray-400
               hover:bg-[#34344a] transition mt-10"
          >
            <span class="text-2xl">+</span>
            Add Project
          </button>
        </div>
        {projects.length !== 0 && (
          <ul class="m-6">
            {projects.map((data) => (
                <button key={data.title} onClick={() => activeProject(data)} class={`w-full text-left text-white text-lg px-4 py-2 rounded-md transition-colors duration-200 ${activeButton === data.title ? "bg-white/20" : "bg-transparent hover:bg-white/10" }`}>
                  {data.title}
                </button>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
