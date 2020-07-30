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
      const quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      const quoteObj = state[quoteIndex]
      quoteObj.votes += 1
      return [...state.slice(0,quoteIndex), quoteObj, ...state.slice(quoteIndex+1)]
    case 'DOWNVOTE_QUOTE':
      const quoteIndex2 = state.findIndex(quote => quote.id === action.quoteId)
      const quoteObj2 = state[quoteIndex2]
      if (quoteObj2.votes > 0) {
        quoteObj2.votes -= 1
        return [...state.slice(0,quoteIndex2), quoteObj2, ...state.slice(quoteIndex2+1)]
      } else {
        return state
      }
    default:
      return state;
  }
}

export default quotes