const initialPersons = [
  { id: 1, name: "Rahul", age: 25, city: "Jaipur" },
  { id: 2, name: "Aman", age: 19, city: "Delhi" },
  { id: 3, name: "Jitendra", age: 22, city: "Mumbai" },
  { id: 4, name: "Rohit", age: 28, city: "Pune" },
  { id: 5, name: "Ankit", age: 20, city: "Delhi" },
  { id: 6, name: "Karan", age: 24, city: "Jaipur" },
];


// map()
const names = initialPersons.map(person => person.name);

console.log(names);


// search 
const result = initialPersons.filter(person => person.city === "Delhi");

console.log(result);

// sort Age low → high
const sorted = [...initialPersons].sort(
  (a, b) => a.age - b.age
);

// serahing all fildes
const keyword = "2";

const resultSerach = initialPersons.filter(person =>
  person.name.toLowerCase().includes(keyword.toLowerCase()) ||
  person.city.toLowerCase().includes(keyword.toLowerCase()) ||
  person.age.toString().includes(keyword)
);


// groupdata 
const groupdata = {};
initialPersons.forEach(persone => {
    if(!groupdata [persone.city]){
        groupdata[persone.city] = []
    }
    groupdata[persone.city].push(persone)

})

console.log(groupdata)

// another mathod use reduce 
const groupedByCity = initialPersons.reduce((groups, person) => {
  if (!groups[person.city]) {
    groups[person.city] = [];
  }

  groups[person.city].push(person);

  return groups;
}, {});

console.log(groupedByCity);