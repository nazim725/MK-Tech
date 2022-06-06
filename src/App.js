import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
