interface Todo {
    id: number, 
    text: string,
    completed: boolean;
}

type Action = 
    | { type: "ADD_TODO", text: string } 
    | { type: "TOGGLE_TODO", id: number } 
    | { type: "DELETE_TODO", id: number }

export const TodoReducer = (state: Todo[], action: Action): Todo[] => {
    switch(action.type) {
        case "ADD_TODO": 
            console.log('Adding todo:', action.text)
            return [...state, { 
                id: Date.now(), 
                text: action.text, 
                completed: false 
            }]
        
        case "TOGGLE_TODO": 
            console.log('Toggling todo:', action.id)
            return state.map(todo => 
                todo.id === action.id 
                    ? { ...todo, completed: !todo.completed } 
                    : todo
            )

        case "DELETE_TODO":
            console.log('Deleting todo:', action.id)
            return state.filter(todo => todo.id !== action.id)

        default: 
            return state
    }
}