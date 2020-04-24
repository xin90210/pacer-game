import React from 'react'

export default props => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px'
    }}>
        <h3>Квест: {props.name}</h3>
        <p>Сложность: <strong>{props.complexity}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name} />
        <button onClick={props.onDelete}>Удалить</button>
    </div>
)