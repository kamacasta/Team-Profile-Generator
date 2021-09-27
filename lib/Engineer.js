// Calls the employee information
const Employee = require("./Employee");

// Constructor function for engineer information

class Engineer extends Employee
{
    constructor(name, id, email, github) 
    {
        super(name, id, email);
        this.github;
        this.role = "Engineer"
    }


    // the following gets are gathering the properties listed above

    // gets name
    getName() {
        return this.name;
    }

    // gets Id
    getId() {
        return this.id;
    }

    // gets email
    getEmail() {
        return this.email;
    }

    // gets github
    getGithub() {
        return this.github;
    }

    // gets role
    getRole() {
        return this.role;
    }
}

module.exports = Engineer