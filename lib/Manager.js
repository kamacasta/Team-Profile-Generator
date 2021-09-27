// calls in employee information
const Employee = require("./Employee");

// constructor function for employee/manager

class Manager extends Employee 
{
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber) 
        this.officeNumber = officeNumber;
    }

    // gets office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // gets role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;