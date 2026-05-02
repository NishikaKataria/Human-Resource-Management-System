import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './page/Dashboard'
import Employees from './page/Employees'
import Leave from './page/Leave'
import Performance from './page/Performance'

function App() {
  const [isLogin, setLogin] = useState(true)

  if (!isLogin) {
    return <div className="text-center text-2xl mt-20">Please reload to login again</div>
  }

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar setLogin={setLogin} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/performance" element={<Performance />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App