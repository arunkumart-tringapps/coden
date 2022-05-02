
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/dashboard';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
function App() {
  return (
<div>
    <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
    </Router>
</div>
  );
}

export default App;
