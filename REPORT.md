# 📌 Rättningsrapport – fed24d-the-last-todos-JanisSeibutis

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Tfc19Mhg)
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar på skärmen och markeras som klar i javascript-listan.
- Ni behöver använda localStorage så att listan inte börjar om från början varje gång sidan används.
- Ni behöver använda er av en komponent.
- Ni behöver använda er av state med en lista med objekt.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk, t.ex. tailwind eller material ui.
- Ni behöver ha minst tre komponenter.
- Ni måste använda Lifting State Up.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för VG, inklusive krav från G, med tydlig hantering av todo-objekt, användning av komponenter, state management och tailwind CSS-styling. Komponenterna tillhandahåller funktionaliteter som att lägga till, toggla och sortera todos, och lyfta upp staten används effektivt.

💡 **Förbättringsförslag:**  
Även om koden fungerar bra, finns det några mindre förbättringar som kan göras: 1) Lägg till mer dokumentation och kommentarer i koden för att förbättra läsbarheten och förståelsen. 2) Fundera på att hantera eventuell felhantering mer robust, till exempel vid JSON-parsing. 3) Separera logiken av komponenterna mer för ökad kodåteranvändning. Inga större strukturella förändringar behövs.