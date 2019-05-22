import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addComment } from '../actions/commentActions';

class CommentForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      review: '',
      rating: '',
      profileId: ''
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    
    this.props.addComment(this.state)
    this.props.history.push(`/profiles/${this.state.profileId}`)
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
      profileId: parseInt(this.props.match.params.id)
    })
  }

  render() {
    console.log(this.props.match.params)
    return(
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="card card-form">
            <h3 className="card-title text-white text-center display-4 mt-3">
              Add a Comment
            </h3>
            <div className="card-body">
              <form className="form" onSubmit={this.handleOnSubmit}>
                <input
                  placeholder="Review"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="text"
                  name="review"
                />
                <input
                  placeholder="Rating from 1 to 5"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="number"
                  name="rating"
                />
                <button
                  className="btn btn-primary btn-md"
                  type="submit"
                >
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addComment
}, dispatch)

export default connect(null, mapDispatchToProps)(CommentForm);
