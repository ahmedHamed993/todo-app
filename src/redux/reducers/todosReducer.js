import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_STATUS } from "../actionsTypes";
// get itodos from loca storate 

let savedTodos = JSON.parse(window.localStorage.getItem("todos"));
const intialState = {
    todos : [
    ],    
}
if(savedTodos !== null)
{
    intialState.todos = savedTodos;
}
const todosReducer = (state = intialState, action)=> {
    switch(action.type)
    {
        case ADD_TODO : {
            const {text,id} = action.payload;
            return {
                todos: [
                    ...state.todos,
                    {id, text, completed:false}
                ]
            }
        }
        case DELETE_TODO: {
            let newTodos = state.todos.filter(todo => todo.id !== action.payload);
            return {
                todos : [
                    ...newTodos,
                ]
            };
        }
        case EDIT_TODO : {
            // console.log(action.payload.id,action.payload.text);
            const idEditTodo = action.payload.id;
            const newText = action.payload.text;
            let todos = state.todos.map(obj => {
                return obj.id === idEditTodo ? {...obj,text : newText} : obj ;
            })
            return {todos};
        }
        case TOGGLE_STATUS :{
            const id = action.payload;
            let todos = state.todos.map(obj => {
                return obj.id === id ? {...obj, completed:!obj.completed} : obj ;
            })
            return {todos};
        }
        default : {
            return state;
        }
    }
}
export default todosReducer;