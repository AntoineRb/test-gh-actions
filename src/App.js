import './App.css';
import { Route, Routes, Router } from 'react-router-dom';

function App() {

  function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={HomePage()}/>
        <Route path="/dashboard" element={Dashboard()} />
      </Routes>
      <nav>
        <a href="/">Home </a>
        <a href="/dashboard"> Dashboard</a>
      </nav>
    </div>
  );
}

export default App;
