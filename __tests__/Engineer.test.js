const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('create engineer object', () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object")

    // expect a String or Number based on the property
    expect(employee.github)===(expect.any(String));
    expect(employee.role)===(expect.any(String));
})


