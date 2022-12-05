import Homepage from './homepage/homepage';
import LeeCooper from './leecooper/leecooper';
import './App.css';
import Chat from './components/chat/chat';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<><Navbar/><div className='group'><Homepage/><Chat /></div><Footer/></>}/>
          <Route path='/men/clothing/leecooper' element={<><Navbar/><div className='group'><LeeCooper/></div></>}/>
        </Routes>
    </Router>
  );
}

export default App;
