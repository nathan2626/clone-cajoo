import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  forTop: {
    top: height * 0.2,
  },
  titre: {
    color: '#484966',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Obviously-Blck',
    textAlign: 'center',
  },
  nbm: {
    textAlign: 'center',
    fontSize: 16,
    color: '#484966',
    marginTop: 10,
    fontWeight: '600',
  },
  span: {
    color: '#ff3637',
    textDecorationLine: 'underline',
    fontWeight: '800',
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
    fontSize: 16,
    color: 'white',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
  containerInputs: {
    width: width * 0.9,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInputContainer: {
    width: width / 5,
    marginTop: 30,
    height: 55,
    backgroundColor: '#ebebeb',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  placeholder: {
    fontSize: 16,
    color: '#484966',
    marginRight: 5,
  },
  inputHidden: {
    display: 'none',
  },
  textInput: {
    width: '20%',
    height: 55,
    fontSize: 16,
    color: '#484966',
  },
  bottomContainer: {
    marginTop: height * 0.25,
  },
  falseInput: {
    width: width / 5,
    marginTop: 30,
    height: 55,
    backgroundColor: '#ebebeb',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  falseInputText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#484966',
  },
});

export default styles;
