class Human {
    constructor() {
        this._gender = "male";
    }

    get gender() {
        return this._gender;
    } 

    set gender(gender) {
        this._gender = gender;
    }
}

export default Human;