import React from 'react';
import s from './Endeavors.module.css';

// Message = Endeavor
// messages = endeavorsList
// messagesElements = endeavorsElements
// message = endeavor

const Endeavor = (props) => {
    return <div>{props.endeavor}</div>
}

const Endeavors = (props) => {

    let endeavorsList = [
        { id: 1, endeavor: 'Развиваться в react' },
        { id: 2, endeavor: 'Делать приложуху' },
        { id: 3, endeavor: 'Выполнять таски' },
        { id: 4, endeavor: 'Просыпаться рано' },
        { id: 5, endeavor: 'дырдырдыр' }
    ]

    let endeavorsElements = endeavorsList.map(m => <Endeavor endeavor={m.endeavor} />);

    return (
        <div className={s.endeavorsList}>
            {endeavorsElements}
        </div>
    )
}

export default Endeavors;