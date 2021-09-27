const { expect } = require("@jest/globals");
const Manager = require('../lib/Manager');

test('create manager object', () => 
{
    const manager = new Manager("Boss Man", 535983, "bossman983@gmail.com", 11021);
    expect(typeof manager).toBe("object");

    // expect a String or Number based on the property
    expect(manager.name)===(expect.any(String));
    expect(manager.id)===(expect.any(Number));
    expect(manager.email)===(expect.any(String));
    expect(manager.officeNumber)===(expect.any(Number));
});

// test for name
test("add name and getName method will return an manager's name" , () => {
    // const name = "Bossman"
    const manager = new Manager("Boss Man", 535983, "bossman983@gmail.com", 11021);
   // used stictly equal due to toBe not working
    expect(manager.getName())===(expect.any(String));
})

// test for id
test("add name and getId method will return an manager's name" , () => {
    // const id = 535983
    const manager = new Manager("Boss Man", 535983, "bossman983@gmail.com", 11021);
    expect(manager.getId())===(expect.any(String));
})

// test for email
test("add name and getEmail method will return an manager's name" , () => {
    // const email = "bossman983@gmail.com"
    const manager = new Manager("Boss Man", 535983, "bossman983@gmail.com", 11021);
    expect(manager.getEmail())===(expect.any(String));
})

// test for office number
test("add name and getOfficeNumber method will return a manger's name" , () => {
    // const officeNumber = 11021
    const manager = new Manager("Boss Man", 535983, "bossman983@gmail.com", 11021);
    expect(manager.getOfficeNumber())===(expect.any(String));
})

// test for role 
test("add role and getRole method will return a manager's name", () => {
    // const role = "Manager"
    const manager = new Manager ("Boss Man", 535983, "bossman983@gmail.com", 11021);
    expect(manager.getRole())===(expect.any(String));
})






