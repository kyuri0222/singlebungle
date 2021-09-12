import Login from "./components/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import React from "react";
import BoardEditor from "./components/board_editor/boardEditor";
import Board from "./components/board/board";
import Welcome from "./components/welcome/welcome";
import Signup from "./components/signup/signup";
import BoardDetail from "./components/boardDetail.jsx/boardDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact={true} component={Welcome}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/main" component={Main}/>
        <Route path="/board" component={Board}/>
        <Route path="/board/new" component={BoardEditor}/>
        <Route path="/board/detail/:detail_id" component={BoardDetail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
