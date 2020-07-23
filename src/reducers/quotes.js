export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      const deleteIndex = state.findIndex(quote =>  quote.id === action.quoteId)
      return [
        ...state.splice(0, deleteIndex), ...state.splice(deleteIndex +1)
      ]
    case 'UPVOTE_QUOTE':
      let upvotedQuote;
      for(let i = 0; i<state.length; i++){
        if(state[i].id === action.quoteId){
          upvotedQuote = state[i]
          upvotedQuote.votes++
        }
      }
      return  [upvotedQuote]
    case 'DOWNVOTE_QUOTE':
      let downvotedQuote;
      for(let i = 0; i<state.length; i++){
          if(state[i].id === action.quoteId){
            downvotedQuote = state[i]
            if(state[i].votes > 0){
              downvotedQuote.votes--
            }
          }
      }
      return [downvotedQuote]
    default:
      return state;
  }
}
