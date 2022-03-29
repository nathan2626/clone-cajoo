import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './connect.styles';
import HeaderBack from './components/header-back';
import {connectValidate} from './components/connect.helper';
import {Auth} from 'aws-amplify';

class Connect extends React.Component {
  openRetour = () => {
    this.props.navigation.navigate('login');
  };

  openConfirmation = () => {
    this.props.navigation.navigate('confirmation');
  };

  constructor(props) {
    super(props);
    this.state = {
      canGo: false,
      connect: '',
    };
  }

  submit = async () => {
    if (this.state.canGo) {
      try {
        const {user} = await Auth.signUp({
          username: '+33' + this.state.connect,
          password: 'Azertyuiop1!',
        });
        console.log('utilisateur créé:', user);
        this.props.navigation.navigate('isConfirmed', {
          connect: this.state.connect,
        });
      } catch (error) {
        console.log('error signing up:', error);
      }
    }
  };
  onChangeConnect = connect => {
    let canGo = false;
    this.setState({
      connect,
    });
    if (connectValidate(connect)) {
      canGo = true;
    }
    this.setState({
      canGo,
    });
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <HeaderBack onPress={this.openRetour} />

          <View style={styles.textInputContainer}>
            <Image
              source={require('../../../assets/france.png')}
              style={styles.contry}
            />
            <Image
              source={require('../../../assets/down.png')}
              style={styles.arrow}
            />
            <Text style={styles.placeholder}>+ 33</Text>
            <TextInput
              style={styles.textInput}
              selectionColor={'#FF3537'}
              keyboardType="numeric"
              onChangeText={connect => this.onChangeConnect(connect)}
              value={this.state.connect}
            />
          </View>

          <Text style={styles.textGoContinue}>
            En cliquant sur "CONTINUER" vous acceptez la{' '}
            <Text style={styles.textSurlign}>Politique de Confidentialité</Text>{' '}
            les <Text style={styles.textSurlign}>CGU</Text> et les{' '}
            <Text style={styles.textSurlign}>CGV</Text> de Cajoo.
          </Text>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={this.state.canGo ? styles.button3 : styles.button3Disable}
              onPress={this.openConfirmation}>
              <Text style={styles.textButton3}>CONTINUER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Connect;
