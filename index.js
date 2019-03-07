let alexa = require("alexa-app");
let app = new alexa.app("palestra");

app.launch((request, response) => {
  response.say("Ciao, benvenuto nella skill palestra. Ti proponiamo una serie di esericizi da fare in casa. Per utilizzare la skill dire: vorrei fare esercizi e specificare subito dopo se sei un utente principiante, intermedio o esperto").send();
})

app.intent("categoria_user", {
  slots:{"categoria":"AMAZON.SearchQuery"},
  utterances: ["{vorrei fare esercizi e sono un {-|categoria}|vorrei fare esercizi e sono un utente {-|categoria}| voglio fare esercizi e sono un utente {-|categoria}| voglio fare esercizi e sono un {-|categoria}| sono un {-|categoria}| sono un utente{-|categoria}| }"]

},(request, response) => {
  let categoria = request.slot("categoria");
  switch (categoria) {
    case "principiante":
      response.say("cardio jumping jacks 3 serie da 30 secondi recupero un minuto, pettorali piegamenti in ginocchio 3 serie da 12 ripetizioni recupero un minuto e mezzo, pettorali piegamenti normali 3 serie da 10 ripetizioni recupero un minuto e mezzo, spalle alzate laterali 3 serie per 10 ripetizioni recupero un minuto e mezzo, addominali crunch 3 serie per 10 ripetizioni recupero un minuto, dorsali e addo plank 3 serie da 30 secondi recupero mezzo minuto, gambe sollevamento gambe 3 serie da 10 ripetizioni recupero un minuto e mezzo, gambe affondi 3 serie per 16 ripetizioni recupero un minuto e mezzo, gambe squat 3 serie da 14 ripetizioni recupero un minuto e mezzo, pettorali e gambe 3 serie da 8 ripetizioni recupero un minuto e mezzo");
      break;
    case "intermedio":
      response.say("cardio jumping jacks 3 serie da 30 secondi recupero 1 minuto, pettorali push up 3 serie per 12 ripetizioni recupero un minuto e mezzo, tricipiti diamond push up 3 serie per 10 ripetizioni recupero un minuto e mezzo, tricipiti triced dip 3 serie da 10 ripetizioni recupero un minuto, pettorali piegamenti incrociati con tocco tra gamba e brccio opposto 3 serie da 12 ripetizioni recupero un minuto e mezzo, addominali mountain climber 3 serie da 20 ripetizioni recupero un minuto, dorsali plank 3 serie da 45 secondi recupero 45 secondi, addominali cruch 3 serie da 12 ripetizioni recupero un minuto, pettorali pike push up 3 serie da 10 ripetizioni recupero un minuto e mezzo, gambe squat 3 serie da 14 ripetizioni recupero un minuto e mezzo, gambe affondi 3 serie da 16 ripetizioni recupero un minuto, pettorali e gambe burpees 3 serie da 8 ripetizioni recupero un minuto e mezzo.");
      break;
    case "esperto":
      response.say("cardio jumping jacks 3 serie da 30 secondi recupero 1 minuto, pettorali push up 3 serie per 12 ripetizioni recupero un minuto, tricipiti diamond push up 3 serie per 10 ripetizioni recupero un minuto, pettorali piegamenti con le gambe sollevate 3 serie da 12 ripetizioni recupero un minuto e mezzo, pettorali pike push up 3 serie da 12 ripetizioni recupero un minuto e mezzo, addominali russian twist 3 serie da 30 ripetizioni recupero un minuto, addominali mountain climber 3 serie da 30 ripetizioni recupero un minuto e mezzo, dorsali plank 3 serie da 45 secondi recupero 45 secondi, dorsali side plank 2 serie da 45 secondi per lato recupero 45 secondi, gambe squat 3 serie da 18 ripetizioni recupero un minuto e mezzo, gambe affondi 3 serie da 16 ripetizioni recupero un minuto, gambe side leg circle 2 serie da 20 secondi per lato recupero un minuto.")
      break;
    default:
      response.say("Per utilizzare la skill dire:  vorrei fare esercizi e specificare subito dopo se sei un utente principiante, intermedio o esperto");
      break;
  }});

app.intent("AMAZON.HelpIntent", {
    utterances: ["{Aiuto|non so cosa fare|cosa posso fare|} "]
},(request, response) => {
    response.say("Per utilizzare la skill dire: vorrei fare esercizi e specificare subito dopo se sei un utente principiante, intermedio o esperto");
});

exports.handler = app.lambda();
if (process.argv[2] === 'schema') {
  console.log(app.schemas.skillBuilder());
  console.log(app.utterances());
}
