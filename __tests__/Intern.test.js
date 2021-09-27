const { expect } = require("@jest/globals");
const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");

    // expect a String or Number based on the property
    expect(intern.name)===(expect.any(String));
    expect(intern.id)===(expect.any(Number));
    expect(intern.email)===(expect.any(String));
    expect(intern.school)===(expect.any(String));
});

// test for school
test("add name and getSchool method will return an intern's school", () => 
{
    const school = "University of Arizona"
    const intern = new Intern("kj", 92480, "kjcasta983@gmail.com", school);

    expect(intern.getSchool())===(school);
})

// test for role
test("add name and getRole method will return an intern's role", () => 
{
    const role = "Intern";
    const intern = new Intern("kj", 92480,"kjcasta983@gmail.com", role)
    expect(intern.getRole()===(role));
})


