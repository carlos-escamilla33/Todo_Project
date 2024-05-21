// Importing Error logger class
import ErrorLog from "./Error";

// Todo class

class Todo {
    constructor(title = "", description = "",
     dueDate = "") {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = false;
        this._complete = false;
    }

    // methods (setters/getters)

    set title(newTitle) {
        if (typeof(newTitle) != String) {
            ErrorLog.log("Input is not a string type. Input string");
            return;
        }
        this._title = newTitle;
    }

    get title() {
        return this_title;
    }

    set description(newDes) {
        if (typeof(newDes) != String) {
            ErrorLog.log("Input is not a string type. Input string");
            return;
        }
        this._description = newDes;
    }

    get description() {
        return this._description;
    }

    set dueDate(newDueDate) {
        if (typeof(newDueDate) != String) {
            ErrorLog.log("Input is not a string type. Input string");
            return;
        }
        this._dueDate = newDueDate;
    }

    get dueDate() {
        return this._dueDate;
    }

    set priority(newPriority) {
        if (typeof(newPriority) != Boolean) {
            ErrorLog.log("Input is not a boolean type. Input Boolean");
            return;
        }

        this._priority = newPriority;
    }

    get priority() {
        return this._priority;
    }

    set complete(newComplete) {
        if (typeof(newComplete) != Boolean) {
            ErrorLog.log("Input is not a boolean type. Input Boolean");
            return;
        }

        this._complete = newComplete;
    }
}

export default Todo;