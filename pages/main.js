
const customerDataList =[
  {
    "name": "Rahul 1",
    "age": 19,
    "city": "Jaipur"
  },
  {
    "name": "Aman 2",
    "age": 20,
    "city": "jaipur"
  },
  {
    "name": "Rohit 3",
    "age": 21,
    "city": "jaipur"
  },
  {
    "name": "Vikas 4",
    "age": 22,
    "city": "Pune"
  },
  {
    "name": "Neha 5",
    "age": 23,
    "city": "pune"
  },
  {
    "name": "Priya 6",
    "age": 24,
    "city": "Hyderabad"
  },
  {
    "name": "Ankit 7",
    "age": 25,
    "city": "Chennai"
  },
  {
    "name": "Sneha 8",
    "age": 26,
    "city": "Kolkata"
  }
]


function sortByCity(a, b) {
  return a.city.localeCompare(b.city);
}

const sortedData = [...customerDataList].sort(sortByCity);

console.log(sortedData);