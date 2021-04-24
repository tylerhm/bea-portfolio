import {
  BrowserRouter as Router,
  Redirect,
  Route 
} from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Route path='/contact'>
        <Home contact />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/'>
        <Redirect to='/home' />
      </Route>
      <Footer />
    </Router> 
  );
}

export default App;
