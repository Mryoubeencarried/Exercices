const users = [
    { name: "Michel", team: 1 },
    { name: "Bob", team: 2 },
    { name: "Marie", team: 3 },
    { name: "Julie", team: 1 },
    { name: "Claire", team: 3 }
];

const teams = users.reduce((teams, user) => {             // Va boucler sur tout le user.                                                         
    const team = teams.find(x => x.team === user.team);   // Regarde dans teams(nouv array) si le team number y est déja
    if (!team) {                                          
        teams.push({ team: user.team, members: [user.name] });  // s'il n'y est pas, ajout la nouvelle pair team, members dans l'array
    }
    // On utilise le fait que team.members est une référence vers l'objet members dans les éléments du tableau
    else {
        team.members.push(user.name);  // s'il y est, ajout le nouveau member dans le team correspondant du teams 
    }
    return teams;  
}, []);
console.log(teams);
/* Valeur attendue :
[ { team: 1, members: [ 'Michel', 'Julie' ] },
  { team: 2, members: [ 'Bob' ] },
  { team: 3, members: [ 'Marie', 'Claire' ] } ]
*/

/**x => x.team === user.team: This is an arrow function that serves as the condition for the find() method. Here’s what it means:

    x represents each element (object) in the teams array as find() iterates through it.
    x.team refers to the team property of the current team object x.
    user.team refers to the team property of the current user being processed in the reduce() loop.
    The expression x.team === user.team checks if the team property of the current team (x.team) is equal to the team property of the current user (user.team).
 */