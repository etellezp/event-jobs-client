import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProfiles } from '../actions/profileActions';

class Profiles extends Component {

  componentDidMount() {
      this.props.fetchProfiles()
  }

  render() {
    const { profiles } = this.props

    return (
      <div>
        <h3>Profiles</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profiles: state.profiles.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProfiles
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
