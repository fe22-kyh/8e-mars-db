# 8e Mars

## Live-kod

[Live coding examples](live-coding/)


## Material
Du förväntas inte kunna använda MongoDB i terminalen, men rekommenderar att ni ser igenom från början då han diskuterar DB mer allmänt i början. Javascript börjar i asvnitt #15.
- [MongoDB - Complete guide (indexering är utanför kursens innehåll så detta kan ni skippa)](https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA)

Observera, The Net Ninja användare module.export, detta är detsamma som att i en module använda export nyckelordet.
```js
module.exports = { foo: () => { ... } }
/* samma som */
export function foo() { ... }
``` 

Observera även att The Net Ninja använder en lokal databas, vilket är ok, men på fredag så kommer vi att använda en extern databas vid namn MongoDB Atlas. Principerna är detsamma, samt metoderna som används för att läsa, lagra, uppdatera och ta bort data kommer att användas på samma sätt, men addressen som används för att ansluta till databasen kommer att se annorlunda ut.

## Övning (Vi sysslar med dessa även på fredag, går igenom kort demo på eftermiddagen)
Efter videon ovan så bör ni kunna utöka hamsterwars med en enklare MongoDB som kan spara hamstrarna och deras röster i en databas. För att undvika att samma användare röstar flera gånger så bör även applikationen kräva att användaren loggar in med ett konto. 

### Level up
Kan du skapa en administratör vy där användaren kan lägga in nya hamstrar i databasen? 

### Level up 2
Kan du låta administratören få en vy över användare och deras röstningar?
Administratören bör även kunna ta bort eller uppdatera användarnas profiler.


