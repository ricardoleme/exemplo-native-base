import React from 'react'
import { Column, Image, Avatar, Icon, Text } from 'native-base'
import dog from '../assets/images/dog.jpg'
import urso from '../assets/images/urso.jpg'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import IconeCustomizado from './IconeCustomizado'

export default function Imagens() {

  return (
    // Tamanhos: 'xs', 'sm', 'md', 'lg', 'xl', '2xl'
    // Para consultar os ícones: https://icons.expo.fyi/
    <>
      <Column space={2} justifyContent='center' alignItems='center' safeAreaTop my={6} mb={6}>
        {/* Imagem própria*/}
        <Image key='buldogue' size='lg' resizeMode='cover' source={dog} alt={'Buldogue Francês em P&B'} />
        {/* Imagem remota */}
        <Image key='obi' size='xl' resizeMode='cover' source={{ uri: 'https://wallpaperaccess.com/full/8051222.jpg' }} alt={'Obi Wan Kenobi'} />
        {/* Tamanho fixado arredondado */}
        <Image key='urso' size='300' resizeMode='cover' alt='Ursão' borderRadius={150} source={urso} />

        {/* Avatar sem conseguir carregar a imagem */}
        <Avatar bg='indigo.500' alignSelf='center' size='md' source={{uri: 'https://algumsite.com.br/foto.png'}}>RL</Avatar>
        {/* Avatar com a imagem */}
        <Avatar bg='indigo.500' alignSelf='center' size='sm' source={dog}>RL</Avatar>

        {/* Exemplo de ícone do Expo */}
        <Icon as={MaterialCommunityIcons} name='dog-side' size='20' color='primary.800' />
        {/* Emoji - tamanho padrão*/}
        🤣
        {/* Emoji - tamanho maior*/}
        <Text fontSize="6xl">🤣</Text>
        {/* Exemplo de ícone SVG */}
        <IconeCustomizado />
      </Column>
    </>
  )
}