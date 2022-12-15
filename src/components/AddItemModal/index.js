import { useState } from 'react'
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'

export default function AddItemModal(props) {
  const [dataItem, setDataItem] = useState({ name: '', price: '', amount: 1 })

  function closeModal() {
    props.closeModal()
  }

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setDataItem((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredValue,
      }
    })
  }

  function addItem() {
    props.addItem(dataItem)
    closeModal()
  }

  return (
    <View style={styles.centeredView} blurRadius={1}>
      <Modal visible={props.visible} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Adicionar ao carrinho</Text>
            <View style={styles.inputView}>
              <Text style={styles.labelInput}>Nome do item</Text>
              <TextInput
                placeholder="Ex: arroz"
                placeholderTextColor={'#ccc'}
                style={styles.input}
                onChangeText={inputChangeHandler.bind(this, 'name')}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.labelInput}>Preço</Text>
              <TextInput
                placeholder="Ex: 2,99"
                keyboardType="numeric"
                placeholderTextColor={'#ccc'}
                style={styles.input}
                onChangeText={inputChangeHandler.bind(this, 'price')}
              />
            </View>
            <View style={styles.actionButtons}>
              <Pressable
                onPress={closeModal}
                style={[styles.actionButton, styles.cancel]}>
                <Text style={styles.actionButtonText}>Cancelar</Text>
              </Pressable>
              <Pressable
                onPress={addItem}
                style={[styles.actionButton, styles.confirm]}>
                <Text style={styles.actionButtonText}>Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3C4048',
  },
  inputView: {
    marginBottom: 15,
  },
  labelInput: {
    color: '#383838',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#B2B2B2',
    fontSize: 20,
    paddingBottom: 5,
    color: '#434242',
    backgroundColor: 'transparent',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionButton: {
    padding: 10,
    borderRadius: 10,
  },
  cancel: {
    backgroundColor: '#E64848',
  },
  confirm: {
    backgroundColor: '#C7D36F',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
