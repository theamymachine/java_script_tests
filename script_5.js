let books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?");
  books.forEach((rentNumber) =>{
    if(rentNumber.rented > 0) {
      console.log("Oui");}
    else {
      console.log("Non");}
  });

console.log("Quel est le livre le plus emprunté ?");
let sortedBooks = books.sort((a, b) => b.rented - a.rented);
let maxRented = sortedBooks[0];
console.log('Le livre le plus emprunté est :', maxRented);

console.log("Quel est le livre le moins emprunté ?");
let sortedBooksreverse = books.sort((a, b) => b.rented + a.rented);
let leastRented = sortedBooksreverse[0];
console.log('Le livre le moins emprunté est :', leastRented);

console.log('Trouve le livre avec l\'id 873495');
let book = books.find(o => o.id === 873495);
console.log(book, books);

console.log('Supprime le livre avec l\'id 133712');
let booktrash = books.find(o => o.id === 133712);
i = booktrash.index;
books.splice(i,1);
console.log(booktrash, 'a été supprimé');
console.log(books);

console.log("Trier par ordre alphabetique");
console.log(books.sort((a, b) => a.title.localeCompare(b.title)));
