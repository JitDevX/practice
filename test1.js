const users = [
  { name: "Jitendra", role: "Frontend Developer" },
  { name: "Rahul", role: "Backend Developer" },
  { name: "Amit", role: "Designer" }
];

const search = "ra";

const result = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase()) ||
  user.role.toLowerCase().includes(search.toLowerCase())
);

console.log(result);