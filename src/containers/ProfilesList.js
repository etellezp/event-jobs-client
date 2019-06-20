import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProfiles } from '../actions/profileActions';
import { Link } from 'react-router-dom';
import Profiles from '../components/Profiles'

class ProfilesList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filter: false
    }
  }

  componentDidMount() {
    this.props.fetchProfiles()
  }

  handleOnClick = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      filter: true
    })
  }

  render() {
    const { profiles } = this.props.profiles
    return (
      <>
        <h1 className="text-white text-center my-5">PROFILES</h1>
        <div className="row justify-content-center my-2">
          <Link className="text-center btn btn-primary btn-sm mx-1" to="/profiles/new">Add Profile</Link>
          <button onClick={this.handleOnClick} className="text-center btn btn-secondary btn-sm mx-1">Sort Alphabetically</button>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            {(this.state.filter === false) ?
              profiles.map(profile => <Profiles key={profile.id} profile={profile} />) 
                :
              profiles.sort((a, b) => (a.name > b.name) ? 1 : -1).map(profile => <Profiles key={profile.id} profile={profile} />)
            }
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    profiles: state.profiles
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProfiles
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesList);
