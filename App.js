import React from 'react'
import { NativeBaseProvider, Divider, ScrollView, Box } from 'native-base'
import Header from './src/components/Header'
import Appbar from './src/components/Appbar'
import Textos from './src/components/Textos'
import Imagens from './src/components/Imagens'
import Botoes from './src/components/Botoes'




export default function App() {

  return (
    <NativeBaseProvider>
      <ScrollView >
      <Box flex={1} _dark={{bg: 'coolGray.800'}} _light={{bg: 'warmGray.50'}}>
        <Appbar />
        <Textos />
        <Divider />
        <Header />
        <Imagens/>
        <Botoes/>
        </Box>        
      </ScrollView>      
    </NativeBaseProvider>
  )
}
