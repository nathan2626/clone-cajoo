import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './isConfirmed.styles';
import HeaderBack from './components/header-back';

class IsConfirmed extends React.Component {
  openRetour = () => {
    this.props.navigation.navigate('login');
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <HeaderBack onPress={this.openRetour} />

          <View style={styles.forTop}>
            <Text style={styles.titre}>Votre compte est confirmé !</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default IsConfirmed;
