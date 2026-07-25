import { useState, useEffect } from "react";
import React from "react";
import data from "../students_500.json"

export default function Home() {
  const [students, setStudents] = useState(data)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [city, setCity] = useState("")
  const [edit, setEdit] = useState(null)
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [dark, setDark] = useState(false)

  useEffect(() => {
    console.log("Student List Changed");
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

  //CREATE
  function adddata() {
    if (!name.trim() || !age.trim() || !city.trim()) {
      alert("Please complete all reamining fields")
      return;
    }

    const student = {
      id: students.length + 1,
      name: name,
      age: age,
      city: city
    }
    setStudents([...students, student])
    setName("")
    setAge("")
    setCity("")
  }

  //DELETE
  function deletedata(id) {
    setStudents(students.filter((student) => student.id !== id))
  }

  //EDIT
  function editdata(items) {
    setName(items.name)
    setAge(items.age)
    setCity(items.city)
    setEdit(items.id)
  }

  //UPDATE
  function updatedata() {
    setStudents(
      students.map((student) => student.id === edit ?
        {
          ...students,
          name,
          age,
          city
        } : student)
    )

    setName("")
    setAge("")
    setCity("")
    setEdit(null)
  }

  const filteredStudents = students.filter((items) =>
    items.name.toLowerCase().includes(search.toLowerCase()) ||
    items.city.toLowerCase().includes(search.toLowerCase()) ||
    items.id.toString().includes(search)
  );

  const sortedStudents = [...filteredStudents]

  function sortstudents() {
    if (sortBy === "az") {
      sortedStudents.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (sortBy === "za") {
      sortedStudents.sort((a, b) => b.name.localeCompare(a.name))
    }
    else if (sortBy === "azc") {
      sortedStudents.sort((a, b) => a.city.localeCompare(b.city))
    }
    else if (sortBy === "zac") {
      sortedStudents.sort((a, b) => b.city.localeCompare(a.city))
    }
    else if (sortBy === "ageLow") {
      sortedStudents.sort((a, b) => a.age - b.age)
    }
    else if (sortBy === "ageHigh") {
      sortedStudents.sort((b, a) => b.age - a.age)
    }
    else if (sortBy === "Newest") {
      sortedStudents.sort((a, b) => a.id - b.id)
    }
    else if (sortBy === "Oldest") {
      sortedStudents.sort((b, a) => b.id - a.id)
    }
    return sortedStudents;
  }

  return (
    <div className={dark ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <div className="flex justify-between items-center p-4">
        <h1>Student Dashboard</h1>
        <button className="border px-3 py-1 rounded" onClick={() => setDark(!dark)}>Toggle</button>
      </div>

      <input
        className="border p-3 rounded w-full placeholder:text-gray-500"
        type="text"
        placeholder="Search name or age or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input className="border m-6 p-1 placeholder:text-gray-500"
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />

      <input className="border m-6 p-1 placeholder:text-gray-500"
        type="text"
        placeholder="Student's age"
        value={age}
        onChange={(e) => setAge(e.target.value)} />

      <input className="border m-6 p-1 placeholder:text-gray-500"
        type="text"
        placeholder="City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)} />

      <div>
        <select className="border" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Select Sorting</option>

          <option value="az">A → Z</option>

          <option value="za">Z → A</option>

          <option value="azc">A → Z city</option>

          <option value="zac">Z → A city</option>

          <option value="ageLow">Age Low → High</option>

          <option value="ageHigh">Age High → Low</option>

          <option value="newest">Newest</option>

          <option value="oldest">Oldest</option>
        </select>
      </div>

      {edit === null ? (<button onClick={() => adddata()}
        className="border m-2 p-1">Add</button>) :

        (<button onClick={() => updatedata()}
          className="border m-2 p-1">Update</button>)}

      <div className="grid grid-cols-5 p-12 gap-6">

        <div>Id</div>
        <div>Name</div>
        <div>Age</div>
        <div>City</div>
        <div>Action</div>

        {sortstudents().map((items) =>
          <React.Fragment key={items.id}>
            <div>{items.id}</div>
            <div>{items.name}</div>
            <div>{items.age}</div>
            <div>{items.city}</div>
            
            <div>

              <button className="border mr-2 p-1"
                onClick={() => deletedata(items.id)}>Delete</button>

              <button className="border p-1"
                onClick={() => editdata(items)}>Edit</button>

            </div>
          </React.Fragment>)}
      </div>
    </div>
  )
}