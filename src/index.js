import Todo from "./classes/Todo";
import Project from "./classes/Project";

let projectsDiv = document.querySelector(".projects-list-container");
let projectFormOpenBtn = document.getElementById("show-form");
let projectFormCloseBtn = document.getElementById("close-form");
let formContainer = document.querySelector(".form-container");
let projectIdx = 0;

// console.log(projectsArr[0].getAttribute("data-id"));

const openProjectForm = () => {
    console.log("opening...");
    document.getElementById("form-overlay").style.display = "flex";
}

const closeProjectForm = () => {
    console.log("closing...");
    document.getElementById("form-overlay").style.display = "none";
    formContainer.reset();
}

const getProjectContents = () => {

    let form = document.querySelector(".form-container");
    const formData = {};

    for (let element of form.elements) {
        if (element.tagName.toLowerCase() === "button") {
            continue;
        }

        formData[element.name] = element.value;
    }

    formContainer.reset();

    return formData;
}

const createProject = (e) => {
    e.preventDefault();

    const projectData = getProjectContents();

    if (projectData.name == "") {
        return;
    }

    let project = new Project(projectData.name);

    let projectElement = document.createElement('div');
    projectElement.className = 'project-card';
    projectElement.textContent = `# ${project.title}`;
    projectElement.setAttribute("data-id", projectIdx);

    //update project id to next value
    projectIdx += 1;

    projectsDiv.appendChild(projectElement);

    closeProjectForm();
}

const showTodos = (e) => {
    if (e.target.classList.contains("project-card")) {
        console.log("clicked on a project card");
    }
}



// addBtn.addEventListener("click", createProject);
projectFormCloseBtn.addEventListener("click", closeProjectForm);
projectFormOpenBtn.addEventListener("click", openProjectForm);
formContainer.addEventListener("submit", createProject);
projectsDiv.addEventListener("click", showTodos);