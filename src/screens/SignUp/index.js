import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function SignUpScreen({ navigation }) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })
  function handleRegister() {
    navigation.replace('Login')
  }

  function goBack() {
    navigation.goBack()
  }

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setUserData((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredValue,
      }
    })
  }

  return (
    <LinearGradient colors={['#9EB23B', '#E0DECA']} style={styles.container}>
      <Animatable.Text
        animation="fadeInDown"
        delay={500}
        style={styles.titleText}
        easing="ease-in">
        Cadastro
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUp"
        delay={300}
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={inputChangeHandler.bind(this, 'name')}
          value={userData.name}
          placeholderTextColor="#5F7161"
        />
        <TextInput
          style={styles.input}
          placeholder="Login"
          onChangeText={inputChangeHandler.bind(this, 'email')}
          value={userData.email}
          placeholderTextColor="#5F7161"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={inputChangeHandler.bind(this, 'password')}
          value={userData.password}
          placeholderTextColor="#5F7161"
        />
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.signUpButton, styles.pressed]
              : styles.signUpButton
          }
          title="Entrar">
          <Text style={styles.buttonText} onPress={handleRegister}>
            Cadastrar
          </Text>
        </Pressable>
        <Text style={styles.orText}>___</Text>
        <Pressable style={styles.noLoggin} title="Entrar" onPress={goBack}>
          <Text style={styles.noLogginText}>Voltar</Text>
        </Pressable>
      </Animatable.View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#5F7161',
    elevation: 4,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.8,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    height: 40,
    margin: 15,
    padding: 10,
    width: '90%',
    color: '#fff',
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  signUpButton: {
    backgroundColor: '#FCF9C6',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FCF9C6',
    marginTop: 20,
  },
  pressed: {
    opacity: 0.9,
  },
  buttonText: {
    color: '#5F7161',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewIcons: {
    marginTop: 40,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  orText: {
    marginTop: 30,
    fontSize: 18,
    color: '#5F7161',
  },
  noLoggin: {
    marginTop: 30,
  },
  noLogginText: {
    fontSize: 18,
    color: '#5F7161',
  },
})
