import Todo from "./classes/Todo";
import Project from "./classes/Project";

let listOfProjectsClass = document.getElementsByClassName("projects-list-container");

let defaultTodo = new Todo("Get Food", "Check peoples bins for food", "Today");

defaultTodo.title = "NOT MORE FOOD";

console.log(defaultTodo.title);

