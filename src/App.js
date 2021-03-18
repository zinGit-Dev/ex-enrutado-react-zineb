import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Route, Redirect, Switch } from "react-router-dom";
import { ContextUniverse } from "./context";

import NavBar from "./components/NavBar";
import Form from "./pages/Home/Form";
import List from "./pages/List/List";
import Details from "./pages/Details/Details";
import useCreateListUsers from "./hooks/useCreateListUsers";

function App() {

 const {user, registerUser, list}= useCreateListUsers()

  return (
    <div className="App">
       
      <ContextUniverse.Provider value= {{user,list, registerUser}} >
      <NavBar />
        <div>
          <Switch>
            <Route exact path="/home">
            <Form />
            </Route>
            <Route exact path="/list">
              <List  />
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>

            <Redirect to="/home" />
          </Switch>
        </div>
      </ContextUniverse.Provider>
    </div>
  );
}

export default App;
