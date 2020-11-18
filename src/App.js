import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import createStore from './stores';
import RootNavigator from './navigator/RootNavigator';
import LoadingPage from './pages/LoadingPage';
import BackgroundService from './BackgroundService';

const {store, persistor} = createStore();

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<LoadingPage />} >
            <BackgroundService />
            <SafeAreaView style={styles.container} >
              <RootNavigator />
            </SafeAreaView>
          </PersistGate>
        </Provider>
    );
  }

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(233,233,233)'
  }
};

export default App;
