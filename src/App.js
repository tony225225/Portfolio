
import './App.css';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import {Route , Routes , useNavigate} from 'react-router-dom';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';

function App() {
  const navigate = useNavigate()
  const navigatelogin=()=>{
    navigate("/Contact")
  }
  
  const eduto=()=>{
    navigate("/Experience")
  }
  const proje=()=>{
    navigate("/Projects")
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Intro navigatetologin={navigatelogin} navigatetoexp={eduto} /> } />
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route exact path='/Experience' element={<Experience proj={proje} />}/>
        <Route exact path='/Projects' element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
