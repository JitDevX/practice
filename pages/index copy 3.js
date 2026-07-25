import React, { useEffect, useState } from "react";
import studentsData from "../students_500.json";
export default function index() {
  const [students] = useState(studentsData);

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "age") {
      return a.age - b.age;
    }

    return 0;
  });
  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Student"
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Select</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>
      {sortedStudents.map((student) => (
        <div key={student.id}>
          {student.name} - {student.age}
        </div>
      ))}
    </div>
  );
}
