const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Eri', 22, 'eri@example.com', 'Monsters University');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school', () => {
    const intern = new Intern('Lewis', 23, 'lewis@example.com', 'Magic University');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

test('get intern role', () => {
    const intern = new Intern('Rebecca', 44, 'rebecca@example.com', 'Magic University');

    expect(intern.getRole()).toBe('Intern');
})