import React, { useState, useEffect } from "react";
const initialPersons = [
  { id: 1, name: "Rahul", age: 25, city: "Jaipur" },
  { id: 2, name: "Aman", age: 19, city: "Delhi" },
  { id: 3, name: "Jitendra", age: 22, city: "Mumbai" },
  { id: 4, name: "Rohit", age: 28, city: "Pune" },
  { id: 5, name: "Ankit", age: 20, city: "Delhi" },
  { id: 6, name: "Karan", age: 24, city: "Jaipur" },
];





export default function Array() {
  const [persons, setPersons] = useState(initialPersons);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("oldest");

  const [displayPersons, setDisplayPersons] = useState(persons)

  function searchPerson(person) {
  const keyword = search.toLowerCase().trim();

  return (
    person.name.toLowerCase().includes(keyword) ||
    person.city.toLowerCase().includes(keyword) ||
    person.age.toString().includes(keyword)
  );
}

useEffect(() => {

  let filtered = persons.filter(searchPerson);

  filtered.sort((a, b) => {

    switch (sortBy) {

      case "az":
        return a.name.localeCompare(b.name);

      case "za":
        return b.name.localeCompare(a.name);

      case "ageLow":
        return a.age - b.age;

      case "ageHigh":
        return b.age - a.age;

      case "cityAZ":
        return a.city.localeCompare(b.city);

      case "cityZA":
        return b.city.localeCompare(a.city);

      case "newest":
        return b.id - a.id;

      case "oldest":
        return a.id - b.id;

      default:
        return 0;
    }

  });

  setDisplayPersons(filtered);

}, [persons, search, sortBy]);
  return (
    <div>
        <input
  type="text"
  placeholder="Search..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="oldest">Oldest</option>

  <option value="newest">Newest</option>

  <option value="az">A-Z</option>

  <option value="za">Z-A</option>

  <option value="ageLow">Age Low to High</option>

  <option value="ageHigh">Age High to Low</option>

  <option value="cityAZ">City A-Z</option>

  <option value="cityZA">City Z-A</option>

</select>
{displayPersons.map((person) => (

  <div key={person.id}>

    <h3>{person.name}</h3>

    <p>{person.age}</p>

    <p>{person.city}</p>

  </div>

))}

    </div>
  )
}
