import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from './landing.styles';
import LandingButton from './components/landing-button';

/*
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import LandingButton1 from './components/landing-button1';
import LandingButton2 from './components/landing-button2';
*/

class Landing extends React.Component {
  openSeConnecter = () => {
    this.props.navigation.navigate('login');
  };
  render() {
    return (
      <View style={styles.main}>
        <Image
          source={require('../../../assets/cajoo.png')}
          style={styles.logo}
        />
        <Text style={styles.titre}>Vos courses en 3 clics !</Text>
        <LandingButton onPress={this.openSeConnecter} />
        <TouchableOpacity style={styles.button3} onPress={this.openSeConnecter}>
          <Text style={styles.textButton2}>Découvir l'app</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
/*
 <LandingSocialButton type="google" />
  <LandingSocialButton />
*/
export default Landing;
