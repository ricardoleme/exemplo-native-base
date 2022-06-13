import React from "react"
import { NativeBaseProvider, Divider, ScrollView } from "native-base"
import Header from './src/components/Header'
import Appbar from './src/components/Appbar'
import Textos from './src/components/Textos'




export default function App() {

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Appbar />
        <Textos />
        <Divider />
        <Header />
      </ScrollView>
    </NativeBaseProvider>
  )
}
