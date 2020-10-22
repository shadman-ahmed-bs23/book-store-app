import React from 'react';

//Importing CSS File
import './App.css';

//Importing Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import BookCreate from './components/BookCreate';

//Importing from React Router Dom
import {BrowserRouter as Router, Route} from "react-router-dom"; 

function App() {
  return (
    <div>
      
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/books/new" exact component={BookCreate} />
        </div>
      </Router>
    </div>
  );
}

export default App;