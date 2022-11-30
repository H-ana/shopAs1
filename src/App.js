import Homepage from './homepage/homepage';
import './App.css';
import Chat from './components/chat/chat';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<><Navbar/><div className='group'><Homepage/><Chat /></div></>}/>
        </Routes>
    </Router>
  );
}

export default App;
