const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer.js');

test ('create engineer object', () => {
    const engineer = new Engineer('Garrett', 22, 'garrett@example.com', 'big-guy-29');

    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github account', () => {
    const engineer = new Engineer('Raven', 4, 'raven@example.com', 'bird-man');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('get engineer role', () => {
    const engineer = new Engineer('Ryan', 5, 'ryan@example.com', 'spell-man');

    expect(engineer.getRole()).toBe('Engineer');
})