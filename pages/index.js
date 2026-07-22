import React, { useEffect, useState } from 'react'
export default function 
StudentManegment() {

  const [students, setStudents] = useState([]);
  const [name , setName] = useState("")
  const [age , setAge] = useState("")
  const [course , setCourse] = useState("")
  

  return (
    <div className='max-w-xl mx-auto mt-10'>
      <h1 className='text-4xl font-bold'> Student Manegment System</h1>
      <p className='text-gray-500 mt-2'> Manage your students easily.</p>
      
      
      <div className='flex-col' >

      <input 
      placeholder='Enter Student Name'
      className='border p-3 rounded w-full'
      value={name}
      onChange={(e) => {
        setName(e.target.value)
      }}
      />
      <input 
      placeholder='Enter Student Age...'
      className='border p-3 rounded w-full'
      value={age}
      onChange={(e) => {
        setAge(e.target.value)
      }}
      />
      <input 
      placeholder='Enter Student Course...'
      className='border p-3 rounded w-full'
      value={course}
      onChange={(e) => {
        setCourse(e.target.value)
      }}
      />
      </div>
      <button className='bg-blue-500 text-white px-4 py-2 rounded'> Add Student </button>

      <ul className='border p-3 rounded flex-col justify-between'>
        <li className='flex justify-between'> {students} 
          <button>Edit</button>
          <button>Delete</button>
        </li>

      </ul>

    </div>
  )
}





