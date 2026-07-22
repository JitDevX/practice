import React, { useEffect, useState } from "react";
export default function StudentManegment() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [editId, setEditId] = useState(null);

  function addStudent() {
    if (!name.trim() || !age.trim() || course.trim() === "") {
      alert("Please fill all fields");
      return;
    }
    const student = {
      id: Date.now(),
      name: name,
      age: age,
      course: course,
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

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-4xl font-bold"> Student Manegment System</h1>
      <p className="text-gray-500 mt-2"> Manage your students easily.</p>

      <div className="flex-col">
        <input
          placeholder="Enter Student Name"
          className="border p-3 rounded w-full"
          value={name}
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
        {students.length === 0 ? (
          <li className="font-bold text-red-700">No students added yet</li>
        ) : (
          students.map((student) => (
            <li
              key={student.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded border"
            >
              <div>
                <p className="font-bold text-lg text-black">{student.name}</p>
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
