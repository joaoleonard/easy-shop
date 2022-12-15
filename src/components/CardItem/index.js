import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { currentConverter } from '../../utils'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

export default function CardItem(props) {
  const { name, price } = props
  const [amount, setAmount] = useState(props.amount)

  function addAmount() {
    props.onAddAmount()
    setAmount(amount + 1)
  }

  function removeAmount() {
    props.onRemoveAmount()
    if (amount === 1) {
      return
    }
    setAmount(amount - 1)
  }

  const priceConverted = Number(price * amount)

  return (
    <View style={styles.box}>
      {/* <Image></Image> */}
      {/* Aqui vai ser a imagem, mas por enquanto, usar essa View para representar o tamanho */}
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{currentConverter(priceConverted)}</Text>
        </View>
      </View>
      <View style={styles.amountView}>
        <Pressable style={styles.changeAmount} onPress={removeAmount}>
          <Ionicons name="remove" size={20} color="#fff" />
        </Pressable>
        <Text style={styles.amountText}>{amount}</Text>
        <Pressable style={styles.changeAmount} onPress={addAmount}>
          <Ionicons name="add" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    width: '85%',
    marginBottom: 10,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: '#ccc',
    borderRadius: 13,
  },
  info: {
    marginLeft: 20,
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9EB23B',
  },
  price: {
    fontSize: 17,
    color: '#a7a7a7',
  },
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeAmount: {
    backgroundColor: '#ccc',
    width: 30,
    height: 30,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountText: {
    color: '#9EB23B',
    fontSize: 20,
    marginHorizontal: 10,
  },
})
