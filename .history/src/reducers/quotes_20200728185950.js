export default (state = [], action) => {
  return state;
}
switch(action.type){
 case 'ADD_QUOTE' 
 return [...state, quote: action.quote]
 default: return state 
}
