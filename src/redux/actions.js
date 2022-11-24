import {ADD_TODO, DELETE_TODO, EDIT_TODO,TOGGLE_STATUS, CHANGE_MODE} from "./actionsTypes";
// todo actions 
export const addTodo = (content, id)=> ({
    type : ADD_TODO,
    payload : {
        id:id,
        text:content,
    }
})
export const deleteTodo = (id) => ({
    type : DELETE_TODO,
    payload : id  ,
    
})
export const editTodo = (id,text)=>({
    type:EDIT_TODO,
    payload: {
        id:id,
        text:text,
    }
})
export const toggleStatus = (id) => ({
    type:TOGGLE_STATUS,
    payload:id,
})
// mode actions 
export const changeMode = (value)=>({
    type: CHANGE_MODE,
    payload:!value
});