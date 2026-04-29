import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [course, setCourse] = useState('')
  const navigate = useNavigate()

  const addStudent = (e) => {
    e.preventDefault()

    if (name === '') {
      alert('Enter student name')
      return
    }

    setStudents([...students, { name,age,course }])
    setName('')
    navigate('/students')
  }

  return (
    <div className="col-md-6 mx-auto">
      <h2>Add Student</h2>

      <form onSubmit={addStudent}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button className="btn btn-success w-100">
          Add Student
        </button>
      </form>
    </div>
  )
}

export default AddStudent