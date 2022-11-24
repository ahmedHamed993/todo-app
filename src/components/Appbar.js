import {AppBar} from '@material-ui/core';
import { Button } from '@mui/material';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { useDispatch } from 'react-redux';
import {changeMode} from "../redux/actions";
import {useSelector} from "react-redux";
function Appbar() {
  const dispatch = useDispatch();
  const {darkModeOn} = useSelector(state => state.modeReducer);

  const handleChangeMode = ()=>{
    dispatch(changeMode(darkModeOn));
  }
  return (
    // <div>
      <AppBar style={{display:"flex", alignItems:"flex-end", background:'transparent', boxShadow:'none', padding:"10px"}}>
        <Button
          onClick= {handleChangeMode}
        >
          {
            darkModeOn? 
              <Brightness7Icon style={{color:"rgba(240,240,240,0.3)"}} /> : 
              <Brightness3Icon  style={{color:"rgba(50,50,50,0.8)"}}/>
          }
        </Button>
      </AppBar>
    // </div>
  )
}
export default Appbar;
