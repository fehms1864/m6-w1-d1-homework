import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InventoryEdit from './InventoryEdit';
import InventoryList from './InventoryList';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/inventories' exact element={<InventoryList />} />
          <Route path='/inventories/:id' element={<InventoryEdit />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
