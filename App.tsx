import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  Alert,
  Text,
  TextInput,
  InputAccessoryView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const MARGIN_HORIZONTAL = 16
const INPUT_HEIGHT = 38
const BUTTON_OFFSET = 4
const BUTTON_HEIGHT = INPUT_HEIGHT - BUTTON_OFFSET * 2

export default function App() {
  const [text, setText] = useState('')

  const _onChangeText = (t: string): void => {
    setText(t)
  }

  const _onSendMessage = (): void => {
    Alert.alert('Message', text)
  }

  const { width: windowWidth } = useWindowDimensions()
  const width = windowWidth - MARGIN_HORIZONTAL * 2

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar style="auto" />
      <Text>Type ⌨ something in the input below 👇</Text>
      <InputAccessoryView>
        <View style={styles.textInputContainer}>
          <TextInput
            value={text}
            style={[styles.textInput, { width }]}
            placeholder="iMessage"
            onChangeText={_onChangeText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={_onSendMessage}>
            <Ionicons
              name="md-arrow-round-up"
              size={22}
              color="white"
              style={styles.sendIcon}
            />
          </TouchableOpacity>
        </View>
      </InputAccessoryView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputContainer: {
    width: '100%',
    height: INPUT_HEIGHT,
    paddingHorizontal: MARGIN_HORIZONTAL,
    marginBottom: 4
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: INPUT_HEIGHT / 2,
    width: 100,
    height: INPUT_HEIGHT,
    paddingHorizontal: 12,
    fontSize: 18,
    lineHeight: 24,
    paddingTop: 0,
    paddingBottom: 4
  },
  sendButton: {
    position: 'absolute',
    right: MARGIN_HORIZONTAL + BUTTON_OFFSET,
    top: BUTTON_OFFSET,
    width: BUTTON_HEIGHT,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    backgroundColor: '#4579FB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendIcon: {
    marginLeft: 1,
    fontWeight: '600'
  }
})
