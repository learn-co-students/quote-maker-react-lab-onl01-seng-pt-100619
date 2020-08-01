export default (state = [], action) => {

  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':

      return state.map(quote=> {
        if(quote.id === action.quoteId){
          if(!!quote.votes) {
            quote.votes += 1
          } else {
            quote.votes = 1 
          }
          
        }
        return quote
      })


    case 'DOWNVOTE_QUOTE':

      return state.map(quote=> {
        if(quote.id === action.quoteId){
          switch (quote.votes) {
            case 0:
              return quote
            default:
              return ( {...quote, votes: quote.votes-=1} )
          }
        }
        return quote
      })
    

    default: 
      return state;
  }
}
