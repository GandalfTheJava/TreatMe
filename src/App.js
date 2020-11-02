import './App.scss';
import Landing from './components/landing/Landing';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}/>
    </div>
  );
}

export default App;
