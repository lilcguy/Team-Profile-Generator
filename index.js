const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const fs = require('fs');
const generate = require('./src/generate');
//const { emitWarning } = require('process');


managerArray= [];
engineerArray = [];
internArray = [];


//clear arrays upon activation

//initial team manager prompt.
function addTeamManager() {
    //console.log(JSON.stringify(engineerArray)); //make sure its empty
inquirer 
.prompt([
    {
        type: 'input',
        message: 'Enter the name of the team manager.',
        name: 'manager_name'
    },
    {
        type: 'number',
        message: "Enter the team manager's ID. ",
        name: 'manager_id'
    },
    {
        type: 'input',
        message: "Enter the team manager's email.",
        name: 'manager_email'
    },
    {
        type: 'number',
        message: "Enter the team manager's office number.",
        name: 'office_num'
    }
])
.then( (response) => {
    console.log("Team manager: " + response.manager_name);
    let newManager = new Manager(response.manager_name, response.manager_id, response.manager_email, response.office_num);
    managerArray.push(newManager);
    //push to team manager array
    choicePrompt();
})
}


addTeamManager(); //runs choice prompt on boot up.



//tests are to see if your objects are correct objects..?

function choicePrompt () { //storing here in order to return to choices prompt.
inquirer.prompt([
    {
        type: 'list',
        choices: ['Add Engineer', 'Add an Intern', 'Finish team creation'],
        name: 'choice'
    }
]) .then((response) => {
    if ( response.choice === 'Add Engineer') {
        addEngineer();
    }
    if ( response.choice === 'Add an Intern') {
        addIntern();
    }
    if ( response.choice === 'Finish team creation') {
        populate(managerArray, engineerArray, internArray);
    }
});
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is their name?',
            name: 'engineer_name'
        },
        {
            type: 'number',
            message: 'What is their ID?',
            name: 'engineer_id'

        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'engineer_email'
        },
        {
            type: 'input',
            message: 'What is their github?',
            name: 'engineer_github'
        }
        
    ])
    .then( (response) => {
        console.log("Engineer added.");
        let newEngineer = new Engineer(response.engineer_name, response.engineer_id, response.engineer_email, response.engineer_github);
        //console.log(newEngineer);
        engineerArray.push(newEngineer);
       // console.log("Engineers: " + JSON.stringify(engineerArray, null, " ")
       



        choicePrompt(); //returns to initial choices prompt.
    });

}

function addIntern ()  {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is their name?',
            name: 'intern_name'
        },
        {
            type: 'number',
            message: 'What is their ID?',
            name: 'intern_id'

        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'intern_email'
        },
        {
            type: 'input',
            message: 'What is their school?',
            name: 'intern_school'
        }
    ]).then( (response) => {
        console.log("Intern added.")
        let newIntern = new Intern(response.intern_name, response.intern_id, response.intern_email, response.intern_school);
        internArray.push(newIntern);
        choicePrompt();
    })
}

function populate (managerArray, engineerArray, internArray) {
//loop through each array to populate:
//create html: have template? have a div thats hidden, then create that?
//create div, create 2 headers, one for name and role, 2 <a> for email and github
//createelement
//console.log(managerArray);
//console.log(engineerArray);
//console.log(internArray);

const htmlPageContent = generate(managerArray, engineerArray, internArray);

fs.writeFile('./dist/sampleindex.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );


}


