const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');


describe('Engineer', () => {
    describe('Initialization', () => {
        it("Should create a new Engineer object if provided valid arguments", () => {
            
            const engineer = new Engineer("Derek", 1, "the@mail.com", "donutman");

            expect(engineer.name).toEqual("Derek");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("the@mail.com");
            expect(engineer.github).toEqual("donutman");
            expect(engineer.role).toEqual("Engineer");
        });
    })
})