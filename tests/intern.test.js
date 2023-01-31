//test object creation, is an instance of that class,

//test methods within it 
const Employee = require('../lib/employee');
const Intern = require('../lib/intern');



describe('Intern', () => {
    describe('Initialization', () => {
        it("Should create a new Intern object if provided valid arguments", () => {
            
            const intern = new Intern("Derek", 1, "the@mail.com", "Lincoln Center");

            expect(intern.name).toEqual("Derek");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("the@mail.com");
            expect(intern.school).toEqual("Lincoln Center");
        });
    })
})

//styling: bootstrap
//do other tests for each 