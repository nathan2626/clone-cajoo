import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const LandingButton = props => {
  return (
    <TouchableOpacity style={styles.boutton1} {...props}>
      <Text style={styles.textButton1}>ME CONNECTER 👋</Text>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  boutton1: {
    marginTop: '70%',
    backgroundColor: '#ed2238',
    width: '90%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  textButton1: {
    color: 'white',
    fontWeight: '900',
    fontSize: 18,
  },
});

export default LandingButton;
