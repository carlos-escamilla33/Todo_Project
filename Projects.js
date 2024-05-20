// importing Todo class
import Todo from "./Todo";
import ErrorLog from "./Error";

// Project class
// Carries all of the todos in an array/list

class Project {
    constructor(title = "", todos = []) {
        this._title = title;
        this._todos = todos;
        this._length = 0;
    }

    // methods

    set title(newTitle) {
        if (typeof(newTitle) != String) {
            ErrorLog.log("Input is not a string type. Input string");
            return;
        }
        this._title = newTitle;
    }

    get title() {
        return this._title;
    }

    get length() {
        return this._length;
    }

    append(todo) {
        if (!(todo instanceof Todo)) {
            ErrorLog.log("Argument must be an instance of Todo");
        }

        this._todos.push(todo);
        //bookkeeping
        this._length += 1;
    }

    deleteByIdx(todoIdx) {
        if (!(todo instanceof Todo)) {
            ErrorLog.log("Argument must be an instance of Todo");
        }

        if (todoIdx < 0 || todoIdx >= this._length) {
           ErrorLog.log(`${todoIdx} is not in range`);
        }

        for (let i = 0; i < this._length; i ++) {
            if (i == todoIdx) {
                this._todos.splice(todoIdx, i);
            }
        }
    }
}

export default Project;