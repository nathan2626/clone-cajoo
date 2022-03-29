import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  textGoContinue: {
    color: '#484966',
    fontSize: 12,
    fontWeight: '700',
    top: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textSurlign: {
    color: '#ff3637',
    textDecorationLine: 'underline',
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
  button3: {
    marginTop: 20,
    backgroundColor: '#FF3537',
    width: width * 0.9,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 13,
    flexDirection: 'row',
  },
  button3Disable: {
    marginTop: 20,
    backgroundColor: '#ffb0b1',
    width: width * 0.9,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 13,
    flexDirection: 'row',
  },
  textButton3: {
    fontSize: 18,
    color: 'white',
    fontWeight: '800',
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
  bottomContainer: {
    marginTop: height * 0.25,
    alignSelf: 'center',
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
  textInputContainer: {
    width: width * 0.9,
    marginTop: 30,
    height: 55,
    backgroundColor: '#ebebeb',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  placeholder: {
    fontSize: 16,
    color: '#4e4e63',
    marginRight: 5,
  },
  textInput: {
    width: width * 0.9,
    height: 55,
    fontSize: 16,
    color: '#4e4e63',
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
  contry: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
  arrow: {
    height: 8,
    width: 8,
    marginRight: 25,
  },
});

export default styles;
