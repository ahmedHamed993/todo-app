import React from 'react'
import {TextField, Button} from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addTodo} from "../redux/actions";

function AddForm() {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e)=>{
    e.preventDefault();
    let id = new Date().getTime();
    if(todoText!==""){
      dispatch(addTodo(todoText,id));
      setTodoText("");
    }
  }
  const handleInputChange = (e)=>{
    setTodoText(e.target.value);
  }
  
  return (
    <Box id="add-form" component="form" display="flex" justifyContent="space-between" onSubmit={handleAddTodo}>
        <TextField 
          id="outlined-basic"  
          variant="outlined" 
          label='Add Todo' 
          fullWidth 
          value={todoText}
          onChange={handleInputChange}
        />
        <Button 
          type="submit"
          variant="contained" 
          style={{boxShadow : 'none', marginLeft:'5px'}}
        >
          Add
        </Button>
    </Box>
  )
}
export default AddForm;
