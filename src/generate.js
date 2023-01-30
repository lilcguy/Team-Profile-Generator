/* 

*/



//export
//module.exports = generate;
function managerSection(managerArray) {
    console.log(managerArray);
//loops through and breaks down array and serves up html
}


function engineerSection(){
//for each engineer
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