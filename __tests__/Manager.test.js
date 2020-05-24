const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

test('create a manager object', () => {
    const manager = new Manager('Petra', 11, 'petra@example.com', 104);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
})

test('get the role of a manager', () => {
    const manager = new Manager('Selena', 17, 'selena@example.com', 105);

    expect(manager.getRole()).toBe('Manager');
})