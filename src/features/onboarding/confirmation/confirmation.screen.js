import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './confirmation.styles';
import HeaderBack from './components/header-back';
class Confirmation extends React.Component {
  openRetour = () => {
    this.props.navigation.navigate('login');
  };

  createTwoButtonAlert = () =>
    Alert.alert('Oops', "Une erreur s'est produite 🤷‍♂️", [
      {
        text: 'Retour',
        onPress: () => console.log('Retour demandé'),
        style: 'cancel',
      },
    ]);

  openConfirmation = () => {
    this.props.navigation.navigate('confirmation');
  };

  constructor(props) {
    super(props);
    this.state = {
      secretCode: '',
      char1: '-',
      char2: '-',
      char3: '-',
      char4: '-',
      isFocused: true,
    };
  }

  handleFocus = () => this.setState({isFocused: true});

  handleBlur = () => this.setState({isFocused: false});

  onChangeSecretCode = secretCode => {
    this.setState({
      secretCode,
    });
    this.setState({char1: secretCode.charAt(0)});
    this.setState({char2: secretCode.charAt(1)});
    this.setState({char3: secretCode.charAt(2)});
    this.setState({char4: secretCode.charAt(3)});
  };
  render() {
    if (this.state.secretCode.length === 4) {
      this.createTwoButtonAlert();
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <HeaderBack onPress={this.openRetour} />

          <View style={styles.forTop}>
            <Text style={styles.titre}>Confirmez votre numéro !</Text>

            <Text style={styles.nbm}>
              Entrez le code envoyé au +33652026209
            </Text>

            <TextInput
              style={[
                styles.inputHidden,
                {
                  borderBottomColor: this.state.isFocused ? 'black' : 'red',
                  borderBottomWidth: 1,
                },
              ]}
              selectionColor={'#FF3537'}
              keyboardType="numeric"
              autoFocus={true}
              maxLength={4}
              onChangeText={secretCode => this.onChangeSecretCode(secretCode)}
              value={this.state.secretCode}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />

            <View style={styles.containerInputs}>
              <View style={styles.falseInput}>
                <Text style={styles.falseInputText}>{this.state.char1}</Text>
              </View>
              <View style={styles.falseInput}>
                <Text style={styles.falseInputText}>{this.state.char2}</Text>
              </View>
              <View style={styles.falseInput}>
                <Text style={styles.falseInputText}>{this.state.char3}</Text>
              </View>
              <View style={styles.falseInput}>
                <Text style={styles.falseInputText}>{this.state.char4}</Text>
              </View>
            </View>

            <Text style={styles.nbm}>
              Vous n'avez pas reçu le code?{' '}
              <Text style={styles.span}>Renvoyer</Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Confirmation;
