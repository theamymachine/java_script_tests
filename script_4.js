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

console.log("Quels entrepreneurs sont nés dans les années 70? \n Les voici :");
    entrepreneurs.forEach((birth) => {
        if (birth.year >= 1970 && birth.year < 1980){
        console.log(birth.first + " " + birth.last);
    }
    });
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs :");
    let name =[];
    entrepreneurs.forEach((scrap) => {
        fullname = (scrap.first + " " + scrap.last);
        name.push(fullname);
    });
console.log(name);
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
    entrepreneurs.forEach((birth) => {
        ageNow = 2020 - birth.year;
        console.log(`${birth.first + " " + birth.last} = ${ageNow}ans`)
    });

console.log("Trier par ordre alphabetique");
console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));

