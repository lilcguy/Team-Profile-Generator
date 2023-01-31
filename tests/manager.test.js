const employee = require('../lib/employee');
const Manager = require('../lib/manager');



describe('Manager', () => {
    describe('Initialization', () => {
        it("Should create a new Manager object if provided valid arguments", () => {
            
            const manager = new Manager("Derek", 1, "the@mail.com", 1);

            expect(manager.name).toEqual("Derek");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("the@mail.com");
            expect(manager.officeNumber).toEqual(1);
            expect(manager.role).toEqual("Manager");
        });
    })
})