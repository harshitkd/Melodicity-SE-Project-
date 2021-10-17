import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Home />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
