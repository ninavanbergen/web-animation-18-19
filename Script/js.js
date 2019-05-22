/* hier maak ik variabelen aan en sla daarin de elementen die ik nodig heb op */
/* hier sla ik alle svg afbeeldingen behalve de sterren in op, querySelectorAll omdat het een array is met meerdere afbeeldingen */
var elementsArray = document.querySelectorAll(".afb");
/* hier sla ik alle sterren in op, querySelectorAll omdat het een array is met meerdere sterren */
var sterren = document.querySelectorAll(".ster");
/* hier sla ik de body in op */
var bk = document.querySelector("body");

/* hier selecteer ik de array met de afbeeldingen, en zet daar een for each function op.
Voor elk van deze elementen in die array, wordt er een class toegevoegd zodra er op dat
element wordt geklikt. Hij staat op toggle dat betekend dat je de class ook weer kunt verwijderen */
elementsArray.forEach(function(element) {
  element.addEventListener("click", function(){
    element.classList.toggle('vergroot')
  })
});

sterren.forEach(function(element) {
  element.addEventListener("click", function(){
    element.classList.toggle("draai")
  })
});

/* hier selecteer ik het document, want ik gebruik de keypress. Als de keycode gelijk is aan 32, dus als er op spatie wordt gedrukt,
dan wordt de class 'kleurtjes' toegevoegd aan de variabele bk, oftewel de body, dit heb ik gedaan voor meerdere toetsen, namelijk 1 tm 6 ook. Bij elk cijfer verandert de achtergrond naar een andere kleur. Alleen bij spatie krijgt de achtergrond een disco. */
document.addEventListener("keypress", function(e){
  if(e.keyCode === 32){
    bk.classList.toggle("kleurtjes")
  }
});

document.addEventListener("keypress", function(e){
  if(e.keyCode === 49){
    bk.classList.toggle("kleurrood")
  }
});

document.addEventListener("keypress", function(e){
  if(e.keyCode === 50){
    bk.classList.toggle("kleurblauw")
  }
});

document.addEventListener("keypress", function(e){
  if(e.keyCode === 51){
    bk.classList.toggle("kleurpink")
  }
});

document.addEventListener("keypress", function(e){
  if(e.keyCode === 52){
    bk.classList.toggle("kleurgroen")
  }
});

document.addEventListener("keypress", function(e){
  if(e.keyCode === 53){
    bk.classList.toggle("kleurpaars")
  }
});

document.addEventListener("keypress", function(e){
  if(e.keyCode === 54){
    bk.classList.toggle("bonkt")
  }
});
