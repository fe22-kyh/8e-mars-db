import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import url from 'url';

/* configure file and work dir */
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* configure server parameters */
const app = express();
const addr = "127.0.0.1";
const port = 9090;
const db = { hamsters: [] };

/* configure mustache template */
app.engine("html", mustache()); // kör html med mustache
app.set('view engine', 'html'); //använd html extension
app.set('views', __dirname + "/views"); //leta efter vyer i mappen views

/* configure static server files and encodings */
//ta med filer från public mappen
app.use(express.static("public"));
app.use(express.urlencoded());

/* init database values */
db.hamsters = [
  { name: "Golden hamster", imgRef: "goldhamster.jpg", id: "524dfa" },
  { name: "Cucumber eating hamster", imgRef: "hamster_cucumber.jpg", id: "adsklm" },
  { name: "Hamster in grass", imgRef: "hamster_grass.jpg", id: "12m3123" },
  { name: "Hamster in tree", imgRef: "hamster_tree.jpg", id: "sdalkdm543" },
  { name: "Hamster in wheel", imgRef: "hamster_wheel.jpg", id: "ldksmf123as" },
];

/* helper functions */
const randomIndex = (list) => Math.floor(Math.random() * list.length);

function incrementScore(hamster) {
  if (hamster.score == undefined) {
    hamster.score = 0;
  }

  hamster.score = hamster.score + 1;
}

/* server routing */
app.get("/hamsterwars", (request, response) => {

  const hamsterPair = [
    db.hamsters[randomIndex(db.hamsters)],
    db.hamsters[randomIndex(db.hamsters)]
  ];

  //render använder den angivna templat engine:n (mustache i detta fall)
  response.render("hamster", { hamsters: hamsterPair });
});

app.post("/vote", (request, response) => {
  const votedId = request.body.hamsterId;
  const hamster = db.hamsters.find(hamster => hamster.id == votedId); //hittar första hamstern med samma id

  incrementScore(hamster);

  response.redirect("/hamsterwars");
});

app.get("/scoreboard", (request, response) => {
  response.render("scoreboard", { hamsters: db.hamsters });
})


/* startup the server */
app.listen(port, addr, () => {
  console.log(`Server initialized on addr ${addr}`);
  console.log(`Port ${port} is used for server traffic`);
});