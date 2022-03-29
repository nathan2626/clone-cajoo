import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export const HeaderBack = props => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TouchableOpacity {...props}>
          <Image
            source={require('../../../../assets/whiteArrow.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.buttonContent}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ff3637',
    borderWidth: 2,
    borderColor: '#ff3637',
    paddingBottom: 18,
    paddingTop: 52,
    paddingHorizontal: 18,
  },
  backButton: {
    width: 28,
    height: 28,
  },
  buttonContent: {
    fontFamily: 'Obviously-Blck',
    color: 'white',
    fontSize: 20,
    right: '85%',
  },
});

export default HeaderBack;
