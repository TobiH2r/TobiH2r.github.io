let examFinished = false;

let questions = [

/* SINGLE CHOICE */

{
type:"single",
q:"2. In welchen Baujahren wurde die Reihe 1044 gebaut?",
answers:["1965–1980","1978–1995","1990–2005","2000–2015"],
correct:[1]
},

{
type:"single",
q:"3. Wie viele Lokomotiven wurden insgesamt gebaut?",
answers:["180","220","257","300"],
correct:[2]
},

{
type:"single",
q:"4. Welche Achsanordnung besitzt die 1144?",
answers:["Co'Co'","Bo'Bo'","A1A-A1A","Bo'Co'"],
correct:[1]
},

{
type:"single",
q:"5. Wie hoch ist die maximale Leistung (~)?",
answers:["3000 kW","3500 kW","4200 kW","6000 kW"],
correct:[2]
},

{
type:"single",
q:"6. Welche Spannung wird verwendet?",
answers:["3 kV Gleichstrom","15 kV 16,7 Hz","25 kV 50 Hz","Diesel-elektrisch"],
correct:[1]
},

{
type:"single",
q:"7. Länge über Puffer?",
answers:["15,2 m","16,4 m","18,0 m","20,0 m"],
correct:[1]
},

{
type:"single",
q:"8. Spurweite?",
answers:["1000 mm","1435 mm","1520 mm","1676 mm"],
correct:[1]
},

{
type:"single",
q:"9. Anfahrzugkraft?",
answers:["200 kN","250 kN","300 kN","350 kN"],
correct:[2]
},

{
type:"single",
q:"10. Schnellste gemessene Geschwindigkeit der 1144 501-3?",
answers:["200 km/h","220 km/h","241,25 km/h","260 km/h"],
correct:[2]
},

{
type:"single",
q:"11. Die 1144 ist ein Umbau der Reihe?",
answers:["1042","1016","1044","1116"],
correct:[2]
},

/* MULTIPLE CHOICE */

{
type:"multi",
q:"12. Welche Hersteller waren beteiligt?",
answers:["SGP","BBC","Siemens","Bombardier"],
correct:[0,1,2]
},

{
type:"multi",
q:"13. Welche Modernisierungen erhielt die 1144?",
answers:["Wendezugsteuerung","GSM-R","PZB 90","Dampfkessel"],
correct:[0,1,2]
},

{
type:"single",
q:"14. Dienstgewicht ungefähr?",
answers:["70 t","80 t","90 t","100 t"],
correct:[1]
},

{
type:"single",
q:"15. Drehgestellachsstand?",
answers:["2500 mm","2600 mm","2800 mm","3000 mm"],
correct:[2]
},

{
type:"single",
q:"16. Gesamtachsstand?",
answers:["8000 mm","8500 mm","9000 mm","9500 mm"],
correct:[2]
},

{
type:"single",
q:"17. Frequenz des Stromsystems?",
answers:["16,7 Hz","25 Hz","50 Hz","60 Hz"],
correct:[0]
},

{
type:"multi",
q:"18. In welchen Bereichen wird die 1144 eingesetzt?",
answers:["Rangierdienst","Personenverkehr","Güterverkehr","Straßenbahnverkehr"],
correct:[0,1,2]
},

{
type:"single",
q:"19. Spitzname aufgrund des Klanges?",
answers:["Eisenschwein","Alpenstaubsauger","Donnerlok","Roter Blitz"],
correct:[1]
},

{
type:"single",
q:"20. Anzahl Achsen?",
answers:["2","4","6","8"],
correct:[1]
},

{
type:"single",
q:"21. Nennleistung laut Datenblatt?",
answers:["2000 kW","3000 kW","4200 kW","5000 kW"],
correct:[1]
},

{
type:"single",
q:"22. Länge in Metern?",
answers:["14,8 m","15,6 m","16,4 m","17,2 m"],
correct:[2]
},

{
type:"single",
q:"23. Ersatz durch welche Lokfamilien?",
answers:["ICE","Railjet","Taurus & Vectron","Cityjet"],
correct:[2]
},

{
type:"multi",
q:"24. Warum wurde sie 'Alpenstaubsauger' genannt?",
answers:["Wegen der Trafo-Lüfter","Wegen der Fahrmotorlüfter","Wegen der Dampfpfeife","Wegen des starken Geräuschs"],
correct:[0,1,3]
},

{
type:"single",
q:"25. Stromabnahme erfolgt über?",
answers:["Dieseltank","Oberleitung","Batterie","Wasserstoff"],
correct:[1]
},

{
type:"single",
q:"26. Umbau brachte welche Lichttechnik?",
answers:["Gaslampen","Halogen","LED","Xenon"],
correct:[2]
},

{
type:"single",
q:"27. Bauart?",
answers:["Diesellok","Elektrische Universallokomotive","Hybridlok","Dampflok"],
correct:[1]
},

{
type:"single",
q:"28. Ursprüngliche Bezeichnung vor Umbau?",
answers:["1142","1044","1016","1216"],
correct:[1]
},

{
type:"single",
q:"29. Max. Geschwindigkeit je nach Version?",
answers:["120 km/h","140–160 km/h","200 km/h","220 km/h"],
correct:[1]
},

{
type:"single",
q:"30. Land des Haupteinsatzes?",
answers:["Deutschland","Schweiz","Österreich","Italien"],
correct:[2]
},

{
type:"single",
q:"31. Anzahl noch im Betrieb ca.?",
answers:["50","100","150","250"],
correct:[2]
}
];

/* RENDER */

const quizDiv=document.getElementById("quiz");

questions.forEach((q,index)=>{
const div=document.createElement("div");
div.className="question";
div.dataset.correct=q.correct.join(",");
div.dataset.type=q.type;

let html=`<h3>${q.q}</h3>`;

q.answers.forEach((a,i)=>{
let inputType = q.type==="multi" ? "checkbox" : "radio";
html+=`<p><input type="${inputType}" name="q${index+2}" value="${i}"> ${a}</p>`;
});

div.innerHTML=html;
quizDiv.appendChild(div);
});


/* AUSWERTUNG */

function finishExam(){

if(examFinished) return;
examFinished=true;

let score=0;
const allQuestions=document.querySelectorAll(".question");

allQuestions.forEach(q=>{

const correct=q.dataset.correct.split(",");
const inputs=[...q.querySelectorAll("input")];
const selected=inputs.filter(i=>i.checked).map(i=>i.value);

if(JSON.stringify(correct)===JSON.stringify(selected)){
score++;
q.classList.add("correct");
}else{
q.classList.add("wrong");
}

/* Richtige Lösungen anzeigen */
inputs.forEach(i=>{
if(correct.includes(i.value)){
i.parentElement.style.fontWeight="bold";
i.parentElement.style.color="green";
}
});

});

const total=allQuestions.length;
const percent=Math.round(score/total*100);

document.getElementById("result").innerText=
`Ergebnis: ${score} / ${total} (${percent}%)`;

}