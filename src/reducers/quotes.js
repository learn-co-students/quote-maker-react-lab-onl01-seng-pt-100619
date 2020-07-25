export default (state = [], action) => {
  const idx = state.findIndex(quote =>  quote.id === action.quoteId)
  const quoteObj = state[idx]

  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      quoteObj.votes += 1
      return [...state.slice(0,idx), quoteObj, ...state.slice(idx+1)]

    case 'DOWNVOTE_QUOTE':
      if (quoteObj.votes > 0) {
        quoteObj.votes -= 1
        return [...state.slice(0,idx), quoteObj, ...state.slice(idx+1)]
      } else {
        return state
      }
      
    default:
      return state;
  }
}

