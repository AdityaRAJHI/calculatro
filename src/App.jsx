import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import Home from './Home';
    import Dashboard from './Dashboard';
    import Calculator from './Calculator';

    const App = () => {
      return (
        <div className="app">
          <div className="sidebar">
            <h2>Menu</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </div>
        </div>
      );
    };

    export default App;
