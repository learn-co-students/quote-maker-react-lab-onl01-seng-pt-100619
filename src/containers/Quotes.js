import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
// import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {

  renderQuotes = () => {
    // console.log(this.getState())
    // this.props.quotes.map(quote => <QuoteCard quote={quote} removeQuote={this.removeQuote} upvoteQuote={this.upvoteQuote} downvoteQuote={this.downvoteQuote}/>)
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
              
              { 
              /*
                TODO:
                this.renderQuotes()

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
// const mapDispatchToProps = {
//   removeQuote,
//   upvoteQuote,
//   downvoteQuote
// }

// const mapStateToProps = state => {
//   return state
// }

export default connect()(Quotes);