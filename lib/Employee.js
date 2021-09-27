// Constructor function for Employee information
class Employee 
{
    // constructor begins
    constructor(name, id, email) 
    {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }

    // the following gets are gathering the properties listed above

    // gets the name 
    getName() {
        return this.name;
    }

    // gets the id
    getId() {
        return this.id;
    }

    // gets the email
    getEmail() {
        return this.email;
    }

    // gets the role
    getRole() {
        return this.role;
    }
}
module.exports = Employee;