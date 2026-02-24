let examFinished = false;

let questions = [



{
type:"single",
q:"1. Welchen Spitznamen trägt die ÖBB 1144?",
answers:["Roter Brummer","Alpenstaubsauger","Knödelpresse","Eisenschwein"],
correct:[1]
},
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
answers:["15 kv 60Hz","15 kV 16,7 Hz","25 kV 50 Hz","50 kV 60 Hz"],
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
q:"8.Wie groß ist die Spurweite?",
answers:["1000 mm","1435 mm","1520 mm","1676 mm"],
correct:[1]
},

{
type:"single",
q:"9.  Wie hoch ist die Anfahrzugkraft?",
answers:["200 kN","250 kN","300 kN","350 kN"],
correct:[2]
},

{
type:"single",
q:"10.Wie hoch ist die schnellste gemessene Geschwindigkeit der 1144 501-3?",
answers:["515,3 km/h","256,38 km/h","241,25 km/h","357 km/h"],
correct:[2]
},

{
type:"single",
q:"11. Die 1144 ist der Umbau welcher Reihe?",
answers:["1042","1016","1044","1016"],
correct:[2]
},



{
type:"multi",
q:"12. Welche Hersteller waren beteiligt?",
answers:["SGP","BBC","Siemens","Bombardier"],
correct:[0,1,2]
},

{
type:"multi",
q:"13. Welche Modernisierungen erhielt die 1144?",
answers:["Wendezugsteuerung","GSM-R","PZB 90","Mittelpufferkupplung"],
correct:[0,1,2]
},

{
type:"single",
q:"14. Wie hoch ist das ungefähre Dienstgewicht?",
answers:["70 t","80 t","90 t","100 t"],
correct:[1]
},

{
type:"single",
q:"15.Wie groß ist der Drehgestellachsstand?",
answers:["2500 mm","2600 mm","2800 mm","3000 mm"],
correct:[2]
},

{
type:"single",
q:"16.Wie groß ist der Gesamtachsstand?",
answers:["8000 mm","8500 mm","9000 mm","9500 mm"],
correct:[2]
},

{
type:"single",
q:"17. Wie hoch ist die Frequenz des Stromnetzes?",
answers:["16,7 Hz","25 Hz","50 Hz","60 Hz"],
correct:[0]
},

{
type:"multi",
q:"18. In welchen Bereichen wird die 1144 eingesetzt?",
answers:["Rangierdienst","Personenverkehr","Güterverkehr","ETCS Level 2 Hochgeschwindigkeitsstrecken"],
correct:[0,1,2]
},

{
type:"single",
q:"19. Welche Spitznamen bekam sie aufgrund ihres besonderen Klanges?",
answers:["Donnerlok","Alpenstaubsauger","Sumsi","Roter Brummer"],
correct:[1,2]
},

{
type:"single",
q:"20. Wie viele Achsen hat diese Baureihe?",
answers:["2","4","6","8"],
correct:[1]
},

{
type:"single",
q:"21. Wie hoch ist die Nennleistung der Lok?",
answers:["2000 kW","3000 kW","4200 kW","5000 kW"],
correct:[1]
},

{
type:"single",
q:"22. Wie lang ist sie?",
answers:["14,8 m","15,6 m","16,4 m","17,2 m"],
correct:[2]
},

{
type:"multi",
q:"23. Durch welche Fahrzeugfamilien wird der Alpenstaubsauger ersetzt?",
answers:["Desiro","Stadler Kiss","Taurus","Vectron","Talent"],
correct:[2,3]
},

{
type:"multi",
q:"24. Warum wird sie 'Alpenstaubsauger' genannt?",
answers:["Wegen der Trafolüfter","Wegen der Fahrmotorlüfter","Wegen dem Makrofon","Wegen des starken Geräuschs"],
correct:[0,1,3]
},

{
type:"single",
q:"25. Woher bezieht sie ihre Energie?",
answers:["Dieselmotor","Oberleitung","Akku","Wasserstoffzelle"],
correct:[1]
},

{
type:"single",
q:"26.  Der umbau zur 1144 brachte welche Lichttechnik?",
answers:["Glühbirnen","Halogen","LED","Xenon"],
correct:[2]
},

{
type:"single",
q:"27.Welche Art von Lok ist die 1144?",
answers:["Diesellok","Elektrolok ","Hybridlok","Dampflok"],
correct:[1]
},

{
type:"single",
q:"28. Wie hieß sie vor dem Umbau?",
answers:["1142","1044","1016","1014"],
correct:[1]
},

{
type:"single",
q:"29.Wie hoch ist die max. Geschwindigkeit je nach Version?",
answers:["120-140 km/h","140–160 km/h","200-220 km/h","220-240 km/h"],
correct:[1]
},

{
type:"single",
q:"30. In welchem Land wird sie hauptsächlich eingesetzt?",
answers:["Deutschland","Schweiz","Österreich","Italien"],
correct:[2]
},

{
type:"single",
q:"31. Wie viele 1144er sind noch im Betrieb?",
answers:["50","100","150","250"],
correct:[2]
}
];



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