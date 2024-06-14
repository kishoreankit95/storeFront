export const reducer = (state, action) => {
    switch(action.type){
      case "productSelect":
        return {...state, selItem: action.value};
        case "actPrice":
          return {...state, actPrice: action.value};
        case "cAddress":
          return {...state, cAddress: action.value};
        case "cName":
          return {...state, cName: action.value};
        case "cEmail":
          return {...state, cEmail: action.value};
        case "cNumber":
          return {...state, cNumber: action.value};
        case "ccNumber":
          return {...state, ccNumber: action.value};
      default:
        return state;
    }
}