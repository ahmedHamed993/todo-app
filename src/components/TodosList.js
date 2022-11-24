import {useSelector} from "react-redux";
import { Box } from "@mui/material";
import TodoItem from "./TodoItem";
import { useEffect } from "react";

export default function TodosList() {
  const {todos} = useSelector(state => state.todosReducer);
  const saveToLoalstorage= ()=>{
    window.localStorage.setItem("todos",JSON.stringify(todos)
  );
  }
  useEffect(()=>{
    saveToLoalstorage();
  },[todos]);
  return (
    <Box sx={{my:2, }} >
      {todos.length !== 0 && 
        todos.map(todo => {
          return (
           <TodoItem todo={todo} key={todo.id} />
          )
        })
      }
    </Box>
  )
}
