const quotes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, {
        content: action.quote.content,
        author: action.quote.author,
        votes: action.quote.votes,
        id: action.quote.id
      }]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const quoteObj = state.find(quote => quote.id === action.quoteId)
      quoteObj.votes += 1
      const revisedState = state.filter(quote => quote.id !== action.quoteId)  
      return revisedState.concat(quoteObj)
    case 'DOWNVOTE_QUOTE':
      const quoteObj2 = state.find(quote => quote.id === action.quoteId)
      if (quoteObj2.votes > 0) {
        quoteObj2.votes -= 1
        const revisedState2 = state.filter(quote => quote.id !== action.quoteId)  
        return revisedState2.concat(quoteObj2)
      } else {
        return state
      }
    default:
      return state;
  }
}

export default quotes