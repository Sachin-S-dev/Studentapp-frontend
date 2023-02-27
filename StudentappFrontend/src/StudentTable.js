import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";


function StudentTable() {
  const [students, setStudents] = useState([]);

    // fetch students data from backend on component mount
  useEffect(() => {
    axios.get("http://localhost:8081/students/list").then((response) => {
      setStudents(response.data);
    });
  },
   []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Class</th>
          <th>Division</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {students
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((student) => (
            <tr key={student.admissionNumber}>
              <td>{student.name}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.class}</td>
              <td>{student.division}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
