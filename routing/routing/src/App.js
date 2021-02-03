import './App.css';
import {Router} from '@reach/router';
import Home from './components/Home';
import Name from './components/Name';
import Color from './components/Color'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Name path="/:value"/>
        <Color path="/:value/:color/:backgroundColor"/>

      </Router>
    </div>
  );
}

export default App;
