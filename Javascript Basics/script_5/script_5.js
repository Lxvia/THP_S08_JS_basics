const books = [
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

console.log("Do all the books have been borowed at least once ?") 
console.log(books.every(book => book.rented > 1) ? "- Every books have been borowed at least once." : "- At east one book hasn't been borowed");

console.log("************************************************************************")

console.log("Wich book is the most borowed ?")
function mostRented(array) {
    const rented = books.map(el => el.rented)
    max = Math.max(...rented)
    let result = array.find(obj => obj.rented === max);
    return result.title;
  
}
console.log(mostRented(books));

console.log("************************************************************************")

console.log("Wich book is the least borowed ?")
function leastRented(array) {
    const rented = books.map(el => el.rented)
    min = Math.min(...rented)
    let result = array.find(obj => obj.rented === min);
    return result.title;
}

console.log(leastRented(books));

console.log("************************************************************************")

var result = books.find(book => book.id == 873495).title;
console.log(`The book with the ID 87395 is ${result}`);

console.log("************************************************************************")

console.log("Delete the book with the ID 133712 :") 
var deleteID = books.filter(book => book.id != 133712);
console.log(deleteID);

console.log("************************************************************************")

console.log("Show array by alphabetic order without book n°133712 :")
var newArray = books.filter(book => book.id != 133712);
var result = newArray.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
console.log(result);