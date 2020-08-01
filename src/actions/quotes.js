import uuid from "uuid"

export const addQuote = ( quote={author:"test author", content: "test quote", id: uuid(), votes: 0} ) => {
    return {type:"ADD_QUOTE", quote}
} 

export const removeQuote = (quoteId) => {
    return {type:"REMOVE_QUOTE", quoteId}
}

export const upvoteQuote = (quoteId) => {
    return {type:"UPVOTE_QUOTE", quoteId}
}

export const downvoteQuote = (quoteId) => {
    return {type:"DOWNVOTE_QUOTE", quoteId}
}

