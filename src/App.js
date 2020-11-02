import './App.scss';
import Landing from './components/landing/Landing';
import Collect from './components/collect/Collect';
import Distribute from './components/distribute/Distribute';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {Route,Switch,withRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/distribute' component={Distribute}/>
        <Route path='/collect' component={Collect}/>

      </Switch>
    </div>
  );
}

export default withRouter(App);
