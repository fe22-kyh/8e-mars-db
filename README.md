# 8e Mars

## Live-kod

[Live coding examples](live-coding/)


## Material
Du förväntas inte kunna använda MongoDB i terminalen, men rekommenderar att ni ser igenom från början då han diskuterar DB mer allmänt i början. Javascript börjar i asvnitt #15.
- [MongoDB - Complete guide](https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA)

Observera, The Net Ninja användare module.export, detta är detsamma som att i en module använda export nyckelordet.
```js
module.exports = { foo: () => { ... } }
/* samma som */
export function foo() { ... }
``` 

## Övning (Gäller även för fredagen)
Efter videon ovan så bör ni kunna utöka hamsterwars med en MongoDB som kan spara hamstrarna och deras röster i en databas. För att undvika att samma användare röstar flera gånger så bör även applikationen kräva att användaren loggar in med ett konto. 

### Level up
Kan du skapa en administratör vy där användaren kan lägga in nya hamstrar i databasen? 

### Level up 2
Kan du låta administratören få en vy över användare och deras röstningar?
Administratören bör även kunna ta bort eller uppdatera användarnas profiler.


