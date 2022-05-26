const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];




console.log("Here are the contractors with a birthyear between 1970 and 1980 :")  
var result = entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= (1970) && entrepreneurs.year <= (1980));
console.log(result);


console.log("************************************************************************")

 
console.log("Here are the first and last name of every contractors in the array :")
let name = []
entrepreneurs.forEach((i) => {
    let firstAndLast = (i.first + " " + i.last);
    name.push(firstAndLast);
});

console.log(name);
// console.log(entrepreneurs.map(i => i.first + " " + i.last));

console.log("************************************************************************")

console.log("How old would be every contractor today ?")
entrepreneurs.forEach((i) => {
    let ageToday = 2022 - i.year;
    console.log(`${i.first + " " + i.last} would be ${ageToday}y.o today ! :`);
});
// entrepreneurs.map(i => console.log(i.first + " " + i.last + " would be " + (2020 - i.year) + " y.o today !"));

console.log("************************************************************************")

console.log("Here is the list of the contractors by last name alphabetic order :")
console.log(entrepreneurs.sort((a, b) => a.last.toLowerCase().localeCompare(b.last.toLowerCase())));