import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    width: 28,
    height: 28,
  },
  buttonConnect: {
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5A5A',
    width: width * 0.4,
    height: 50,
    borderRadius: 15,
  },
  buttonContent: {
    fontFamily: 'Obviously-Blck',
    color: 'white',
    fontSize: 20,
  },
  buttonConnectEnabled: {
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: width * 0.4,
    height: 50,
    borderRadius: 15,
  },
  buttonSimply: {
    marginTop: width * 0.6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSimplyContent: {
    color: '#484966',
    fontSize: 18,
    bottom: 52,
    textAlign: 'center',
    fontFamily: 'Obviously-Blck',
  },
  buttonNumber: {
    marginTop: 30,
    backgroundColor: '#ff3637',
    width: '90%',
    height: 55,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    bottom: 10,
    alignSelf: 'center',
  },
  icon: {
    width: 26,
    height: 26,
    position: 'absolute',
    left: 15,
    //marginLeft: 20
  },
  textNumber: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
    /*textAlign: 'center',
		flex:1*/
  },
});

export default styles;
