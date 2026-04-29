import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import StudentList from './components/StudentList'
import AddStudent from './components/AddStudent'
import './App.css'

function App() {
  const [students, setStudents] = useState([])

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList students={students} />} />
          <Route path="/add" element={<AddStudent students={students} setStudents={setStudents} />}
        />
        </Routes>
      </div>
    </>
  )
}

export default App