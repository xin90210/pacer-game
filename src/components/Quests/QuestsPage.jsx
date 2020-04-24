import React, { Component } from 'react';
import Quest from './Quest/Quest'

class QuestsPage extends Component {

    state = {
        quests: [
            { name: 'Сбросить вес до 75 кг', complexity: 8 },
            { name: 'Просыпаться в 10 утра', complexity: 5 },
            { name: 'Пить по 3 стакана воды в день', complexity: 3 },
        ],
        pageTitle: 'Квесты',
    }

    onChangeName(name, index) {
        const quest = this.state.quests[index]
        quest.name = name
        const quests = [...this.state.quests]
        quests[index] = quest
        this.setState({ quests })
    }

    deleteHandler(index) {
        const quests = this.state.quests.concat()
        quests.splice(index, 1)

        this.setState({ quests })

    }

    render() {
        const divStyle = {
            textAlign: 'left'
        }

        let quests = this.state.quests.map((quest, index) => {
            return (
                <Quest
                    key={index}
                    name={quest.name}
                    complexity={quest.complexity}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName={event => this.onChangeName(event.target.value, index)}
                />
            )
        })

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                {quests}
            </div>
        );
    }
}

export default QuestsPage;
