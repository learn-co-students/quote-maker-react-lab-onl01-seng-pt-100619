export default (state = [], action) => {

switch(action.type){
 case 'ADD_QUOTE':
 return [...state, action.quote]
  default: 
  return state 
 }
}

switch(action.type){
  case 'REMOVE_QUOTE':
  return [...state, action.quote]
   default: 
   return state 
 
}
