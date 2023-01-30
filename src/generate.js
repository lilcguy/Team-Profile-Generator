/* 

*/



//export
//module.exports = generate;
function managerSection(managerArray) {
    console.log(managerArray); //check if receiving information correctly
    //let managerProperties = Object.keys(Manager) //get keys from manager object and store it
    //console.log()
        

        for (let i=0; i<managerArray.length; i++) {
            console.log(managerArray[i].name); //referencing the property of the object at index i
            
        }

        return ` `
    
//loops through and breaks down array and serves up html
}


function engineerSection(engineerArray){
//for each engineer
console.log(engineerArray);

for (let i=0; i<engineerArray.length; i++) {
    console.log(engineerArray[i].name); //THIS IS WORKING!!!!!!
    return `
    <div>
     <h1>${engineerArray[i].name}</h1>

    </div>
    
    
    `
    
}
}


function internSection(){

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
    
        <div id="Team Members"></div>
    
                <div id="team-manager-div">
                ${managerSection(managerArray)} 
                
            
            </div>
    
                <div id="engineer-div">
                ${engineerSection(engineerArray)}

            </div>
    
                <div id="intern-div">
            
            </div>
    
    </div>
        
    
        <script src="./index.js"></script>
    </body>
    </html>
    `
};

//${}