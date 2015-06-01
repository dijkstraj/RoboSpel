---
layout: default
title: spelen
---

## Doel
Krijg je robot als eerste bij de vlag.
De vier teams kiezen elke beurt drie commando's voor hun robot.
Deze voert ze vervolgens stap voor stap uit.

## Materiaal

* robotkostuums
* tegels
* pen en papier

## Voorbereiding

* Leg het speelveld uit
* Robots gaan in de hoek staan
* Elk team verzamelt zich bij hun robot

## Spelverloop

Elke beurt kiest elk team drie commando's voor hun robot.
De robots voeren telkens "tegelijk" een commando uit.
Na elk commando bewegen de lopende banden op het speelveld ook.

### Commando's kiezen

* Pak drie vellen papier
* Schrijf op elk vel een commando, je kunt kiezen uit:
    * ↑ 1 tegel vooruit

    <svg class="example" x-grid="-,-,-,-" x-robot-1="0,0,EAST 1,0,EAST"></svg>

    * ↟ 2 tegels vooruit

    <svg class="example" x-grid="-,-,-,-" x-robot-1="0,0,EAST 2,0,EAST"></svg>

    * ↶ kwartslag linksom

    <svg class="example" x-grid="-,-,-,-" x-robot-1="0,0,EAST 0,0,NORTH"></svg>

    * ↷ kwartslag rechtsom

    <svg class="example" x-grid="-,-,-,-" x-robot-1="0,0,EAST 0,0,SOUTH"></svg>

* Geef de gekozen commando's aan de robot

### Commando's uitvoeren

Het uitvoeren van de commando's gebeurt in drie stappen.
Elke stap bestaat weer uit twee fases.

1. Robots bewegen
2. Omgeving beweegt

#### Fase 1: Robots
Elke robot pakt het eerstvolgende commando van de stapel.
Robot 1 voert als eerste haar commando uit,
daarna Robot 2, daarna Robot 3 en tot slot Robot 4.
Het papier met het uitgevoerde commando wordt geshredderd.

Bij het bewegen geldt dat robots:

* niet door muren kunnen lopen;
* andere robots voor zich uit duwen;

<svg class="example" x-grid="-,-,-,-" x-robot-1="0,0,EAST 1,0,EAST 2,0,EAST" x-robot-2="2,0,NORTH 2,0,NORTH 3,0,NORTH"></svg>

* andere robots niet door muren heen kunnen duwen.

<svg class="example" x-grid="-,-,-,-" x-robot-1="0,0,EAST 1,0,EAST 1,0,EAST" x-robot-2="2,0,NORTH 2,0,NORTH 2,0,NORTH"></svg>


#### Fase 2: Omgeving
Robots die op een lopende band staan worden 1 tegel opgeschoven,
in de richting van de pijl.
De lopende band is niet sterk genoeg om andere robots weg te duwen.

## Einde
Wanneer de eerste robot de vlag bereikt heeft dat team gewonnen en is het spel voorbij.