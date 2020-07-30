// TODO: Create action creators as defined in tests
// action > reducer > new state
// action creator is a function: person dropping off the form
// return value is: a plain Javascript object (action): has a type property and payload (the form)

// the action describes the change we want to make to our data
//this action then, get's passed down to dispatch (the form receiver) > makes copies and passes it off to reducer(departments)

export const addQuote = quote => {
    return {
        type: 'ADD_QUOTE',
        quote: Object.assign({}, quote, { votes:0 })
    }
}

export const removeQuote = quoteId => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId: quoteId 
    }
}

export const upvoteQuote = quoteId => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId: quoteId
    }
}

export const downvoteQuote = quoteId => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId: quoteId
    }
}