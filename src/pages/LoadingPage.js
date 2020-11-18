import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {appEndLoading, appLoading} from '../actions';
import {sAppLoading} from '../reducers/AppReducer';

export const LoadingPage = function() {
  return (
      <View style={styles.pageContainer}>
        <ActivityIndicator
            size={'large'}
            color={'rgb(40,90,150)'}
        />
      </View>
  );
};

class LoadingPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loading, inLoading} = this.props;
    setTimeout(function() {
      inLoading();
    }, 1000);
  }

  componentWillUnmount() {
    const {loading, endLoading} = this.props;
    setTimeout(function() {
      endLoading();
    }, 1000);
  }

  render() {
    return <LoadingPage />;
  }

}

function mapStateToProps(state) {
  return {
    loading: sAppLoading(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inLoading: function() {
      dispatch(appLoading());
    },

    endLoading: function() {
      dispatch(appEndLoading());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPageContainer);

const styles = {
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
};
