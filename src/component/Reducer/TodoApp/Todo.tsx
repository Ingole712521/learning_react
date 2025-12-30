import React, { useReducer, useState } from 'react'
import { TodoReducer } from './TodoReducer'

const Todo = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [])
    const [newTodoText, setNewTodoText] = useState('')

    const handleAddTodo = () => {
        if (newTodoText.trim() === '') return
        dispatch({ type: "ADD_TODO", text: newTodoText })
        setNewTodoText('')
    }

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h1>Todo List</h1>
            
            {/* Add Todo Input */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    placeholder="Enter new todo..."
                    style={{ 
                        flex: 1, 
                        padding: '8px', 
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                />
                <button 
                    onClick={handleAddTodo}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add Todo
                </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                {todos.length === 0 ? (
                    <p style={{ color: '#666', textAlign: 'center' }}>No todos yet. Add one above!</p>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {todos.map(todo => (
                            <li 
                                key={todo.id} 
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '10px',
                                    marginBottom: '8px',
                                    backgroundColor: todo.completed ? '#e8f5e9' : '#fff',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    color: todo.completed ? '#666' : '#333'
                                }}
                            >
                                <span>{todo.text}</span>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button 
                                        onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
                                        style={{
                                            padding: '4px 8px',
                                            backgroundColor: todo.completed ? '#ff9800' : '#2196f3',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {todo.completed ? 'Undo' : 'Complete'}
                                    </button>
                                    <button 
                                        onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
                                        style={{
                                            padding: '4px 8px',
                                            backgroundColor: '#f44336',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Statistics */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                padding: '10px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px'
            }}>
                <span>Total: {todos.length}</span>
                <span>Completed: {todos.filter(t => t.completed).length}</span>
                <span>Pending: {todos.filter(t => !t.completed).length}</span>
            </div>

            {/* Quick Add Buttons */}
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button 
                    onClick={() => {
                        setNewTodoText('Learn React')
                        handleAddTodo()
                    }}
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#e3f2fd',
                        border: '1px solid #2196f3',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add "Learn React"
                </button>
                <button 
                    onClick={() => {
                        setNewTodoText('Build Project')
                        handleAddTodo()
                    }}
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#e8f5e9',
                        border: '1px solid #4CAF50',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add "Build Project"
                </button>
                <button 
                    onClick={() => dispatch({ type: "ADD_TODO", text: "Test Todo" })}
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#fff3e0',
                        border: '1px solid #ff9800',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add Test Todo
                </button>
            </div>
        </div>
    )
}

export default Todo