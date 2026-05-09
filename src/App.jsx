import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css'
import MyApp from './Veil'


function App() {

  return (
    <Router basename="/veil_of_ignorance">
      <MyApp />
    </Router>
  )
}

export default App
