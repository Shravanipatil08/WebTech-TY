import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <span className="navbar-brand">StudentApp</span>

        <div>
          <Link className="btn btn-outline-light mx-2" to="/">Home</Link>
          <Link className="btn btn-outline-light mx-2" to="/students">Students</Link>
          <Link className="btn btn-outline-light mx-2" to="/add">Add Student</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar