import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
import "./App.css";
import "./index.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([ students, newStudent]);
  };

  return (
    <div className="table">
      <div className='form-container'>
     
      <h1>Student Form</h1>
      <StudentForm onAddStudent={addStudent} />
      </div>
      
      <div className='form-container'>
      <h1>Students Details</h1>
      <StudentTable students={students} />
      </div>  
    </div>
  );
}

export default App;

