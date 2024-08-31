import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateExpenditure() {
  const { id } = useParams();
  const [expenditure, setExpenditure] = useState({
    expenditureType: '',
    description: '',
    price: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8088/expenditure/v1.0/apis/all/${id}`)
      .then(response => setExpenditure(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setExpenditure({ ...expenditure, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8088/expenditure/v1.0/apis/update/${id}`, expenditure)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Update Expenditure</h1>
      <form onSubmit={handleSubmit}>
      <label>Name:</label>
          <input
            type="text"
            name="name"
            value={expenditure.name}
            onChange={handleChange}
          />
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateExpenditure;
