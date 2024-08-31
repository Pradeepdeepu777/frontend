import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ExpenditureList() {
  const [expenditures, setExpenditures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8088/expenditure/v1.0/apis/all')
      .then(response => setExpenditures(response.data))
      .catch(error => console.log(error));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h1>Expenditure List</h1>
      
      <table className="expenditure-table" style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%', margin: '20px 0' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>ID</th>
      <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Name</th>
      <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Item</th>
      <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Description</th>
      <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Date</th>
      <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Price</th>
      <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {expenditures.map(exp => (
      <tr key={exp.id} style={{ border: '1px solid black' }}>
        <td style={{ border: '1px solid black', padding: '10px' }}>{exp.id}</td>
        <td style={{ border: '1px solid black', padding: '10px' }}>{exp.name}</td>
        <td style={{ border: '1px solid black', padding: '10px' }}>{exp.expenditureType}</td>
        <td style={{ border: '1px solid black', padding: '10px' }}>{exp.description}</td>
        <td style={{ border: '1px solid black', padding: '10px' }}>{new Date(exp.date).toLocaleDateString()}</td>
        <td style={{ border: '1px solid black', padding: '10px' }}>{exp.price}</td>
        <td style={{ border: '1px solid black', padding: '10px' }}>
          <Link to={`/update/${exp.id}`}>Update</Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default ExpenditureList;
