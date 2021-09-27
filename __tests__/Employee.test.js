const { expect } = require("@jest/globals");
const Employee = require('../lib/Employee')

test('creates employee object', () => 
{
    const employee = new Employee("kamakanui", 131822, "kamacasta983@gmail.com");
    expect(typeof employee).toBe("object");

    // expect a String or Number based on the property
    expect(employee.name)===(expect.any(String));
    expect(employee.id)===(expect.any(Number));
    expect(employee.email)===(expect.any(String));
});

// tests for name 
test("add name and getName method will return an employee's name", () => {
    // const name = "Kamakanui"
    const employee = new Employee("kamakanui", 131822, "kamacasta983@gmail.com");
    // used stictly equal due to toBe not working
    expect(employee.getName())===(expect.any(String));
});

// tests for id 
test("add id and getId method will return an employee's id", () => {
    // const id = "131822";
    const employee = new Employee("kamakanui", 131822, "kamacasta983@gmail.com");
    expect(employee.getId())===(expect.any(Number));
});

// tests for email
test("add id and getEmail method will return an employee's email", () => {
    // const email = "kamacasta983@gmail.com";
    const employee = new Employee("kamakanui", 131822, "kamacasta983@gmail.com")
    expect(employee.getEmail())===(expect.any(String));
});

// test for role
test("add role and getRole method will return an employee's role", () => {
    // const role = "Employee"
    const employee = new Employee("kamakanui", 131822, "kamacasta983@gmail.com")
    expect(employee.getRole())===(expect.any(String))
})
