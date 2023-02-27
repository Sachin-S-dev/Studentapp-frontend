import React, { useState } from 'react';
import axios from 'axios';
const ClassOptions = ['I', 'II', 'III', 'IV', 'V', 'V1', 'V11', 'V111', '1X', 'X', 'X11', 'X12'];
const DivisionOptions = ['A', 'B', 'C'];

const StudentForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [className, setClassName] = useState('');
  const [division, setDivision] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, dob, className, division, gender };
    axios.post("http://localhost:8081/students/add", newStudent)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
   
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} 
      onChange={(e) => setName(e.target.value.replace(/[^A-Za-z ]/gi, ''))} required /><br></br>
      
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" id="dob" value={dob} 
      onChange={(e) => setDob(e.target.value)} required /><br></br>

      <label htmlFor="className">Class:</label>
      <select id="className" value={className} 
      onChange={(e) => setClassName(e.target.value)} required>
        <option value="">Select a class</option>
        {ClassOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select><br></br>

      <label htmlFor="division">Division:</label>
      <select id="division" value={division} 
      onChange={(e) => setDivision(e.target.value)} required>
        <option value="">Select a division</option>
        {DivisionOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select><br></br>

      <label htmlFor="gender">Gender:</label>
      <div id="gender" onChange={(e) => setGender(e.target.value)} required>
        <input type="radio" id="male" name="gender" value="Male" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" />
        <label htmlFor="female">Female</label>
      </div><br></br>

      <button type="submit">Submit</button>
    </form>
   
    
  );
};

export default StudentForm;

