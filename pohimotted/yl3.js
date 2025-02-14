class Student {
    #name;
    #id;
    #status;
    
    constructor(name, id) {
        this.#name = name;
        this.#id = id;
        this.#status = "Active";
    }

    getId() {
        return this.#id;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setStatus(status) {
        this.#status = status;
        const validStatuses = ["Active", "Inactive", "Expelled", "Finished"];
        if (validStatuses.includes(status)) {
            this.#status = status;
        }
    }

    getStatus() {
        return this.#status;
    }
}

const student = new Student("Jane", 1);
console.log(student.getId());
student.setStatus("Inactive");
console.log(student.getStatus());