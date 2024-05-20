// Project class
// Carries all of the todos in an array/list

class Project {
    constructor(title = "") {
        this._title = title;
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
}