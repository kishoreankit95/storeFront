export const reducer = (state, action) => {
    switch(action.type){
      case "productSelect":
        return {...state, selItem: action.value};
      default:
        return state;
    }
}