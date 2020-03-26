import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Login from "./components/Login/Login";
import Endeavors from './components/Endeavors/Endeavors';
import Quests from './components/Quests/Quests';
import Progress from './components/Progress/Progress';
import Activities from './components/Activities/Activities';
import Home from './components/Home/Home';

const App = (props) => {



    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div class='app-wrapper-content'>
                <Redirect exact from="/" to="/home" />
                <Route path='/home' render={() => <Home />} />
                <Route path='/endeavors' render={() => <Endeavors />} />
                <Route path='/activities' render={() => <Activities />} />
                <Route path='/quests' render={() => <Quests />} />
                <Route path='/progress' render={() => <Progress />} />
                <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
                <Route path='/login' render={() => <Login />} />
            </div>
        </div>
    )
}

export default App;