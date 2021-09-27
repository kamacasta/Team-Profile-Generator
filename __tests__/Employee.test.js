const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js")

test('creates employee object', () => 
{
    const employee = new Employee("kamakanui", 131822, "kamacasta983@gmail.com");
    expect(typeof employee).toBe("object");

    // expect a String or Number based on the property
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// tests for name 
test("add name and getName method will return an employee's name", () => {
   
    // const name = "Kamakanui"
    const employee = new Employee("kamakanui", 131822, "kamacasta983@gmail.com");
    expect(employee.getName()).toBe(expect.any(String));
})

// tests for id 
test("add id and getId method will return an employee's id", () => {
    
    // const id = "131822";
    const employee = new Employee("kamakanui", 131822, "kamacasta983@gmail.com");
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getId()).toEqual(id);
})


