import Todo from "./classes/Todo";
import Project from "./classes/Project";

let listOfProjectsClass = document.getElementsByClassName("projects-list-container");

const createProject = (e) => {
    const clickedBtn = e.target;
    const className = clickedBtn.className;

    if (className != "add-img") {
        return;
    }

    let project = new Project();

    
}


document.addEventListener("click", createProject);