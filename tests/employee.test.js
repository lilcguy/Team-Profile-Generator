const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("Should create a new Employee object if provided valid arguments", () => {
            
            const employee = new Employee("Derek", 1, "the@mail.com");

            expect(employee.name).toEqual("Derek");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("the@mail.com");
            expect(employee.role).toEqual("Employee");
        });
    })
})