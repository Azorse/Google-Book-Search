const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googleBookSearch"
);

const bookSeed = [
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    thumbnail: "http://books.google.com/books/content?id=Ojqi8KbWuLwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    href: "http://books.google.com/books?id=Ojqi8KbWuLwC&printsec=frontcover&dq=enders&hl=&cd=1&source=gbs_api",
    description:
      "Winner of the Hugo and Nebula Awards In order to develop a secure defense against a hostile alien race's next attack, government agencies breed child geniuses and train them as soldiers. A brilliant young boy, Andrew 'Ender' Wiggin lives with his kind but distant parents, his sadistic brother Peter, and the person he loves more than anyone else, his sister Valentine. Peter and Valentine were candidates for the soldier-training program but didn't make the cut—young Ender is the Wiggin drafted to the orbiting Battle School for rigorous military training. Ender's skills make him a leader in school and respected in the Battle Room, where children play at mock battles in zero gravity. Yet growing up in an artificial community of young soldiers Ender suffers greatly from isolation, rivalry from his peers, pressure from the adult teachers, and an unsettling fear of the alien invaders. His psychological battles include loneliness, fear that he is becoming like the cruel brother he remembers, and fanning the flames of devotion to his beloved sister. Is Ender the general Earth needs? But Ender is not the only result of the genetic experiments. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway for almost as long. Ender's two older siblings are every bit as unusual as he is, but in very different ways. Between the three of them lie the abilities to remake a world. If, that is, the world survives. Ender's Game is the winner of the 1985 Nebula Award for Best Novel and the 1986 Hugo Award for Best Novel. THE ENDER UNIVERSE Ender series Ender’s Game / Ender in Exile / Speaker for the Dead / Xenocide / Children of the Mind Ender’s Shadow series Ender’s Shadow / Shadow of the Hegemon / Shadow Puppets / Shadow of the Giant / Shadows in Flight Children of the Fleet The First Formic War (with Aaron Johnston) Earth Unaware / Earth Afire / Earth Awakens The Second Formic War (with Aaron Johnston) The Swarm /The Hive Ender novellas A War of Gifts /First Meetings At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
    date: new Date(Date.now())
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    thumbnail: "http://books.google.com/books/content?id=BcG2dVRXKukC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    href: "http://books.google.com/books?id=BcG2dVRXKukC&dq=the+name+of+the+wind&hl=&cd=1&source=gbs_api",
    description:"'I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep. My name is Kvothe. You may have heard of me' So begins the tale of Kvothe - currently known as Kote, the unassuming innkeepter - from his childhood in a troupe of traveling players, through his years spent as a near-feral orphan in a crime-riddled city, to his daringly brazen yet successful bid to enter a difficult and dangerous school of magic. In these pages you will come to know Kvothe the notorious magician, the accomplished thief, the masterful musician, the dragon-slayer, the legend-hunter, the lover, the thief and the infamous assassin. The Name of the Wind is fantasy at its very best, and an astounding must-read title.",
    date: new Date(Date.now())
  }
];


db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
