let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Сегодня сделал навбар и переделал архитектуру', likesCount: 12 },
            { id: 2, message: 'Позвонил мише', likesCount: 13 },
            { id: 3, message: 'Выпил кофе', likesCount: 7 },
            { id: 4, message: 'Поиграл в комп игры', likesCount: 1 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Миша' },
            { id: 2, name: 'Гена' },
            { id: 3, name: 'Оксана' },
            { id: 4, name: 'Катя' },
            { id: 5, name: 'Валера' },
            { id: 6, name: 'Коци' }
        ],
        messages: [
            { id: 1, message: 'Что там по архитектуре?' },
            { id: 2, message: 'Как твои квесты ?' },
            { id: 3, message: 'Надо выучить реакт бутстрап' },
            { id: 4, message: 'Сейчас 7 вечера' },
            { id: 5, message: 'ага' }
        ]
    }

}

export default state;
