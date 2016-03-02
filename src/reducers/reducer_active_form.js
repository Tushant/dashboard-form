export default function(state=null, action){
  let newState = Object.assign({},state);
  switch(action.type){
    case 'FORM_SELECTED':
      return action.payload;
  }
  return state;
}

// conitnue - Object.assign({},state)