import Todo from "./classes/Todo";
import Project from "./classes/Project";

let projectsDiv = document.querySelector(".projects-list-container");
let projectFormOpenBtn = document.getElementById("show-form");
let projectFormCloseBtn = document.getElementById("close-form");
let formContainer = document.querySelector(".form-container");
let projectsArr = [];
let currProject;

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

    //update project id to next value
    projectsArr.push(project);
    projectElement.setAttribute("data-id", projectsArr.length - 1);

    projectsDiv.appendChild(projectElement);

    closeProjectForm();
}

const showTodos = (project) => {
    // display projects todos
    // project._todos
}

const selectProject = (e) => {
    if (e.target.classList.contains("project-card")) {
        currProject = projectsArr[e.target.getAttribute("data-id")];
        showTodos(project);
    }
}



// addBtn.addEventListener("click", createProject);
projectFormCloseBtn.addEventListener("click", closeProjectForm);
projectFormOpenBtn.addEventListener("click", openProjectForm);
formContainer.addEventListener("submit", createProject);
projectsDiv.addEventListener("click", selectProject);