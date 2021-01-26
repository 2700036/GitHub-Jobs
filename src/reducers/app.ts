const initialState = {
  isThemeDark: !!localStorage.getItem('isThemeDark') || false, 
};

const app = (state = initialState, { type, payload }: any) => {  
  switch (type) {
    case 'TOGGLE_THEME':
      return { ...state, isThemeDark: !state.isThemeDark };   
    default:
      return state;
  }
};

export default app
