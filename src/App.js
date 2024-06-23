import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import NoteState from "./context/NotesState";
import AlertProvider from "./context/AlertContext";
import Signup from "./components/Signup";
import Login from "./components/login";
import Alert from "./components/Alert";
import NotFound from "./components/NotFound";

function App() {

  return (
    <>
      <Router>
        <AlertProvider>
        <NoteState>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={Signup} />
            <Route path="*" Component={NotFound} /> 
            </Routes>
          <Alert/>
        </NoteState>
        </AlertProvider>
      </Router >

    </>
  );
}

export default App;
