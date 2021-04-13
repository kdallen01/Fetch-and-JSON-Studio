// TODO: add code here

window.addEventListener('load', function() {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            for(let index = 0; index < json.length; index++) {
                let astronaut = document.createElement("div");
                astronaut.innerHTML = `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${json[index].firstName} ${json[index].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[index].hoursInSpace}</li>
                            <li id="Active">Active: ${json[index].active}</li>
                            <li>Skills: ${json[index].skills}</li>
                        </ul>
                        </div>
                        <img class="avatar" src=${json[index].picture}></img>
                    </div>
                `;
                document.body.appendChild(astronaut);
            }
            //Start to Number of Astronauts - Do Not Delete
            const sum = document.createElement("div");
            sum.innerHTML = `
            <h3>Number of Astronauts: ${json.length}</h3>
            `;
            document.body.appendChild(sum);
            //End of number of Astronauts
            });
        });
    });