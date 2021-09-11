import Login from "./components/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import React, { useState } from "react";
import BoardEditor from "./components/board_editor/boardEditor";
import Board from "./components/board/board";
import Board2 from "./components/board2/board2";
import Welcome from "./components/welcome/welcome";
import Signup from "./components/signup/signup";

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

        <Route path="/board2" component={Board2}/>


        {/* <Route exact path="/">
          <Welcome></Welcome>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/main">
          <Main></Main>
        </Route>
        <Route exact path="/board">
          <Board></Board>
        </Route>
        <Route path="/board/new">
          <BoardEditor></BoardEditor>
        </Route> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
