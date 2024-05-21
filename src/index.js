import Todo from "./classes/Todo";
import Project from "./classes/Project";

let listOfProjectsClass = document.getElementsByClassName("projects-list-container");
let addBtn = document.querySelector(".add-img");
let projectFormOpenBtn = document.getElementById("show-form");
let projectFormCloseBtn = document.getElementById("close-form");


const openProjectForm = () => {
    console.log("opening...");
    document.getElementById("form-overlay").style.display = "flex";
}

const closeProjectForm = () => {
    console.log("closing...");
    document.getElementById("form-overlay").style.display = "none";
}

const createProject = (e) => {
    const clickedBtn = e.target;
    const className = clickedBtn.className;

    let project = new Project();

    
}



addBtn.addEventListener("click", createProject);
projectFormCloseBtn.addEventListener("click", closeProjectForm);
projectFormOpenBtn.addEventListener("click", openProjectForm);