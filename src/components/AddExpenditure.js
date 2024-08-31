import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddExpenditure() {
  const [expenditure, setExpenditure] = useState({
    expenditureType: '',
    description: '',
    price: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setExpenditure({ ...expenditure, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8088/expenditure/v1.0/apis/new', expenditure)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Add Expenditure</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={expenditure.name}
            onChange={handleChange}
          />
          </div>
        <div>
          <label>Item:</label>
          <input
            type="text"
            name="expenditureType"
            value={expenditure.expenditureType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={expenditure.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={expenditure.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddExpenditure;
