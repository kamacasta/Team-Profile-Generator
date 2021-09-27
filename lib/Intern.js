// calls the employee information
const Employee = require("./Employee")

// Constructor for intern information
class intern extends Employee {
    constructor(name, id, email, school) 
    {
        super(name, id, email);
        this.school = school;
    }

    // gets school 
    getSchool() {
        return this.school;
    }


    // gets role
    getRole() {
        return 'Intern';
    }
    
}