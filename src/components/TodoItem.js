import React, {useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Box, Typography } from "@mui/material";
import  {CssBaseline}  from "@mui/material";
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleStatus } from '../redux/actions';
import { Button, ButtonGroup, TextField } from '@mui/material';

export default function TodoItem({todo}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(todo.text);
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id))
  }
  const handleEditTodo = (e)=>{
    e.preventDefault();
    dispatch(editTodo(todo.id,newValue));
    setIsEditing(false);
  }
  return (
    <>
        <CssBaseline />
        { !isEditing &&
          <Box className={todo.completed ? "todo-item todo-completed":"todo-item"} onClick = {()=> dispatch(toggleStatus(todo.id))}>   
            {/* todo text  */}
            <Typography variant="h6">{todo.text}</Typography>
            {/* todo functionality buttons */}
            <ButtonGroup >
              {/* delete button  */}
              <Button 
                className="del-icon"  
                onClick = {handleDeleteTodo} 
              >
                <DeleteIcon  style={{color:"grey", border:"none"}}  />
              </Button>
              {/* edit button  */}
              <Button 
                className="edit-icon" 
                onClick = {()=>setIsEditing(true)}
              >
                <EditIcon  style={{color:"grey",width:"100%"}} />
              </Button>
            </ButtonGroup>
          </Box>
        }
        {
          isEditing &&  
          <Box className="todo-item" component="form">
            {/* todo text  */}
            <TextField 
              id="outlined-basic"  
              variant="outlined" 
              fullWidth 
              value={newValue}
              onChange={(e)=>setNewValue(e.target.value)}
              // focused={isEditing}
              autoFocus
            />
            <Button 
              type="submit"
              variant="contained" 
              style={{boxShadow : 'none', marginLeft:'5px', height:'56px'}}
              onClick = {handleEditTodo}
            >
              submit
            </Button>
          </Box>
        }
    </>
  )
}
