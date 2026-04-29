function Student(props) {
  return (
     <div className="col-md-4">
      <div className="card shadow-lg">
        <div className="card-body text-center">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">Age: {props.age}</p>
          <p className="card-text">Course: {props.course}</p>
        </div>
      </div>
    </div>
  )
}

export default Student
