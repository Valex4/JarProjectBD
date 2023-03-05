import Title from "../atoms/Title"
function FormRegister() {
    const renderMain = ()=>{
        if (courses.length === 0) {
            return <h1>No courses find</h1>;
          }
          return courses.map((course) => (
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>level</th>
                  <th>Actions</th>
                </tr>
              </thead>
      
              <tbody>
                <tr key={course.title}>
                  <td>{course.title}</td>
                  <td>{course.category}</td>
                  <td>{course.level}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(course);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        handleEdit(course.id);
                      }}
                      className="btn btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ));
    }
    
    
    
    return ( 
        <Title msn="Registro de gasolineras"/>
     );
}

export default FormRegister;