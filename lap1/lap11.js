const players1 = {
    gk1 : "Bayern Munich One" ,
    fieldPlayers1 : [
          "Cầu thủ 1.1",
           "Cầu thủ 1.2",
           "Cầu thủ 1.3",
          "Cầu thủ 1.4",
           "Cầu thủ 1.5",
          "Cầu thủ 1.6",
           "Cầu thủ 1.7",
           "Cầu thủ 1.8",
          "Cầu thủ 1.9",
         "Cầu thủ 1.10"  ,
    ],
    scored1 : [
        "Cầu thủ 1.1",
        "Cầu thủ 1.2",
        "Cầu thủ 1.3",
    ],
}
const players2 = {
    gk2 : "Bayern Munich Two" ,
    fieldPlayers2 : [
          "Cầu thủ 2.1",
         "Cầu thủ 2.2",
          "Cầu thủ 2.3",
           "Cầu thủ 2.4",
           "Cầu thủ 2.5",
          "Cầu thủ 2.6",
           "Cầu thủ 2.7",
         "Cầu thủ 2.8",
        "Cầu thủ 2.9",
          "Cầu thủ 2.10"  ,
    ],
     scored2 : [
        "Cầu thủ 2.1",
        "Cầu thủ 2.2",
     ],
}
const allPlayers = {
    ...players1 ,
     ...players2,
  
}
const players1Final = JSON.parse(JSON.stringify(players1))
players1Final.fieldPlayers1.push("Thiago","Coutinho","Perisic");

const game = {
   odds :{
    team1 :3.25,
    draw : 3.25,
    team2 : 3.25,
   } 
}
const{odds:{team1 , draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function() {
   console.log(`${players1.scored1.length} bàn đội 1 đã ghi bàn là ${players1.scored1} `);
   console.log(`${players2.scored2.length} bàn đội 2 đã ghi bàn là ${players2.scored2} `);
}

printGoals(players1.scored1,players2.scored2);

team1 < team2 && console.log("Team 1 thua team 2!");
team1 > team2 && console.log("Team 1 thắng team 2!");
team1 == team2 && console.log("Team 1 hòa team 2!");

