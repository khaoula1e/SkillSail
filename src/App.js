import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/' Component={HomePage}/>
      <Route path='/login' Component={LoginPage}/>
      <Route path='/register' Component={RegisterPage}/>
      <Route path='/profile' Component={ProfilePage}/>


      <Footer/>
    </Router>
  );
}

export default App;
