import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage} />

          {/* 아래처럼 써도돼. 그리고 주석 단축키는 command+/ */}
          {/* <Route exact path="/">
          <LandingPage />
          </Route>
          <Route path="/login">
          <LoginPage />
          </Route>
          <Route path="/register">
          <RegisterPage />
          </Route> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
