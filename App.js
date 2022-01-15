import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { RNCamera } from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'

const App = () => {
  const qrcodeRef = useRef(null)
  const [link, setLink] = useState("")

  const handleLink = () => {
    Linking.openURL(link).catch(() => {
      console.log("Houve um erro")
    })

    qrcodeRef.current.reactivate()
  }

  return (
    <QRCodeScanner
      ref={qrcodeRef}
      onRead={({ data }) => setLink(data)}
      flasMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <View>
          <Text>{link}</Text>
        </View>
      }
      bottomContent={
        <View>
          <TouchableOpacity 
            onPress={() => handleLink()}
            style={{ padding: 12, backgroundColor: "#0277BD", marginTop: 20 }}>
            <Text style={{ color: "#FFFFFF" }}>Ir para link</Text>
          </TouchableOpacity>
        </View>
      }
    />
  )
}

export default App