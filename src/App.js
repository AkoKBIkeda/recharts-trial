import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DashboardPage from './Dashboard/DashboardPage';
import Page from './Page';
import BarChart from './components/BarChart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/charts" element={<Page />} />
          <Route path="/" element={<h1>Welcome to the App</h1>} />
          <Route path="/barchart" element={<BarChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

