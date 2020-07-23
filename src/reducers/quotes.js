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
      return  [...state]
    case 'DOWNVOTE_QUOTE':
      // let downvotedQuote;
      // for(let i = 0; i<state.length; i++){
      //     if(state[i].id === action.quoteId){
      //       downvotedQuote = state[i]
      //       if(state[i].votes > 0){
      //         downvotedQuote.votes--
      //       }
      //     }
      // }

      let index = state.findIndex((quote) => quote.id === action.quoteId)
      
      let quote = state[index]
      if(quote.votes > 0){
        return [...state.slice(0,index), Object.assign({}, quote, {votes: quote.votes -= 1}), ...state.slice(index+1)]
        //return [...state.slice(0,index), {...quote, votes: quote.votes -= 1}, ...state.slice(index+1)]

      } else{
        return[...state]
      }
      
      default:
      return state;
  }
}
