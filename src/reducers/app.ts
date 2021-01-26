import { AppActionTypes } from "../types";
import { ReducersTypes } from "./types";

const initialState = {
  isThemeDark: !!localStorage.getItem('isThemeDark') || false, 
};

const app = (state = initialState, action: AppActionTypes): ReducersTypes => {  
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isThemeDark: !state.isThemeDark };   
    default:
      return state;
  }
};

export default app
