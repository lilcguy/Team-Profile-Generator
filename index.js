const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
//const { emitWarning } = require('process');


managerArray= [];
engineerArray = [];
iternArray = [];


//clear arrays upon activation

//initial team manager prompts.

inquirer 
.prompt([
    {
        type: 'input',
        message: 'Enter the name of the team manager.',
        name: 'manager_name'
    },
    {
        type: 'input',
        message: "Enter the team manager's ID. ",
        name: 'manager_id'
    },
    {
        type: 'input',
        message: "Enter the team manager's email.",
        name: 'manager_email'
    },
    {
        type: 'input',
        message: "Enter the team manager's office number.",
        name: 'office_num'
    }
])
.then( (response) => {
    console.log("Team manager: " + response.manager_name);
    choicePrompt();
})


//onStart(); //runs choice prompt on boot up.



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
        populate();
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
        //github?
    ])
    .then( (response) => {
        console.log("Engineer added.");
        let newEngineer = new Engineer(response.engineer_name, response.engineer_id, response.engineer_email, response.engineer_github);
        console.log(newEngineer);
        engineerArray.push(newEngineer);
        console.log("Engineers: " + engineerArray);


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
    ]).then( () => {
        console.log("Intern added.")
        choicePrompt();
    })
}

function populate () {

}


//e = github
// i = school