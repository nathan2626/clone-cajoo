import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const LandingSocialButton = ({type = 'facebook'}) => {
  const socialName = type === 'facebook' ? 'Facebook' : 'Google';
  const socialLogo =
    type === 'facebook'
      ? require('../../../../assets/facebook.png')
      : require('../../../../assets/google.png');

  return (
    <TouchableOpacity
      style={socialName === 'Facebook' ? styles.button2 : styles.buttonGoogle}>
      <Image source={socialLogo} style={styles.icon} />
      <Text
        style={
          socialName === 'Facebook' ? styles.textButton2 : styles.textGoogle
        }>
        Continuer avec {socialName}
      </Text>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  button2: {
    marginTop: 10,
    backgroundColor: '#2579EA',
    width: '90%',
	alignSelf: 'center',
    height: 55,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    bottom: 10,
  },
  buttonGoogle: {
    borderWidth: 1,
    borderRadius: 15,
    BorderColor: 'black',
	alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    width: '90%',
    height: 55,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 39,
    height: 39,
    position: 'absolute',
    left: 10,
    //marginLeft: 20
  },
  textButton2: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
    /*textAlign: 'center',
		flex:1*/
  },
  textGoogle: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18,
    /*textAlign: 'center',
		flex:1*/
  },
});

export default LandingSocialButton;
