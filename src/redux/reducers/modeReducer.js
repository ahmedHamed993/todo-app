import {CHANGE_MODE} from "../actionsTypes";
let isDark = false;
if(window.localStorage.getItem("isDark"))
{
    isDark = JSON.parse(window.localStorage.getItem("isDark"));
}
const intialState = {
    darkModeOn:isDark,
}

const modeReducer = (state = intialState, action)=> {
    switch(action.type)
    {
        case CHANGE_MODE: {
            window.localStorage.setItem("isDark",action.payload);
            return {darkModeOn : action.payload};
        }
        default : {
            return state;
        }
    }

}
export default modeReducer;