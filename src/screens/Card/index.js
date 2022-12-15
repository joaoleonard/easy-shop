import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import AddItemModal from '../../components/AddItemModal'
import FinishShopModal from '../../components/FinishShopModal'
import CardItem from '../../components/CardItem'

import { currentConverter } from '../../utils'
import { Ionicons } from '@expo/vector-icons'

import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CardScreen({ route }) {
  const [addItemModalIsOpen, setAddItemModalIsOpen] = useState(false)
  const [finishShopModalIsOpen, setFinishShopModalIsOpen] = useState(false)

  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const navigation = useNavigation()

  function changeAddItemModalState() {
    setAddItemModalIsOpen(!addItemModalIsOpen)
  }

  function changeFinishShopModalState() {
    setFinishShopModalIsOpen(!finishShopModalIsOpen)
  }

  function handleAddItem(item) {
    item.price = Number(item.price.replace(/,/g, '.'))
    items.push(item)
    const newPrice = totalPrice + item.price
    setTotalPrice(newPrice)
  }

  function handleFinishShop() {
    navigation.navigate('HomeScreen')
  }

  function addAmount(item) {
    const thisItem = items[item.index]
    thisItem.amount = thisItem.amount + 1
    let newPrice = 0
    items.map((item) => {
      const itemPrice = item.price * item.amount
      newPrice = newPrice + itemPrice
    })
    setTotalPrice(newPrice)
  }

  async function removeAmount(item) {
    const thisItem = items[item.index]

    if (thisItem.amount === 1) {
      const newItems = items.filter((product) => product.name != thisItem.name)
      setItems(newItems)

      let newPrice = 0
      newItems.map((item) => {
        const itemPrice = item.price * item.amount
        newPrice = newPrice + itemPrice
      })
      setTotalPrice(newPrice)
    } else {
      thisItem.amount = thisItem.amount - 1

      let newPrice = 0
      items.map((item) => {
        const itemPrice = item.price * item.amount
        newPrice = newPrice + itemPrice
      })
      setTotalPrice(newPrice)
    }
    console.log(items)
  }

  const params = route.params.data

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={[styles.cardName, { display: !params.cardName && 'none' }]}>
          {params.cardName}
        </Text>
        <Text style={[styles.where, { display: !params.where && 'none' }]}>
          {params.where}
        </Text>
      </View>
      {items.length > 0 ? (
        <FlatList
          style={{
            width: '100%',
            paddingLeft: '10%',
            marginBottom: 70,
            paddingTop: 10,
          }}
          data={items}
          renderItem={(itemData) => {
            return (
              <CardItem
                name={itemData.item.name}
                price={itemData.item.price}
                amount={itemData.item.amount}
                onAddAmount={() => addAmount(itemData)}
                onRemoveAmount={() => removeAmount(itemData)}
                key={itemData.item.name}
              />
            )
          }}
        />
      ) : (
        <Text style={styles.emptyMessage}>Seu carrinho está vazio.</Text>
      )}
      <Pressable style={styles.addItemButton}>
        <Ionicons
          name="add"
          size={30}
          color="#ffffff"
          onPress={changeAddItemModalState}
        />
      </Pressable>
      {addItemModalIsOpen && (
        <AddItemModal
          visible={addItemModalIsOpen}
          closeModal={changeAddItemModalState}
          addItem={handleAddItem}
        />
      )}
      {finishShopModalIsOpen && (
        <FinishShopModal
          visible={finishShopModalIsOpen}
          closeModal={changeFinishShopModalState}
          finishShop={handleFinishShop}
        />
      )}
      <View style={styles.totalView}>
        <Text style={styles.totalPriceText}>
          Total: {currentConverter(totalPrice)}
        </Text>
        <Pressable
          style={styles.finishButton}
          onPress={changeFinishShopModalState}>
          <Text style={styles.finishButtonText}>Finalizar</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    borderRadius: 50,
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  where: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#a7a7a7',
  },
  emptyMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  addItemButton: {
    backgroundColor: '#9EB23B',
    padding: 15,
    borderRadius: '50%',
    position: 'absolute',
    bottom: 77,
    right: 10,
  },
  totalView: {
    width: '100%',
    height: 70,
    backgroundColor: '#2d2d2d',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  totalPriceText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  finishButton: {
    backgroundColor: '#FCF9C6',
    padding: 10,
    borderRadius: 15,
  },
  finishButtonText: {
    color: '#383838',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
