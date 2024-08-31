import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenditureList from './components/ExpenditureList';
import AddExpenditure from './components/AddExpenditure';
import UpdateExpenditure from './components/UpdateExpenditure';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<ExpenditureList />} />
            <Route path="/add" element={<AddExpenditure />} />
            <Route path="/update/:id" element={<UpdateExpenditure />} />
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
