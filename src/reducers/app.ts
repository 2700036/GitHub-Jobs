import { AppActionTypes } from "../types";
import { AppState } from "./types";

const initialState: AppState = {
  isThemeDark: !!localStorage.getItem('isThemeDark') || false, 
};

const app = (state = initialState, action: AppActionTypes): AppState => {  
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isThemeDark: !state.isThemeDark };   
    default:
      return state;
  }
};

export default app
