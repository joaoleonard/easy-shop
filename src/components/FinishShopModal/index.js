import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

export default function FinishShopModal(props) {
  function closeModal() {
    props.closeModal()
  }

  function finishShop() {
    props.finishShop()
    closeModal()
  }

  return (
    <View style={styles.centeredView} blurRadius={1}>
      <Modal visible={props.visible} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Finalizar compra?</Text>
            <View style={styles.actionButtons}>
              <Pressable
                onPress={closeModal}
                style={[styles.actionButton, styles.cancel]}>
                <Text style={styles.actionButtonText}>Cancelar</Text>
              </Pressable>
              <Pressable
                onPress={finishShop}
                style={[styles.actionButton, styles.confirm]}>
                <Text style={styles.actionButtonText}>Finalizar</Text>
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
