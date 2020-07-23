// TODO: Create action creators as defined in tests

// this file contains the functions we call on our event handlers
// these functions replace dispatch being called directly 
// we use the connect method to connect the store with the component and be able to use these action creators

export function addQuote(quote){ 
    return { type: 'ADD_QUOTE', quote}
}

export function removeQuote(quoteId){
    return { type: 'REMOVE_QUOTE', quoteId}
}

export function upvoteQuote(quoteId){
    return { type: 'UPVOTE_QUOTE' , quoteId}
}

export function downvoteQuote(quoteId){
    return { type: 'DOWNVOTE_QUOTE' , quoteId}
}