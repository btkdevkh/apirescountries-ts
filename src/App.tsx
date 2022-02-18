import CountriesList from "./containers/countries/List/CountriesList";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from "./pages/Home";
import CountryDetails from "./containers/countries/Details/CountryDetails";
import NotFound404 from "./pages/NotFound404";
import './App.css'

function App() {
  return (
    <div className="container">
      
      <Router>
        <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink to={'/'} className="nav-link">Accueil</NavLink></li>
          <li className="nav-item"><NavLink to={'/countries/all'} className="nav-link">Pays</NavLink></li>
        </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/all" element={<CountriesList />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
