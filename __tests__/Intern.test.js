const { expect } = require("@jest/globals");
const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");

    expect(engineer.name)===(expect.any(String));
    expect(engineer.id)===(expect.any(Number));
    expect(engineer.email)===(expect.any(String));
    expect(engineer.school)===(expect.any(String));
});


