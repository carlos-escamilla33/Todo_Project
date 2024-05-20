// Importing Error logger class
import ErrorLog from "./Error";

// Todo class

class Todo {
    constructor() {
        this._title = "";
        this._description = "";
        this._dueDate = "";
        this._priority = false;
    }

    // methods

    set title(newTitle) {
        this._title = newTitle;
    }

    get title() {
        return this_title;
    }

    set description(newDes) {
        this._description = newDes;
    }

    get description() {
        return this._description;
    }

    set dueDate(newDueDate) {
        this._dueDate = newDueDate;
    }

    get dueDate() {
        return this._dueDate;
    }

    set priority(newPriority) {
        if (typeof(newPriority) != Boolean) {
            ErrorLog.log("Input is not a boolean type. Input Boolean");
        }
        
        this._priority = newPriority;
    }

    get priority() {
        return this._priority;
    }
}