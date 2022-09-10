import Human from "./human";

class Person extends Human {
    constructor() {
        super(); // must call constructor here
        this._name = "Fred";
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

export default Person;