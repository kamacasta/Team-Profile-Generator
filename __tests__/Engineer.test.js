const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('create engineer object', () => {
    const engineer = new Engineer("name", 131822, "email", "kamacasta@github.io");
    expect(typeof engineer).toBe("object")

    // expect a String or Number based on the property
    expect(engineer.name)===(expect.any(String));
    expect(engineer.id)===(expect.any(Number));
    expect(engineer.email)===(expect.any(String));
    expect(engineer.github)===(expect.any(String));
   
})

// tests for name 
test("add name and getName method will return an employee's name", () => {
    // const name = "Kamakanui"
    const engineer = new Engineer("kamakanui", 131822, "kamacasta983@gmail.com");
    // used stictly equal due to toBe not working
    expect(engineer.getName())===(expect.any(String));
});

// tests for id 
test("add id and getId method will return an engineer's id", () => {
    // const id = "131822";
    const engineer = new Engineer("kamakanui", 131822, "kamacasta983@gmail.com");
    expect(engineer.getId())===(expect.any(Number));
});

// tests for email
test("add id and getEmail method will return an engineer's email", () => {
    // const email = "kamacasta983@gmail.com";
    const engineer = new Engineer("kamakanui", 131822, "kamacasta983@gmail.com")
    expect(engineer.getEmail())===(expect.any(String));
});

// test for github
test("add github and getGithub method will return an engineer's github", () => {
    // const github = "kamacasta@github.io
    const engineer = new Engineer("kamakanui", 131822, "kamacasta983@gmail.com")
    expect(engineer.getGithub())===(expect.any(String))
})
 

// test for role
test("add role and getRole method will return an engineer's role", () => {
    const engineer = new Engineer("kamakanui", 131822, "kamacasta983@gmail.com")
    expect(engineer.getRole())===(expect.any(String))
})


