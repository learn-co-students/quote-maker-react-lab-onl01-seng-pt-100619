import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    //set up a controlled form with internal state
    content: "",
    author: "",
  }

  handleOnChange = event => {
    // Handle Updating Component State
    // event.preventDefault()
    this.setState({...this.state, content: event.target.value})
  }

  handleOnAuthorChange = event => {
    // Handle Updating Component State
    // event.preventDefault()
    this.setState({...this.state, author: event.target.value})
  }
  
  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state
    let quote = {...this.state, id: uuid()}
    // Pass quote object to action creator
    this.props.addQuote(quote)
    // Update component state to return to default state
    this.setState({content: "", author: ""})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form 
                  className="form-horizontal"
                  onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        onChange={this.handleOnChange}
                        className="form-control"
                        value={this.state.content} 
                        name="content"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                        onChange={this.handleOnAuthorChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" 
                        className="btn btn-default">
                          Add
                        </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {addQuote: (quote) => dispatch(addQuote(quote))}
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
