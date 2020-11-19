import React from 'react';
import {connect} from 'react-redux';
import {userLogout, userRefreshToken} from './actions';
import {sAppLogged} from './reducers/AppReducer';
import {sUserProps} from './reducers/UserReducer';

class BackgroundService extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.isLogged && this.props.user) {
      this.props.refreshToken();
    } else {
      this.props.logout();
    }
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    isLogged: sAppLogged(state),
    user: sUserProps(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshToken: function() {
      dispatch(userRefreshToken());
    },
    logout: function() {
      dispatch(userLogout());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundService);
