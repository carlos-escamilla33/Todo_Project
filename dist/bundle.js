/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Error.js":
/*!******************************!*\
  !*** ./src/classes/Error.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Error Logger Class \n\nclass ErrorLog {\n    log(message) {\n        console.log(message);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorLog);\n\n//# sourceURL=webpack://todo_project/./src/classes/Error.js?");

/***/ }),

/***/ "./src/classes/Project.js":
/*!********************************!*\
  !*** ./src/classes/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/classes/Todo.js\");\n/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error */ \"./src/classes/Error.js\");\n// importing Todo class\n\n\n\n// Project class\n// Carries all of the todos in an array/list\n\nclass Project {\n    constructor(title = \"\") {\n        this._title = title;\n        this.todos = [];\n        this._length = 0;\n    }\n\n    // methods (getters/setters)\n\n    set title(newTitle) {\n        if (typeof(newTitle) != \"string\") {\n            _Error__WEBPACK_IMPORTED_MODULE_1__[\"default\"].log(\"Input is not a string type. Input string\");\n            return;\n        }\n        this._title = newTitle;\n    }\n\n    get title() {\n        return this._title;\n    }\n\n    get length() {\n        return this._length;\n    }\n\n    // methods (Mutators)\n\n    append(todo) {\n        if (!(todo instanceof _Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n            _Error__WEBPACK_IMPORTED_MODULE_1__[\"default\"].log(\"Argument must be an instance of Todo\");\n        }\n\n        this.todos.push(todo);\n        //bookkeeping\n        this._length += 1;\n    }\n\n    deleteByIdx(todoIdx) {\n        if (todoIdx < 0 || todoIdx >= this._length) {\n           _Error__WEBPACK_IMPORTED_MODULE_1__[\"default\"].log(`${todoIdx} is not in range`);\n           return;\n        }\n\n        this.todos.splice(todoIdx, 1);\n        //bookeeping\n        this._length -= 1;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n\n//# sourceURL=webpack://todo_project/./src/classes/Project.js?");

/***/ }),

/***/ "./src/classes/Todo.js":
/*!*****************************!*\
  !*** ./src/classes/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error */ \"./src/classes/Error.js\");\n// Importing Error logger class\n\n\n// Todo class\n\nclass Todo {\n    constructor(title = \"\", description = \"\",\n     dueDate = \"\") {\n        this._title = title;\n        this._description = description;\n        this._dueDate = dueDate;\n        this._priority = false;\n        this._complete = false;\n    }\n\n    // methods (setters/getters)\n\n    set title(newTitle) {\n        if (typeof(newTitle) != \"string\") {\n            _Error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log(\"Input is not a string type. Input string\");\n            return;\n        }\n        this._title = newTitle;\n    }\n\n    get title() {\n        return this._title;\n    }\n\n    set description(newDes) {\n        if (typeof(newDes) != \"string\") {\n            _Error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log(\"Input is not a string type. Input string\");\n            return;\n        }\n        this._description = newDes;\n    }\n\n    get description() {\n        return this._description;\n    }\n\n    set dueDate(newDueDate) {\n        if (typeof(newDueDate) != \"string\") {\n            _Error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log(\"Input is not a string type. Input string\");\n            return;\n        }\n        this._dueDate = newDueDate;\n    }\n\n    get dueDate() {\n        return this._dueDate;\n    }\n\n    set priority(newPriority) {\n        if (typeof(newPriority) != \"boolean\") {\n            _Error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log(\"Input is not a boolean type. Input Boolean\");\n            return;\n        }\n\n        this._priority = newPriority;\n    }\n\n    get priority() {\n        return this._priority;\n    }\n\n    set complete(newComplete) {\n        if (typeof(newComplete) != \"boolean\") {\n            _Error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log(\"Input is not a boolean type. Input Boolean\");\n            return;\n        }\n\n        this._complete = newComplete;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo_project/./src/classes/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Todo */ \"./src/classes/Todo.js\");\n/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Project */ \"./src/classes/Project.js\");\n\n\n\nlet projectsDiv = document.querySelector(\".projects-list-container\");\nlet projectFormOpenBtn = document.getElementById(\"show-form\");\nlet projectFormCloseBtn = document.getElementById(\"close-form\");\nlet formContainer = document.querySelector(\".form-container\");\nlet todosContainer = document.querySelector(\".todos-container\");\nlet projectsArr = [];\nlet currProject;\n\n// console.log(projectsArr[0].getAttribute(\"data-id\"));\n\nconst openProjectForm = () => {\n    console.log(\"opening...\");\n    document.getElementById(\"form-overlay\").style.display = \"flex\";\n}\n\nconst closeProjectForm = () => {\n    console.log(\"closing...\");\n    document.getElementById(\"form-overlay\").style.display = \"none\";\n    formContainer.reset();\n}\n\nconst getProjectContents = () => {\n\n    let form = document.querySelector(\".form-container\");\n    const formData = {};\n\n    for (let element of form.elements) {\n        if (element.tagName.toLowerCase() === \"button\") {\n            continue;\n        }\n\n        formData[element.name] = element.value;\n    }\n\n    formContainer.reset();\n\n    return formData;\n}\n\nconst createProject = (e) => {\n    e.preventDefault();\n\n    const projectData = getProjectContents();\n\n    if (projectData.name == \"\") {\n        return;\n    }\n\n    let project = new _classes_Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectData.name);\n\n    let projectElement = document.createElement('div');\n    projectElement.className = 'project-card';\n    projectElement.textContent = `# ${project.title}`;\n\n    //update project id to next value\n    projectsArr.push(project);\n    projectElement.setAttribute(\"data-id\", projectsArr.length - 1);\n\n    projectsDiv.appendChild(projectElement);\n\n    closeProjectForm();\n}\n\nconst showTodos = (project) => {\n    // display projects todos\n    console.log(project.todos);\n    // createTodos(project);\n\n}\n\n// event listener on add btn\nconst createProjectHeader = (project) => {\n    let todoDiv = document.createElement(\"div\");\n    let title = document.createElement(\"h1\");\n    let createTodoBtn = document.createElement(\"button\");\n\n    createTodoBtn.classList.add(\"create-todo-btn\");\n\n    title.textContent = project.title;\n    createTodoBtn.textContent = \"Add Todo\";\n\n    todoDiv.appendChild(title);\n    todoDiv.appendChild(createTodoBtn);\n\n    todosContainer.appendChild(todoDiv);\n}\n\nconst selectProject = (e) => {\n    if (e.target.classList.contains(\"project-card\")) {\n        currProject = projectsArr[e.target.getAttribute(\"data-id\")];\n        console.log(currProject);\n        createProjectHeader(currProject);\n        showTodos(currProject);\n    }\n}\n\n\n\n// addBtn.addEventListener(\"click\", createProject);\nprojectFormCloseBtn.addEventListener(\"click\", closeProjectForm);\nprojectFormOpenBtn.addEventListener(\"click\", openProjectForm);\nformContainer.addEventListener(\"submit\", createProject);\nprojectsDiv.addEventListener(\"click\", selectProject);\n\n//# sourceURL=webpack://todo_project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;