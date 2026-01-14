import { useState } from "react";
import AddProject from "./components/AddProject";
import NoContent from "./components/Content";
import SideBar from "./components/SideBar";
import ProjectContent from "./components/ProjectContent";

function App() {
  const [isAddProjectActive, setIsAddProjectActive] = useState(false);
  const [projects, setProjects] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (entry) => {
    // console.log("Button clicked is ", entry.title);
    setActiveButton(entry.title);
    setIsAddProjectActive(false);
    // console.log("event is ", event.target);
  };

  const save = (newData) => {
    setProjects((prev) => [...prev, newData]);
    setActiveButton(null);
  };
  const handleChange = (active) => {
    setIsAddProjectActive(active);
    setActiveButton(null);
  };

  const handleDelete = (itemRemove) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.filter(
        (project) => project.title !== itemRemove
      );
      return updatedProjects;
    });
  };

  console.log("active button",activeButton, !activeButton);

  return (
    <>
      <SideBar
        isAdd={handleChange}
        projects={projects}
        activeProject={handleClick}
        activeButton={activeButton}
      />
      {!activeButton && isAddProjectActive && (
        <AddProject isAdd={handleChange} onSave={save} />
      )}
      {!activeButton && !isAddProjectActive && (
        <NoContent isAdd={handleChange} />
      )}
      {activeButton && (
        <ProjectContent Projects={projects} activeButton={activeButton} onDelete={handleDelete}/>
      )}
    </>
  );
}

export default App;
