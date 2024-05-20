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
}