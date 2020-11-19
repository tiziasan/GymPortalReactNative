import React from 'react';
import {View, Text} from 'react-native';

import {
  PageTitle,
  Card,
  CardItem,
  InputLabel,
  Input,
  LoginButton,
  LinkButton,
} from '../../components';
import {connect} from 'react-redux';
import {
  appGuestFormChangeUsername,
  appGuestFormChangePassword,
  appSignUp,
  appGuestFormChangeName,
  appGuestFormChangeLastname,
  appGuestFormChangeEmail,
} from '../../actions';
import {
  sAppGuestFormUsername,
  sAppGuestFormPassword,
  sAppLoading,
  sAppGuestFormEmail, sAppGuestFormLastname, sAppGuestFormName,
} from '../../reducers/AppReducer';


class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.goToSignIn = function() {
      this.props.navigation.navigate('Accedi');
    }.bind(this);

  }

  render() {
    return (
        <View style={styles.pageContainer}>
          <Card style={styles.cardSignUp}>
            <CardItem>
              <PageTitle style={styles.title}>Registrazione!</PageTitle>
            </CardItem>

            <CardItem noMarginButton style={{flexDirection: "row", paddingHorizontal: 0}}>

              <CardItem noMarginButton style={{flex: 1, flexDirection: "column", paddingHorizontal: 0}}>
                <CardItem noMarginButton>
                  <InputLabel text={'Nome'} />
                </CardItem>
                <CardItem >
                  <Input
                      placeholder={'nome'}
                      handleChangeText={this.props.handleChangeName}
                      value={this.props.name}
                  />
                </CardItem>
              </CardItem>

              <CardItem noMarginButton style={{flex: 1, flexDirection: "column", paddingHorizontal: 0}}>
                <CardItem noMarginButton>
                  <InputLabel text={'Cognome'} />
                </CardItem>
                <CardItem >
                  <Input
                      placeholder={'cognome'}
                      handleChangeText={this.props.handleChangeLastname}
                      value={this.props.lastname}
                  />
                </CardItem>
              </CardItem>

            </CardItem>

            <CardItem noMarginButton>
              <InputLabel text={'Email'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'email'}
                  handleChangeText={this.props.handleChangeEmail}
                  value={this.props.email}
              />
            </CardItem>

            <CardItem noMarginButton>
              <InputLabel text={'Username'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'username'}
                  handleChangeText={this.props.handleChangeUsername}
                  value={this.props.username}
              />
            </CardItem>

            <CardItem noMarginButton>
              <InputLabel text={'Password'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'password'}
                  handleChangeText={this.props.handleChangePassword}
                  value={this.props.password}
                  secureTextEntry
              />
            </CardItem>

            <CardItem>
              <LoginButton
                  onPress={this.props.signUp}
                  inLoading={this.props.loading}
                  text={'Registrati'}
              />
            </CardItem>
            <CardItem>
              <LinkButton text={'Accedi!'} onPress={this.goToSignIn}/>
            </CardItem>
          </Card>
        </View>
    );
  }
}

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
  },
  cardSignUp:{
    backgroundColor: '#e1f5fe',
    borderRadius: 20,
  },
  title:{
    textAlign: 'center'
  }
};


function mapStateToProps(state) {
  return {
    name: sAppGuestFormName(state),
    lastname: sAppGuestFormLastname(state),
    email: sAppGuestFormEmail(state),
    username: sAppGuestFormUsername(state),
    password: sAppGuestFormPassword(state),
    loading: sAppLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeName: function(value) {
      dispatch(appGuestFormChangeName(value));
    },
    handleChangeLastname: function(value) {
      dispatch(appGuestFormChangeLastname(value));
    },
    handleChangeEmail: function(value) {
      dispatch(appGuestFormChangeEmail(value));
    },
    handleChangeUsername: function(value) {
      dispatch(appGuestFormChangeUsername(value));
    },
    handleChangePassword: function(value) {
      dispatch(appGuestFormChangePassword(value));
    },
    signUp: function(){
      dispatch(appSignUp());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
