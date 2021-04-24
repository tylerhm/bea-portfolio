import {
  BrowserRouter as Router,
  Redirect,
  Route 
} from 'react-router-dom'
import Home from './pages/Home'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/'>
        <Redirect to='/home' />
      </Route>
    </Router> 
  );
}

export default App;
