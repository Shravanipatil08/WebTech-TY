function StudentList({ students }) {
    return (
        <div>
            <h2 className="mb-3">Student List</h2>

            {students.length === 0 ? (
                <p>No student added yet.</p>
            ) : (
                <div className="row">
                    {students.map((student, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card shadow mb-3">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{student.name}</h5>
                                    <p className="card-text text-muted mb-1"> Age: {student.age}</p>
                                    <p className="card-text text-muted"> Course: {student.course}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default StudentList