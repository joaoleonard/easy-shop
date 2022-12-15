import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function NewShopScreen({ navigation }) {
  const [cardInfo, setCardInfo] = useState({ cardName: '', where: '' })

  function handleCreateCard() {
    navigation.navigate('Card', {
      data: cardInfo,
    })
  }

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setCardInfo((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredValue,
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Preencha os dados do seu carrinho</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Compra Mensal"
        onChangeText={inputChangeHandler.bind(this, 'cardName')}
        value={cardInfo.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Ex: Muffato"
        onChangeText={inputChangeHandler.bind(this, 'where')}
        value={cardInfo.password}
      />
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.loginButton, styles.pressed] : styles.loginButton
        }
        title="Entrar">
        <Text style={styles.buttonText} onPress={handleCreateCard}>
          Criar
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#B2B2B2',
    height: 40,
    margin: 15,
    padding: 10,
    width: '90%',
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#B2B2B2',
    marginTop: 20,
  },
  pressed: {
    opacity: 0.9,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
