import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes.js'

class Quotes extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.props.quotes.map(quote=> {
                 return (<QuoteCard quote={quote} upvote={this.props.upvote} downvote={this.props.downvote} remove={this.props.remove}></QuoteCard>)
               })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return {
    upvote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvote: (quoteId) => dispatch(downvoteQuote(quoteId)),
    remove: (quoteId) => dispatch(removeQuote(quoteId))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
