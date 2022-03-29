import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './login.styles';

import LandingSocialButton from '../login/components/landing-social-button';
import HeaderBack from './components/header-back';

class Login extends React.Component {
  openRetour = () => {
    this.props.navigation.navigate('landing');
  };
  openConnectNumber = () => {
    this.props.navigation.navigate('connect');
  };
  render() {
    return (
      <View style={styles.main}>
        <HeaderBack onPress={this.openRetour} />

        <TouchableOpacity style={styles.buttonSimply}>
          <Text style={styles.buttonSimplyContent}>
            Connectez-vous simplement !
          </Text>
        </TouchableOpacity>

        <LandingSocialButton />

        <LandingSocialButton type="google" />

        <TouchableOpacity
          onPress={this.openConnectNumber}
          style={styles.buttonNumber}>
          <Image
            source={require('../../../assets/number.png')}
            style={styles.icon}
          />
          <Text style={styles.textNumber}>Avec votre numéro !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
