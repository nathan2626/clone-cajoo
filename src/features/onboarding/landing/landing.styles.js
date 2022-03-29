import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    height: height,
    width,
    alignItems: 'center',
  },
  logo: {
    //alignSelf:'flex-start',
    height: 140,
    width: 350,
    marginTop: height * 0.26,
  },
  titre: {
    marginTop: 32,
    color: '#484966',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Obviously-Blck',
  },
  button2: {
    marginTop: 10,
    backgroundColor: 'black',
    width: '90%',
    height: 40,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
  },
  button3: {
    marginTop: 10,
    width: '90%',
    height: 40,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 10,
    //marginLeft: 20
  },
  textButton2: {
    color: '#ff3637',
    fontFamily: 'Montserrat-Bold',
    textDecorationLine: 'underline',
    fontWeight: '900',
    /*textAlign: 'center',
      flex:1*/
  },
});

export default styles;
