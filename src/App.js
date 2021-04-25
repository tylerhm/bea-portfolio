import {
  BrowserRouter as Router,
  Redirect,
  Route 
} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navigation />

      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Route path='/contact'>
        <Home contact />
      </Route>

      <Route path='/resume'>
        <Resume />
      </Route>

      <Footer />
    </Router> 
  );
}

export default App;
