# <a name="spelen"></a>Spelen

## Doel
Krijg je robot als eerste bij de vlag.
De vier teams kiezen elke beurt drie commando's voor hun robot.
Deze voert ze vervolgens stap voor stap uit.

-----

## Materiaal

* 4 robothoofden
* 4x5 instructieblokken
* speelveld

-----

## Voorbereiding

* Leg het speelveld uit
* Kleed de robots aan

<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
  <img src="{{site.baseurl}}/images/robot_stap1.svg" width="1000px" class="img-responsive"/>
</div>
<div class="col-xs-6 col-md-4">
  <img src="{{site.baseurl}}/images/robot_stap2.svg" width="1000px" class="img-responsive"/>
</div>
</div>


* Robots gaan op hun startplaats staan
* Elk team verzamelt zich bij hun robot

-----

## Spelverloop

Elke beurt laden de teams eerst de batterijen van hun robot op.
Daarna kiest elk team vijf instructies voor hun robot.
De robots voeren telkens "tegelijk" een commando uit.
Na elke instructie bewegen de lopende banden en draaischijven op het speelveld ook.

### Robot opladen

Helaas gaan de batterijen van de robots heel snel leeg.
Ze hebben net genoeg stroom om vijf instructies uit te voeren.
Elke beurt moeten de robots dus eerst opgeladen worden.
Het is aan de spelleider om te vertellen hoe dat moet gebeuren.
Misschien moet je een rondje hardlopen of een handstand maken.

### Instructies kiezen

* Beslis met het team welke commando's de robot moet gaan uitvoeren
* Maak een toren van de vijf instructieblokken
* Draai ze zo dat de spelleider ze goed kan zien

<blockquote>
<h3>Instructies</h3>
<div class="row">
  <div class="col-xs-3">
    <div class="thumbnail">
      <img src="{{site.baseurl}}/images/instructies/vooruit.svg" width="1000px" class="img-responsive" style="padding: 10px;"/>
    </div>
  </div>
  <div class="col-xs-9">
    <svg class="example" x-grid="-,-,-,-" x-robot-1="1,0,EAST 2,0,EAST"></svg>
  </div>
</div>
<div class="row">
  <div class="col-xs-3">
    <div class="thumbnail">
      <img src="{{site.baseurl}}/images/instructies/vooruit-x2.svg" width="1000px" class="img-responsive" style="padding: 10px;"/>
    </div>
  </div>
  <div class="col-xs-9">
    <svg class="example" x-grid="-,-,-,-" x-robot-1="1,0,EAST 3,0,EAST"></svg>
  </div>
</div>
<div class="row">
  <div class="col-xs-3">
    <div class="thumbnail">
      <img src="{{site.baseurl}}/images/instructies/achteruit.svg" width="1000px" class="img-responsive" style="padding: 10px;"/>
    </div>
  </div>
  <div class="col-xs-9">
    <svg class="example" x-grid="-,-,-,-" x-robot-1="1,0,EAST 0,0,EAST"></svg>
  </div>
</div>
<div class="row">
  <div class="col-xs-3">
    <div class="thumbnail">
      <img src="{{site.baseurl}}/images/instructies/rechtsom.svg" width="1000px" class="img-responsive" style="padding: 10px;"/>
    </div>
  </div>
  <div class="col-xs-9">
    <svg class="example" x-grid="-,-,-,-" x-robot-1="1,0,EAST 1,0,SOUTH"></svg>
  </div>
</div>
<div class="row">
  <div class="col-xs-3">
    <div class="thumbnail">
      <img src="{{site.baseurl}}/images/instructies/linksom.svg" width="1000px" class="img-responsive" style="padding: 10px;"/>
    </div>
  </div>
  <div class="col-xs-9">
    <svg class="example" x-grid="-,-,-,-" x-robot-1="1,0,EAST 1,0,NORTH"></svg>
  </div>
</div>
<div class="row">
  <div class="col-xs-3">
    <div class="thumbnail">
      <img src="{{site.baseurl}}/images/instructies/halfom.svg" width="1000px" class="img-responsive" style="padding: 10px;"/>
    </div>
  </div>
  <div class="col-xs-9">
    <svg class="example" x-grid="-,-,-,-" x-robot-1="1,0,EAST 1,0,WEST"></svg>
  </div>
</div>
</blockquote>

### Instructies uitvoeren

Het uitvoeren van de instructies gebeurt in vijf stappen.
Elke stap bestaat weer uit twee fases:

1. Robots bewegen
2. Omgeving beweegt

#### Fase 1: Robots

Elke stap pakt elk team de bovenste instructie van de stapel.
Robot 1 voert als eerste haar instructie uit,
daarna Robot 2, daarna Robot 3 en tot slot Robot 4.

Bij het bewegen geldt dat robots:

* niet door muren kunnen lopen;
* andere robots voor zich uit duwen;

<svg class="example" x-grid="-,-,-,-" x-robot-1="0,0,EAST 1,0,EAST 2,0,EAST" x-robot-2="2,0,NORTH 2,0,NORTH 3,0,NORTH"></svg>

* andere robots niet door muren heen kunnen duwen.

<svg class="example" x-grid="-,-,-,❎" x-robot-1="0,0,EAST 1,0,EAST 1,0,EAST" x-robot-2="2,0,NORTH 2,0,NORTH 2,0,NORTH"></svg>


#### Fase 2: Omgeving

<div class="row">
  <div class="col-xs-6 col-md-4">
    {% include element.html element="lopendeband" %}
  </div>
</div>

Robots die op een lopende band staan worden 1 tegel opgeschoven,
in de richting van de pijl.
De lopende band is niet sterk genoeg om andere robots weg te duwen.

<div class="row">
  <div class="col-xs-6 col-md-4">
    {% include element.html element="draaischijf-links" %}
  </div>
  <div class="col-xs-6 col-md-4">
    {% include element.html element="draaischijf-rechts" %}
  </div>
</div>
Robots die op een draaischijf staan worden een kwartslag gedraaid in de richting van de pijlen. 

-----

## Einde
Wanneer de eerste robot de vlag bereikt heeft dat team gewonnen en is het spel voorbij.

