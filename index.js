const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Book titles and authors come from my book tracker.
// The genres are simplified into four categories.
const books = [
  {
    "id": 1,
    "title": "On Earth We're Briefly Gorgeous",
    "author": "Ocean Vuong",
    "genre": "Fiction"
  },
  {
    "id": 2,
    "title": "Dawn (Xenogenesis, Book 1)",
    "author": "Octavia E. Butler",
    "genre": "Sci-Fi"
  },
  {
    "id": 3,
    "title": "Freshwater",
    "author": "Akwaeke Emezi",
    "genre": "Fiction"
  },
  {
    "id": 4,
    "title": "Gods of Jade and Shadow",
    "author": "Silvia Moreno-Garcia",
    "genre": "Fantasy"
  },
  {
    "id": 5,
    "title": "Detransition, Baby",
    "author": "Torrey Peters",
    "genre": "Fiction"
  },
  {
    "id": 6,
    "title": "Radical Dharma",
    "author": "Rev. angel Kyodo williams & Lama Rod Owens",
    "genre": "Self-Help"
  },
  {
    "id": 7,
    "title": "The Midnight Library",
    "author": "Matt Haig",
    "genre": "Fiction"
  },
  {
    "id": 8,
    "title": "Circe",
    "author": "Madeline Miller",
    "genre": "Fantasy"
  },
  {
    "id": 9,
    "title": "You Are a Badass",
    "author": "Jen Sincero",
    "genre": "Self-Help"
  },
  {
    "id": 10,
    "title": "Pleasure Activism",
    "author": "adrienne maree brown",
    "genre": "Self-Help"
  },
  {
    "id": 11,
    "title": "A Court of Thorns and Roses",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 12,
    "title": "A Court of Mist and Fury",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 13,
    "title": "A Court of Wings and Ruin",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 14,
    "title": "A Court of Frost and Starlight",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 15,
    "title": "A Court of Silver Flames",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 16,
    "title": "A Court of Thorns and Roses (Dramatized Adaptation)",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 17,
    "title": "The Broken Kingdoms",
    "author": "N. K. Jemisin",
    "genre": "Fantasy"
  },
  {
    "id": 18,
    "title": "The Kingdom of Gods",
    "author": "N. K. Jemisin",
    "genre": "Fantasy"
  },
  {
    "id": 19,
    "title": "A Deadly Education",
    "author": "Naomi Novik",
    "genre": "Fantasy"
  },
  {
    "id": 20,
    "title": "The Last Graduate",
    "author": "Naomi Novik",
    "genre": "Fantasy"
  },
  {
    "id": 21,
    "title": "The Golden Enclaves",
    "author": "Naomi Novik",
    "genre": "Fantasy"
  },
  {
    "id": 22,
    "title": "How to Stop Time",
    "author": "Matt Haig",
    "genre": "Fantasy"
  },
  {
    "id": 23,
    "title": "The Hundred Thousand Kingdoms",
    "author": "N. K. Jemisin",
    "genre": "Fantasy"
  },
  {
    "id": 24,
    "title": "Woman, Eating",
    "author": "Claire Kohda",
    "genre": "Fantasy"
  },
  {
    "id": 25,
    "title": "Mythos",
    "author": "Stephen Fry",
    "genre": "Fantasy"
  },
  {
    "id": 26,
    "title": "Confessions of a Forty-Something F**k Up",
    "author": "Alexandra Potter",
    "genre": "Fiction"
  },
  {
    "id": 27,
    "title": "Black Leopard, Red Wolf",
    "author": "Marlon James",
    "genre": "Fantasy"
  },
  {
    "id": 28,
    "title": "Moon Witch, Spider King",
    "author": "Marlon James",
    "genre": "Fantasy"
  },
  {
    "id": 29,
    "title": "Lessons in Chemistry",
    "author": "Bonnie Garmus",
    "genre": "Fiction"
  },
  {
    "id": 30,
    "title": "The Killing Moon",
    "author": "N. K. Jemisin",
    "genre": "Fantasy"
  },
  {
    "id": 31,
    "title": "The Shadowed Sun",
    "author": "N. K. Jemisin",
    "genre": "Fantasy"
  },
  {
    "id": 32,
    "title": "Wishes Fulfilled",
    "author": "Dr. Wayne W. Dyer",
    "genre": "Self-Help"
  },
  {
    "id": 33,
    "title": "The Inheritance of Orquídea Divina",
    "author": "Zoraida Cordova",
    "genre": "Fantasy"
  },
  {
    "id": 34,
    "title": "Attached",
    "author": "Amir Levine, M.D. & Rachel Heller",
    "genre": "Self-Help"
  },
  {
    "id": 35,
    "title": "The Invisible Life of Addie LaRue",
    "author": "V. E. Schwab",
    "genre": "Fantasy"
  },
  {
    "id": 36,
    "title": "The Assassin's Blade",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 37,
    "title": "Throne of Glass",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 38,
    "title": "Crown of Midnight",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 39,
    "title": "Heir of Fire",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 40,
    "title": "Queen of Shadows",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 41,
    "title": "Empire of Storms",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 42,
    "title": "Tower of Dawn",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 43,
    "title": "Kingdom of Ash",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 44,
    "title": "The Humans",
    "author": "Matt Haig",
    "genre": "Sci-Fi"
  },
  {
    "id": 45,
    "title": "The Awakened Kingdom",
    "author": "N. K. Jemisin",
    "genre": "Fantasy"
  },
  {
    "id": 46,
    "title": "King of Battle and Blood",
    "author": "Scarlett St. Clair",
    "genre": "Fantasy"
  },
  {
    "id": 47,
    "title": "Queen of Myth and Monsters",
    "author": "Scarlett St. Clair",
    "genre": "Fantasy"
  },
  {
    "id": 48,
    "title": "House of Earth and Blood (Crescent City, Book 1)",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 49,
    "title": "The Fifth Season",
    "author": "N. K. Jemisin",
    "genre": "Sci-Fi"
  },
  {
    "id": 50,
    "title": "The Obelisk Gate",
    "author": "N. K. Jemisin",
    "genre": "Sci-Fi"
  },
  {
    "id": 51,
    "title": "The Stone Sky",
    "author": "N. K. Jemisin",
    "genre": "Sci-Fi"
  },
  {
    "id": 52,
    "title": "The Art of Letting Go",
    "author": "Damon Zahariades",
    "genre": "Self-Help"
  },
  {
    "id": 53,
    "title": "The Cruel Prince",
    "author": "Holly Black",
    "genre": "Fantasy"
  },
  {
    "id": 54,
    "title": "The Wicked King",
    "author": "Holly Black",
    "genre": "Fantasy"
  },
  {
    "id": 55,
    "title": "The Queen of Nothing",
    "author": "Holly Black",
    "genre": "Fantasy"
  },
  {
    "id": 56,
    "title": "How the King of Elfhame Learned to Hate Stories",
    "author": "Holly Black",
    "genre": "Fantasy"
  },
  {
    "id": 57,
    "title": "Winter Lost",
    "author": "Patricia Briggs",
    "genre": "Fantasy"
  },
  {
    "id": 58,
    "title": "A Throne of Ruin (Deliciously Dark Fairytales, Bk 2)",
    "author": "K.F. Breene",
    "genre": "Fantasy"
  },
  {
    "id": 59,
    "title": "A Ruin of Roses (Deliciously Dark Fairytales, Bk 1)",
    "author": "K.F. Breene",
    "genre": "Fantasy"
  },
  {
    "id": 60,
    "title": "The Promise of Hades",
    "author": "Eliza Raine & Rose Wilson",
    "genre": "Fantasy"
  },
  {
    "id": 61,
    "title": "The Passion of Hades",
    "author": "Eliza Raine & Rose Wilson",
    "genre": "Fantasy"
  },
  {
    "id": 62,
    "title": "The Power of Hades",
    "author": "Eliza Raine & Rose Wilson",
    "genre": "Fantasy"
  },
  {
    "id": 63,
    "title": "House of Sky and Breath",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 64,
    "title": "House of Flame and Shadow",
    "author": "Sarah J. Maas",
    "genre": "Fantasy"
  },
  {
    "id": 65,
    "title": "One Dark Window",
    "author": "Rachel Gillig",
    "genre": "Fantasy"
  },
  {
    "id": 66,
    "title": "Two Twisted Crowns",
    "author": "Rachel Gillig",
    "genre": "Fantasy"
  },
  {
    "id": 67,
    "title": "Storm and Fury",
    "author": "Jennifer L. Armentrout",
    "genre": "Fantasy"
  },
  {
    "id": 68,
    "title": "Rage and Ruin",
    "author": "Jennifer L. Armentrout",
    "genre": "Fantasy"
  },
  {
    "id": 69,
    "title": "Grace and Glory",
    "author": "Jennifer L. Armentrout",
    "genre": "Fantasy"
  },
  {
    "id": 70,
    "title": "Fall of Ruin and Wrath",
    "author": "Jennifer L. Armentrout",
    "genre": "Fantasy"
  },
  {
    "id": 71,
    "title": "Powerless",
    "author": "Lauren Roberts",
    "genre": "Fantasy"
  },
  {
    "id": 72,
    "title": "Reckless",
    "author": "Lauren Roberts",
    "genre": "Fantasy"
  },
  {
    "id": 73,
    "title": "Powerful",
    "author": "Lauren Roberts",
    "genre": "Fantasy"
  },
  {
    "id": 74,
    "title": "Fearless",
    "author": "Lauren Roberts",
    "genre": "Fantasy"
  },
  {
    "id": 75,
    "title": "Kingdom of the Wicked",
    "author": "Kerri Maniscalco",
    "genre": "Fantasy"
  },
  {
    "id": 76,
    "title": "Kingdom of the Cursed",
    "author": "Kerri Maniscalco",
    "genre": "Fantasy"
  },
  {
    "id": 77,
    "title": "Throne of the Fallen",
    "author": "Kerri Maniscalco",
    "genre": "Fantasy"
  },
  {
    "id": 78,
    "title": "Red Queen",
    "author": "Victoria Aveyard",
    "genre": "Fantasy"
  },
  {
    "id": 79,
    "title": "Glass Sword",
    "author": "Victoria Aveyard",
    "genre": "Fantasy"
  },
  {
    "id": 80,
    "title": "King's Cage",
    "author": "Victoria Aveyard",
    "genre": "Fantasy"
  },
  {
    "id": 81,
    "title": "War Storm",
    "author": "Victoria Aveyard",
    "genre": "Fantasy"
  },
  {
    "id": 82,
    "title": "Broken Throne",
    "author": "Victoria Aveyard",
    "genre": "Fantasy"
  },
  {
    "id": 83,
    "title": "Wait for You",
    "author": "Jennifer L. Armentrout & J. L",
    "genre": "Fiction"
  },
  {
    "id": 84,
    "title": "Trust in Me",
    "author": "Jennifer L. Armentrout & J. L",
    "genre": "Fiction"
  },
  {
    "id": 85,
    "title": "Be With Me",
    "author": "Jennifer L. Armentrout & J. L",
    "genre": "Fiction"
  },
  {
    "id": 86,
    "title": "Stay With Me",
    "author": "Jennifer L. Armentrout & J. L",
    "genre": "Fiction"
  },
  {
    "id": 87,
    "title": "Fall With Me",
    "author": "Jennifer L. Armentrout & J. L",
    "genre": "Fiction"
  },
  {
    "id": 88,
    "title": "Spark of the Everflame",
    "author": "Penn Cole",
    "genre": "Fantasy"
  },
  {
    "id": 89,
    "title": "Glow of the Everflame",
    "author": "Penn Cole",
    "genre": "Fantasy"
  },
  {
    "id": 90,
    "title": "Heat of the Everflame",
    "author": "Penn Cole",
    "genre": "Fantasy"
  },
  {
    "id": 91,
    "title": "Burn of the Everflame",
    "author": "Penn Cole",
    "genre": "Fantasy"
  }
];

// Route 1: Serve our HTML homepage.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route 2: Return all books, or filter by a query parameter.
// Example: /data?genre=Fantasy
app.get("/data", (req, res) => {
  const genre = req.query.genre;
  if (!genre) return res.json(books);
  const matchingBooks = books.filter(book =>
    book.genre.toLowerCase() === String(genre).toLowerCase()
  );
  res.json(matchingBooks);
});

// Route 3: Dynamic path parameter. Example: /data/2
app.get("/data/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(book => book.id === id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

app.listen(port, () => {
  console.log(`Digital Bookshelf running at http://localhost:${port}`);
});
