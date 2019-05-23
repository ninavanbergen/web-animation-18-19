# web-animation-18-19
🎓 Web Animation · 2018-2019 · Curriculum and Syllabus 

**Omschrijving**

Voor dit vak hadden we de opdracht om een poster te digitaliseren en die elementen te animeren. 
We moesten werken met svg bestanden en met css die bestanden animeren. 
Ik heb voor deze poster gekozen omdat ik meteen ideeën had toen ik die pijlen en sterretjes zag. 

**SVG**

Ik heb als eerst een foto gemaakt van de poster en die in Adobe Illustrator geopend. Daarna tekende ik alle vormen over en maakte ik daar svg's van.
Die heb ik daarna toegevoegd aan mijn mapje en zo in mijn html bestand geplaatst. De achtergrond van de poster heb ik in css gemaakt door middel van een background-color.

**Code**

Ik heb de svg's gestyled met ```display: flex;```, zodat ze naast elkaar kwamen te staan. De sterren hebben een ```position:aboslute;```, omdat die willekeurig op de poster staan. 
Ik heb vooral ```vw``` gebruikt als eenheid, om zo rekening te houden met de viewport width. 

**Animaties**

De body zweeft standaard op de pagina van boven naar benden, hiervoor heb ik een ease-in-out gebruikt, om zo de body realistischer te laten zweven. 
De pijlen worden roze zodra de gebruiker hovert over de pijlen. En zodra de gebruiker klikt op een van de pijlen, dan wordt
de desbetreffende pijl groter, het element krijgt een blauwe kleur en de tekst komt tevoorschijn. Ook draait het element zodra je erop klikt. 
Hieronder de code ervan:

``` 
/* hier maak ik variabelen aan en sla daarin de elementen die ik nodig heb op */
/* hier sla ik alle svg afbeeldingen behalve de sterren in op, querySelectorAll omdat het een array is met meerdere afbeeldingen */
var elementsArray = document.querySelectorAll(".afb");

/* hier selecteer ik de array met de afbeeldingen, en zet daar een for each function op.
Voor elk van deze elementen in die array, wordt er een class toegevoegd zodra er op dat
element wordt geklikt. Hij staat op toggle dat betekend dat je de class ook weer kunt verwijderen */
elementsArray.forEach(function(element) {
  element.addEventListener("click", function(){
    element.classList.toggle('vergroot')
  })
});
```

De sterren draaien standaard heen en terug, daarvoor heb ik een animatie gebruikt met rotate.

```
/* code voor de sterretjes die standaard draaien */
.draaien1, .draaien2, .draaien3, .draaien4, .draaien5, .draaien6, .draaien7, .draaien8, .draaien9, .draaien10, .draaien11, .draaien12, .draaien13 {
		animation: rotation 2s ease-in-out infinite;
}

@keyframes rotation {
		from {
				transform: rotate(0deg);
		}
		to {
				transform: rotate(359deg);
		}
}
```
Zodra je op een van de sterretjes klikt, wordt het sterretje roze en gaat hij even sneller draaien. Dit heb ik gedaan met een addEventListener in javascript.
Hieronder de code:

```
/* hier sla ik alle sterren in op, querySelectorAll omdat het een array is met meerdere sterren */
var sterren = document.querySelectorAll(".ster");

sterren.forEach(function(element) {
  element.addEventListener("click", function(){
    element.classList.toggle("draai")
  })
});
```

Hier maak ik een variabele aan, waarin alle sterren in zijn opgeslagen. Dit is een array dus een lijst met meerdere elementen. 
Daarna maak ik een forEach functie aan, en ik gebruik een addEventListener met een 'click'. Zodra de gebruiker klikt op een van
de sterren op de pagina, wordt er een class aan de desbetreffende ster toegevoegd. Dit heb ik gedaan met een toggle zodat je de class
ook weer kunt verwijderen, dit gebeurt zodra de gebruiker nog een keer klikt op de ster na 1x al geklikt te hebben.

Zodra je op de cijfer 1 tm 6 drukt, gebeurt er ook iets op de pagina. Bij 1 tm 5 zal de achtergrond veranderen van kleur. En bij 6 beweegt de body.
Zodra de gebruiker op spatie drukt zal er een disco achtergrond verschijnen. Al deze functies zijn geschreven met addEventListener en zijn gelinkt 
aan een class via een toggle. Dus zodra de gebruiker nog een keer klikt op dezelfde toets, dan wordt de class weer verwijderd. 

```
/* hier sla ik de body in op */
var bk = document.querySelector("body");

/* hier selecteer ik het document, want ik gebruik de keypress. Als de keycode gelijk is aan 32, dus als er op spatie wordt gedrukt,
dan wordt de class 'kleurtjes' toegevoegd aan de variabele bk, oftewel de body, dit heb ik gedaan voor meerdere toetsen, namelijk 1 tm 6 ook. Bij elk cijfer verandert de achtergrond naar een andere kleur. Alleen bij spatie krijgt de achtergrond een disco. */
document.addEventListener("keypress", function(e){
  if(e.keyCode === 32){
    bk.classList.toggle("kleurtjes")
  }
});
```
De code hierboven heb ik toegepast bij alle toetsen die ik wilde gebruiken. Hierboven is de code van de disco achtergrond.
