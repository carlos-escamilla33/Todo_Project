import Todo from "./classes/Todo";
import Project from "./classes/Project";

let listOfProjectsClass = document.getElementsByClassName("projects-list-container");
let addBtn = document.querySelector(".add-img");
let projectFormOpenBtn = document.getElementById("show-form");
let projectFormCloseBtn = document.getElementById("close-form");
let formContainer = document.querySelector(".form-container");


const openProjectForm = () => {
    console.log("opening...");
    document.getElementById("form-overlay").style.display = "flex";
}

const closeProjectForm = () => {
    console.log("closing...");
    document.getElementById("form-overlay").style.display = "none";
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

    return formData;
}

const createProject = (e) => {
    e.preventDefault();

    const projectData = getProjectContents();
    let project = new Project(projectData.name);

    let projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.textContent = `Title: ${project.title}`;

    listOfProjectsClass.appendChild(projectElement);

    closeProjectForm();
}



// addBtn.addEventListener("click", createProject);
projectFormCloseBtn.addEventListener("click", closeProjectForm);
projectFormOpenBtn.addEventListener("click", openProjectForm);
formContainer.addEventListener("submit", createProject);