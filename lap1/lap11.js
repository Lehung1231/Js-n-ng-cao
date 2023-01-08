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
    ]

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
    ]

}
const allPlayers = {
    ...players1 ,
     ...players2,
  
}
const players1Final = JSON.parse(JSON.stringify(players1))
players1Final.fieldPlayers1.push("Thiago","Coutinho","Perisic");
console.log(players1Final);