import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Login from "./components/Login/Login";
import Endeavors from './components/Endeavors/Endeavors';
import QuestsPage from './components/Quests/QuestsPage';
import Progress from './components/Progress/Progress';
import Activities from './components/Activities/Activities';
import Home from './components/Home/Home';

class App extends Component {

    state = {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Миша' },
                { id: 2, name: 'Гена' },
                { id: 3, name: 'Оксана' },
                { id: 4, name: 'Катя' },
                { id: 5, name: 'Валера' },
                { id: 6, name: 'Коци' },
                { id: 7, name: 'Бутрадинав' }
            ],
            messages: [
                { id: 1, message: 'Что там по архитектуре?' },
                { id: 2, message: 'Как твои квесты ?' },
                { id: 3, message: 'Надо выучить реакт бутстрап' },
                { id: 4, message: 'Сейчас 7 вечера' },
                { id: 5, message: 'ага' }
            ]
        },

    }


    render() {
        return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Redirect exact from="/" to="/home" />
                    <Route path='/home' render={() => <Home />} />
                    <Route path='/endeavors' render={() => <Endeavors />} />
                    <Route path='/activities' render={() => <Activities />} />
                    <Route path='/quests' render={() => <QuestsPage />} />
                    <Route path='/progress' render={() => <Progress />} />
                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/dialogs' render={() => <Dialogs state={this.state.dialogsPage} />} />
                    <Route path='/login' render={() => <Login />} />
                </div>
            </div>
        )
    }
}

export default App;