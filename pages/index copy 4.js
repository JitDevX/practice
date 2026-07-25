import React, { useEffect, useState } from "react";
import studentsData from "../students_60.json";
export default function StudentManegment() {
  
  // const [students, setStudents] = useState([]);
  // const [students, setStudents] = useState(dummyStudents);
    const [students, setStudents] = useState(studentsData);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [darkMode , setDarkMode] = useState(false)

  useEffect(() => {
    console.log("Student List Changed");
  }, [students]);

  useEffect(() => {
    document.title = `Students (${students.length})`;
  }, [students]);

 useEffect( () => {
  const savedTheme = localStorage.getItem("darkmode")
  if(savedTheme){
    setDarkMode(JSON.parse(savedTheme))
  }
 },[])

 useEffect( () => {
  localStorage.setItem("darkmode", JSON.stringify(darkMode))
 }, [darkMode])


 function toggleTheme (){
  setDarkMode(!darkMode)
 }


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
      <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}> 
      <h1 className="text-4xl font-bold"> Student Manegment System</h1>

      <button
      onClick={toggleTheme}
      >ToggleTheme</button>
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
    </div>
  );
}



