export default (state = [], action) => {
  let index;
  let quote; 
  let newQuote;
  console.log(state);
  console.log(action)
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => {
        return quote.id !== action.quoteId
      })
    case 'UPVOTE_QUOTE':
       index = state.findIndex(quote => quote.id === action.quoteId)
       quote = state[index]
       newQuote = {...quote, votes: quote.votes + 1}
      return [...state.slice(0, index), newQuote, ...state.slice(index + 1)]
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      newQuote = {...quote, votes: quote.votes - 1}
      
      if(quote.votes > 0) {
          return [...state.slice(0, index), newQuote, ...state.slice(index + 1)]
      } else {
        return state;
      }
       
    default: 
      return state;
  }

}
