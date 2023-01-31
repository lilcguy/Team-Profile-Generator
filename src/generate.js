/* 

*/
//question: how can these function see this array?


//export
//module.exports = generate;
function managerSection(managerArray) {
    //console.log(managerArray); //check if receiving information correctly
        let managerSection = "";
        

     for (let i=0; i<managerArray.length; i++) {
        managerSection += `
        <div>
            <h1>${managerArray[i].name}</h1>
            <h2>${managerArray[i].role}</h2>
            <h2>ID: ${managerArray[i].id}</h2>
            <p> <a href="mailto: ${managerArray[i].email}">Email: ${managerArray[i].email}</a> </p>
            <p>Office Number: ${managerArray[i].officeNumber}</p>

        </div>
            
            
        `
            
    }

    return managerSection;
    
//loops through and breaks down array and serves up html
}


function engineerSection(engineerArray) {
//for each engineer
let engineerSection = "";
//console.log(engineerArray);

for (let i=0; i<engineerArray.length; i++) {
    //console.log(engineerArray[i].name); //THIS IS WORKING!!!!!!
    engineerSection += `
    <div>
        <h1>${engineerArray[i].name}</h1>
        <h2>${engineerArray[i].role}</h2>
        <h2>ID: ${engineerArray[i].id}</h2>
        <p> <a href="mailto: ${engineerArray[i].email}">Email: ${engineerArray[i].email}</a> </p>
        <a href="https://github.com/${engineerArray[i].github}">GitHub: ${engineerArray[i].github}</a>

    </div>
    
    `
    
}
return engineerSection;
}


function internSection(internArray) {
let internSection = "";

for (let i=0; i<internArray.length; i++) {
    internSection += `
    <div>
        <h1>${internArray[i].name}</h1>
        <h2>${internArray[i].role}</h2>
        <h2>ID: ${internArray[i].id}</h2>
        <p> <a href="mailto: ${internArray[i].email}">Email: ${internArray[i].email}</a> </p>
        <p>School: ${internArray[i].school}</p>

    </div>
        
        
    `
        
}
return internSection;
}


module.exports = function (managerArray, engineerArray, internArray) { 
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>My Team</header>
    
        <div id="Team Members">
    
                <div id="team-manager-div">
                ${managerSection(managerArray)} 
                
            
            <div>
    
                <div id="engineer-div">
                ${engineerSection(engineerArray)}

            </div>
    
                <div id="intern-div">
                ${internSection(internArray)}
            </div>
    
        </div>
        
    
        <script src="./index.js"></script>
    </body>
    </html>
    `
};

//${}