import React, { useEffect, useState } from "react";

const dummyStudents = [
  { id: 1, name: "Rahul Sharma", age: 20, course: "React" },
  { id: 2, name: "Aman Singh", age: 21, course: "Node" },
  { id: 3, name: "Rajat Kumar", age: 22, course: "Java" },
  { id: 4, name: "Priya Sharma", age: 19, course: "Python" },
  { id: 5, name: "Rohit Verma", age: 23, course: "React" },
  { id: 6, name: "Sneha Patel", age: 20, course: "Angular" },
  { id: 7, name: "Karan Mehta", age: 21, course: "Node" },
  { id: 8, name: "Neha Gupta", age: 22, course: "Java" },
  { id: 9, name: "Ankit Jain", age: 24, course: "Python" },
  { id: 10, name: "Pooja Yadav", age: 19, course: "React" },
  { id: 11, name: "Suresh Kumar", age: 22, course: "Node" },
  { id: 12, name: "Ramesh Sharma", age: 20, course: "Java" },
  { id: 13, name: "Deepak Verma", age: 23, course: "React" },
  { id: 14, name: "Nikita Singh", age: 21, course: "Python" },
  { id: 15, name: "Arjun Patel", age: 22, course: "Angular" },
  { id: 16, name: "Komal Gupta", age: 19, course: "Node" },
  { id: 17, name: "Mohit Sharma", age: 20, course: "React" },
  { id: 18, name: "Riya Jain", age: 24, course: "Java" },
  { id: 19, name: "Harsh Yadav", age: 23, course: "Node" },
  { id: 20, name: "Vikas Meena", age: 22, course: "Python" },
  { id: 21, name: "Aakash Sharma", age: 20, course: "React" },
  { id: 22, name: "Sakshi Jain", age: 21, course: "Angular" },
  { id: 23, name: "Tarun Gupta", age: 22, course: "Node" },
  { id: 24, name: "Manish Kumar", age: 23, course: "Java" },
  { id: 25, name: "Jyoti Sharma", age: 19, course: "Python" },
  { id: 26, name: "Ravi Patel", age: 20, course: "React" },
  { id: 27, name: "Alok Singh", age: 24, course: "Node" },
  { id: 28, name: "Shivam Verma", age: 22, course: "Java" },
  { id: 29, name: "Khushi Gupta", age: 21, course: "Angular" },
  { id: 30, name: "Nitin Sharma", age: 23, course: "React" },
  { id: 31, name: "Divya Jain", age: 20, course: "Python" },
  { id: 32, name: "Yash Mehta", age: 22, course: "Node" },
  { id: 33, name: "Aditi Sharma", age: 19, course: "React" },
  { id: 34, name: "Hemant Kumar", age: 24, course: "Java" },
  { id: 35, name: "Muskan Verma", age: 20, course: "Angular" },
  { id: 36, name: "Lokesh Sharma", age: 23, course: "Python" },
  { id: 37, name: "Bhavesh Patel", age: 21, course: "React" },
  { id: 38, name: "Anjali Singh", age: 22, course: "Node" },
  { id: 39, name: "Prakash Kumar", age: 20, course: "Java" },
  { id: 40, name: "Ishita Jain", age: 23, course: "React" },
  { id: 41, name: "Kunal Sharma", age: 21, course: "Angular" },
  { id: 42, name: "Megha Verma", age: 22, course: "Node" },
  { id: 43, name: "Sahil Gupta", age: 20, course: "Python" },
  { id: 44, name: "Ruchi Sharma", age: 19, course: "React" },
  { id: 45, name: "Abhishek Yadav", age: 24, course: "Java" },
  { id: 46, name: "Simran Kaur", age: 21, course: "Node" },
  { id: 47, name: "Chetan Meena", age: 22, course: "React" },
  { id: 48, name: "Payal Sharma", age: 20, course: "Python" },
  { id: 49, name: "Gaurav Singh", age: 23, course: "Angular" },
  { id: 50, name: "Jitendra Yadav", age: 22, course: "Node" },
];
export default function StudentManegment() {
  const [students, setStudents] = useState([]);
  // const [students, setStudents] = useState(dummyStudents);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    console.log("Student List Changed");
  }, [students]);

  useEffect(() => {
    document.title = `Students (${students.length})`;
  }, [students]);

  useEffect(() => {
    const savedStudents = localStorage.getItem("students");
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem("students", JSON.stringify(students));
    } else {
      localStorage.removeItem("students");
    }
  }, [students]);

  function addStudent() {
    if (!name.trim() || !age.trim() || !course.trim()) {
      alert("Please fill all fields");
      return;
    }
    const student = {
      id: Date.now(),
      name: name,
      age: age,
      course: course,
      createdAt:new Date()
    };
    setStudents([...students, student]);
    setName("");
    setAge("");
    setCourse("");
  }

  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  function editStudent(id) {
    const student = students.find((student) => student.id === id);
    setName(student.name);
    setAge(student.age);
    setCourse(student.course);
    setEditId(id);
  }

  function updateStudent() {
    const updatedStudents = students.map((student) => {
      if (student.id === editId) {
        return {
          ...student,

          name,

          age,

          course,
        };
      }

      return student;
    });

    setStudents(updatedStudents);

    setName("");

    setAge("");

    setCourse("");

    setEditId(null);
  }

  function searchStudent(student) {
    const keyword = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(keyword) ||
      student.course.toLowerCase().includes(keyword) ||
      student.age.toString().includes(keyword)
    );
  }

  const filteredStudents = students.filter(searchStudent);

  // const sortedStudents = [...filteredStudents];

  function sortStudents() {
      const sortedStudents = [...filteredStudents];
    if (sortBy === "az") {
      sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "za") {
      sortedStudents.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "ageLow") {
      sortedStudents.sort((a, b) => a.age - b.age);
    } else if (sortBy === "ageHigh") {
      sortedStudents.sort((a, b) => b.age - a.age);
    } else if (sortBy === "newest") {
      sortedStudents.sort((a, b) => b.id - a.id);
    } else if (sortBy === "oldest") {
      sortedStudents.sort((a, b) => a.id - b.id);
    }

    return sortedStudents;
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-4xl font-bold"> Student Manegment System</h1>
      <p className="text-gray-500 mt-2"> Manage your students easily.</p>

      <input
        className="border p-3 rounded w-full"
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex-col">
        <input
          placeholder="Enter Student Name"
          className="border p-3 rounded w-full"
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="Enter Student Age..."
          className="border p-3 rounded w-full"
          value={age}
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          placeholder="Enter Student Course..."
          className="border p-3 rounded w-full"
          value={course}
          type="text"
          onChange={(e) => {
            setCourse(e.target.value);
          }}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={editId ? updateStudent : addStudent}
      >
        {editId ? "Update Student" : "Add Student"}
      </button>

      <ul className="border p-3 rounded flex flex-col gap-2">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Select Sorting</option>

          <option value="az">A → Z</option>

          <option value="za">Z → A</option>

          <option value="ageLow">Age Low → High</option>

          <option value="ageHigh">Age High → Low</option>

          <option value="newest">Newest</option>

          <option value="oldest">Oldest</option>
        </select>
        {students.length === 0 ? (
          <li className="font-bold text-red-700">No students added yet</li>
        ) : (
          sortStudents().map((student) => (
            <li
              key={student.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded border"
            >
              <div>
                <p className="font-bold text-lg text-black">
                  Name:{student.name}
                </p>
                <p className="text-sm text-gray-600">
                  Age: {student.age} | Course: {student.course}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  onClick={() => editStudent(student.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
