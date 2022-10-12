const generateManager = (manager) => {
    return `
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">${manager.name}</p>
                                <p class="subtitle is-6">Manager <i class="fa-solid fa-people-roof"></i></p>
                            </div>
                        </div>

                        <div class="content">
                        <p class="id">ID: ${manager.id}</p>
                        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="office">Office Number: ${manager.phone}</p>
                        </div>
                    </div>
                </div>
`
}

const generateEngineer = (engineer) => {
    return `
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">${engineer.name}</p>
                                <p class="subtitle is-6">Engineer <i class="fa-solid fa-gear"></i></p>
                            </div>
                        </div>

                        <div class="content">
                        <p class="id">ID: ${engineer.id}</p>
                        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="office">GitHub Username: <a href="https://github.com/${engineer.github} target="blank">${engineer.github}</a></p>
                        </div>
                    </div>
                </div>
`
}

const generateIntern = (intern) => {
    return `
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">${intern.name}</p>
                                <p class="subtitle is-6">Intern <i class="fa-solid fa-graduation-cap"></i></p>
                            </div>
                        </div>

                        <div class="content">
                        <p class="id">ID: ${intern.id}</p>
                        <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p class="office">School: ${intern.school}</p>
                        </div>
                    </div>
                </div>
`
}

const generateTeam = (data) => {
    // You will need a for loop here, then if statement to get specific role
    // After looping, return array with populated cards.
    let pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee)
            pageArray.push(managerCard)
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee)
            pageArray.push(engineerCard)
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee)
            pageArray.push(internCard)  
        }
    }

    const employeeCards = pageArray.join('')
    const generateCards = generateHTML(employeeCards)
    return generateCards
}

const generateHTML = (employeeCards) => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="./style.css">
        <script src="https://kit.fontawesome.com/0aa93583c3.js" crossorigin="anonymous"></script>
        <title>Document</title>
    </head>
    <body>
        <section class="hero is-primary is-fullheight">
    
            <div class="hero-head"></div>
       
            <div class="hero-body">
              <div class="container has-text-centered">
                <p class="title">
                  The Awesome Company
                </p>
                <p class="subtitle">
                  A Great Place To Work
                </p>
              </div>
            </div>
          
            <div class="hero-foot">
                <div class="container nav">
                  <ul>
                    <li><a href="#the-team">Meet The Team<br><i class="fa-solid fa-chevron-down"></i></a></li>
                  </ul>
                </div>
            </div>
    
        </section>
    
    
        <section class="section is-large">
            <div class="content" id="the-team">
                <h1>Our wonderful team:</h1>
            </div>
            <div class="card-container is-flex is-flex-direction-row is-justify-content-center">
            ${employeeCards}
            </div>
        </section>
    </body>
    </html>`

}

module.exports = generateTeam;