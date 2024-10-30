import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import CardView from './views/CardView'
import GridView from './views/GridView'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>Yankees Pitching Roster</h1>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Card View
            </NavLink>
            <NavLink to="/grid" className={({ isActive }) => isActive ? 'active' : ''}>
              Grid View
            </NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<CardView />} />
          <Route path="/grid" element={<GridView />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
