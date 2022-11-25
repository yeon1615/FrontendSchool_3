import Homepage from './pages/HomePage/Homepage';
import TopBar from './components/TopBar/TopBar';
import Write from './pages/Write/Write';
import About from './pages/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const currentUser = true;
  return (
    <Router>
      {/* 신 버전으로 하시는 분들은 Router -> BrowserRouter */}
      <TopBar />
      {/* 신 버전으로 하시는 분들은 Switch -> Routes */}
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/posts'>
          <Homepage />
        </Route>
        <Route path='/register'>
          <h1>hello world 3</h1>
        </Route>
        <Route path='/login'>
          <h1>hello world 4</h1>
        </Route>
        <Route path='/post/:id'>
          <h1>hello world 5</h1>
        </Route>
        <Route path='/write'>
          <Write />
        </Route>
        <Route path='/settings'>
          {/* 다 고치기 */}
          <h1>hello world 7</h1>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
