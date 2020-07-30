export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const upIndex = state.findIndex(quote => quote.id === action.quoteId)
      const upQuote = state[upIndex]
      upQuote.votes += 1
      return [...state.slice(0, upIndex), upQuote, ...state.slice(upIndex + 1)]
    case 'DOWNVOTE_QUOTE': 
      const index = state.findIndex(quote => quote.id === action.quoteId)
      const quote = state[index]
      quote.votes > 0 ? quote.votes -= 1 : quote.votes = 0
      return [...state.slice(0, index), quote, ...state.slice(index + 1)]
    default:
      return state
  }
}

