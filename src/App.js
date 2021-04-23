import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>    
  );
}

export default App;
